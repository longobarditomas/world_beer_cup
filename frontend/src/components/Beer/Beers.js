import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardGroup, Breadcrumb, BreadcrumbItem, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
/* import { Loading } from './Loading'; */
import { baseUrl } from '../../shared/baseUrl';

	function RenderMenuItem({ beer, fetchComments }) {
		return(
			<Card className={`beer-color-${beer.category}`}>
				<Link /* onClick={() => fetchComments(beer.id)} */ to={`/beers/${beer.id}`} style={{textDecoration: 'none'}}>
                    <CardImg top src={baseUrl + beer.image} alt={beer.name} />
                    <CardBody style={{ minHeight: '4rem' }}>
                        <CardTitle>
							<div className="item-title">
								<h5>{beer.name}</h5>
							</div>
						</CardTitle>
                        <CardText>
							<hr style={{backgroundColor: 'white'}}/>
							<div className="item-type">
								<Row xs="3" className="show-grid">
									<Col><b>Alcohol</b></Col>
									<Col><b>Country</b></Col>
									<Col><b>Style</b></Col>
									<Col>{beer.alcohol}</Col>
									<Col>{beer.country}</Col>
									<Col>{beer.color}</Col>
								</Row>
							</div>
						</CardText>
                    </CardBody>
				</Link>
			</Card>
		);
	}

	const Beers = (props) => {

		const menu = props.beers.beers.map((beer) => {
			return (
				<div key={beer.id} className="col-12 col-md-4 mt-5">
					<RenderMenuItem beer={beer} fetchComments={props.fetchComments} />
				</div>
			);
		});

        if (props.beers.isLoading) {
            return(
                <div className="container component-container">
                    <div className="row">  
                        {/* <Loading /> */}
						<h3>LOADING...</h3>
                    </div>
                </div>
            );
        }
        else if (props.beers.errMess) {
            return(
                <div className="container component-container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.beers.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
			return (
				<div className="container component-container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
							<BreadcrumbItem active>Beers</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3 className='App-subtitle'>Beers</h3>
							<hr />
						</div>                
					</div>
					<div>
                        <CardGroup>
						    {menu}
                        </CardGroup>
					</div>
				</div>
			);
	}


export default Beers;