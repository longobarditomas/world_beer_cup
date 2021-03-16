import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardText, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

class RenderReservations extends Component {
    render() {
        if (this.props.reservations) {
            const reservations = this.props.reservations.reservations.map((reservation) => {      
                return (
                    <Card style={{marginBottom: '20px'}}>
                        <CardHeader style={{ backgroundColor: '#333333', color: 'white' }}>
                            <div><h6>My Reservation</h6></div>
                        </CardHeader>
                        <CardBody>
                            <CardText style={{textAlign: 'left'}}>
                                <div>
                                    <p><b>Date:</b> {reservation.date}</p>
                                    <p><b>Party:</b> {reservation.party} People.</p>
                                </div>
                            </CardText>
                            <div style={{textAlign: 'right'}} >
                                <Button outline color="danger" size="sm" onClick={() => this.props.deleteReservation(reservation.id)}>Cancel</Button>
                            </div> 
                        </CardBody>
                    </Card>
                );
            });
            return (
                <div>{reservations}</div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }
}  

const Reservations = (props) => {

    if (props.reservations.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    {/* <Loading /> */}
                    <h3>Is Loading...</h3>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Reservations</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Reservations</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 r-description">
                    <img src={baseUrl + 'images/reservations.jpg'} style={{width:'100%'}} />
                        <p>Reserve your table, come to try this year's selection of beers and choose your favorite! We will be waiting for you with cold beer and salty popcorn.</p><br />
                        <p>At World Beer Cup we take very seriously the distancing protocols required by the current situation both on the terrace and inside the bar.</p><br />
                    </div>
                    <div className="col-12 col-md-4" style={{textAlign: 'center'}}>
                        <RenderReservations reservations={props.reservations} deleteReservation={props.deleteReservation} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Reservations;