import React from 'react';
import { Row, Col } from 'reactstrap';
import { baseUrl } from '../../shared/baseUrl';
import Rankings from './Rankings';

const Home = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className='App-title'>Welcome to World Beer Cup!</h2>
                    <hr />
                </div>
            </div>
            <img src={baseUrl + 'images/home.jpg'} style={{width:'100%', marginBottom: '40px'}} />
            <Row style={{paddingTop: "40px", paddingBottom: "40px"}}>
                <Col md="4">
                    <h3 style={{fontFamily: 'FiraSans-Light'}}>1</h3>
                    <h4>Come to try this year's selection of beers.</h4>
                </Col>
                <Col md="4">
                    <h3 style={{fontFamily: 'FiraSans-Light'}}>2</h3>
                    <h4>Don't forget to choose your favorite.</h4>
                </Col>
                <Col md="4">
                    <h3 style={{fontFamily: 'FiraSans-Light'}}>3</h3>
                    <h4>You'll be participating to come and drink with your friends the best rated beers at the end of the World Beer Cup!</h4>
                </Col>
            </Row>
            <div className="row">
                <div className="col-12">
                    <h3 className='App-subtitle' style={{textAlign: 'left'}}>Best rated beers</h3>
                </div>
            </div>
            <Rankings rates={props.rates}/>
        </div>
    );
}

export default Home;