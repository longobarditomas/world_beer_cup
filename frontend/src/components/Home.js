import React from 'react';
import { Button, Card, CardImg, CardBody, CardTitle, CardText, CardGroup, Row, Col, CardHeader, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import apiClient from '../services/api';
import { baseUrl } from '../shared/baseUrl';

const Rankings = () => {
    const [beers, setBeers] = React.useState([]);
    React.useEffect(() => {
        apiClient.get('http://localhost:8000/api/beers/top_beers')
        .then(response => {
            console.log(response.data)
            setBeers(response.data)
        })
        .catch(error => console.error(error));
    }, []);
    const topBeers = beers.map((beer, index) => 
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
            <td>{beer.beer.alcohol}</td>
            <td>{beer.beer.country}</td>
            <td>{beer.beer.color}</td>
            <td>{beer.counta}</td>
        </tr>
    );
    return (
        <Table style={{textAlign: 'left'}}>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Alcohol</th>
                    <th>Country</th>
                    <th>Style</th>
                    <th>Votes</th>
                </tr>
            </thead>
            <tbody>{topBeers}</tbody>
        </Table>
    );
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
            <Row>
                <img src={baseUrl + 'images/reservations.jpg'} style={{width:'100%', marginBottom: '40px'}} />
                <div className="col-12">
                    <h3 className='App-subtitle' style={{textAlign: 'left'}}>Rankings</h3>
                </div>
                <Rankings />
            </Row>
        </div>
    );
}

export default Home;