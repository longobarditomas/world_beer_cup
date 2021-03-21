import React, {Component} from 'react';
import { Button, Card, CardImg, CardBody, CardTitle, CardText, CardGroup, Row, Col, CardHeader, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import apiClient from '../services/api';
import { baseUrl } from '../shared/baseUrl';

class Rankings extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
      
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        const topBeers = this.props.rates.rates.map((beer, index) => 
            <tr>
                <td>{index+1}</td>
                <td>
                    <Link to={`/beers/${beer.beer.id}`} style={{textDecoration: 'none'}}>
                        <img width="60px" src={baseUrl + beer.beer.image} alt={beer.beer.name} />
                    </Link>        
                </td>
                <td>
                    <Link to={`/beers/${beer.beer.id}`} style={{textDecoration: 'none'}}>
                        {beer.beer.name}
                    </Link>
                </td>
                { !isMobile ? 
                    <td>{beer.beer.alcohol}</td>
                    : ''}
                    <td>{beer.beer.country}</td>
                { !isMobile ? 
                    <td>{beer.beer.color}</td>
                : ''}
                    <td>{beer.counta}</td>
            </tr>
        );
        return (
            <Table style={{textAlign: 'left'}}>
                <thead>
                    <tr>
                        <th>{ !isMobile ? "Position" : "#" }</th>
                        <th></th>
                        <th>Name</th>
                    { !isMobile ? 
                        <th>Alcohol</th>
                    : ''}
                        <th>Country</th>
                    { !isMobile ? 
                        <th>Style</th>
                    : ''}
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>{topBeers}</tbody>
            </Table>
        );
    }
}


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
                    <h4>You will be participating to come and drink with your friends the best rated beers at the end of the world cup of beer!</h4>
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