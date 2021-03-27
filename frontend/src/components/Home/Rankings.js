import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../shared/baseUrl';

function Rankings( props ) {
    const topBeers = props.rates.rates.map((beer, index) => 
        <tr> 
            <td className="rank-display">{index+1}</td>
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
            <td className="rank-display">{beer.beer.alcohol}</td>
            <td className="rank-display">{beer.beer.country}</td>
            <td className="rank-display">{beer.beer.color}</td>
            <td>{beer.counta}</td>
        </tr>
    );
    return (
        <Table style={{textAlign: 'left'}}>
        <thead>
            <tr>
                <th className="rank-display">Position</th>
                <th></th>
                <th>Name</th>
                <th className="rank-display">Alcohol</th>
                <th className="rank-display">Country</th>
                <th className="rank-display">Style</th>
                <th>Votes</th>
            </tr>
        </thead>
        <tbody>{topBeers}</tbody>
    </Table>
    );
}

export default Rankings;