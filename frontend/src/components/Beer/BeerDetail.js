import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Row, Col } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { baseUrl } from '../../shared/baseUrl';
import Comments from './Comment/Comments';
import { Loading } from '../Loading';

function RenderBeer({beer, favorite, postFavorite, auth}) {
	const history = useHistory();
	if (beer != null) {
		return(
			<div className="col-12 col-md-6">
				<Card className={`beer-color-${beer.category}`}>
					<CardImg top src={baseUrl + beer.image} alt={beer.name} />
					<CardImgOverlay>
							<Button outline className={`pull-right beer-color-text-${beer.category}`} color="primary" onClick={() => !auth ? history.push('/login') : favorite ? console.log('Already favorite') : postFavorite(beer.id)}>
								{favorite ?
									<span className="fa fa-heart"></span>
									: 
									<span className="fa fa-heart-o"></span>
								}
							</Button>
						</CardImgOverlay>
					<CardBody>
						<CardTitle className="item-title"><h4>{beer.name}</h4></CardTitle>
						<CardText tag="div">
							<p className="item-description">{beer.description}</p>
							<hr style={{backgroundColor: 'white'}}/>
							<div className="item-type">
								<Row xs="3" className="show-grid">
									<Col><b>Alcohol</b></Col>
									<Col><b>Country</b></Col>
									<Col><b>Color</b></Col>
									<Col>{beer.alcohol}</Col>
									<Col>{beer.country}</Col>
									<Col>{beer.color}</Col>
								</Row>
							</div>
						</CardText>
					</CardBody>
				</Card>
			</div>
		);
	} 
	else {
		return(<div></div>);
	} 
}

const Beer = (props) => {
	if (props.isLoading) {
		return(
			<div className="container">
				<div className="row">            
					<Loading />
				</div>
			</div>
		);
	}
	else if (props.errMess) {
		return(
			<div className="container">
				<div className="row">            
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	}
	else if (props.beer != null) {
		return (
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/beers">Beers</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.beer.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3 className='App-subtitle'>Beers</h3>
						<hr />
					</div>                
				</div>
				<div className="row">
					<RenderBeer beer={props.beer} favorite={props.favorite} postFavorite={props.postFavorite} auth={props.auth} />
					<Comments comments={props.comments}
						postComment={props.postComment}
						beerId={props.beer.id}
						fetchComments={props.fetchComments}
					/>
				</div>
			</div>
		);
	}
	else {
		return (<div></div>)
	}
}

export default Beer;