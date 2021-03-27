import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardImg, CardBody, CardTitle, CardText, CardGroup, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../shared/baseUrl';
import { Loading } from '../Loading';

function RenderMenuItem({ beer, deleteFavorite }) {
    return(
        <div className="col-12 col-md-6 mt-4">
            <Card className={`beer-color-${beer.category}`}>
                <Row>
                    <Col xs="5" md="5">
                        <CardImg top src={baseUrl + beer.image} alt={beer.name} />
                    </Col>
                    <Col xs="7" md="7" style={{paddingLeft: '0px'}}>
                            <div style={{textAlign: 'right'}}>
                                <Button style={{color: 'white', backgroundColor: 'transparent', border: 'none', fontSize:'0.7rem'}} onClick={() => deleteFavorite(beer.id)}>
                                    <span className="fa fa-times"></span>
                                </Button>
                            </div>
                        <CardBody className="fav-card">
                            <CardTitle className="fav-title">{beer.name}</CardTitle>
                            <CardText tag="div">
                                <hr style={{backgroundColor: 'white'}}/>
                                <div className="item-type">
                                    <Row xs="3" className="show-grid fav-details">
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
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

const Favorites = (props) => {

    if (props.favorites.isLoading) {
        return(
            <div className="container component-container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.favorites.errMess) {
        return(
            <div className="container component-container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.favorites.favorites) {
        const favorites = props.favorites.favorites.map((favorite) => {      
            return (
                <RenderMenuItem beer={favorite.beer} deleteFavorite={props.deleteFavorite} />
            );
        });

        return(
            <div className="container component-container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Activity</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 className='App-subtitle'>Favorites</h3>
                        <hr />
                    </div>
                </div>
                <Row>
                    <CardGroup>
                        {favorites}
                    </CardGroup>
                </Row>
            </div>
        );
    }
    else {
        return(
            <div className="container component-container">
                <div className="row">
                    <h4>You have no favorites</h4>
                </div>
            </div>
        )
    }
}

export default Favorites;