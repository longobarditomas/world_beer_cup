import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardText, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import { baseUrl } from '../../shared/baseUrl';
import ReservationForm from "./Form";

class RenderReservations extends Component {
    render() {
        if (this.props.reservations.reservations) {
            const reservations = this.props.reservations.reservations.map((reservation) => {      
                return (
                    <Card key={`reservation-${reservation.id}`}>
                        <CardHeader>
                            <div><h6>My Reservation</h6></div>
                        </CardHeader>
                        <CardBody>
                            <CardText tag="div" style={{textAlign: 'left'}}>
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
            <div className="container component-container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container component-container reservations">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Reservations</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3 className='App-subtitle'>Reservations</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 description">
                        <img src={baseUrl + 'images/reservations.jpg'} style={{width:'100%', marginBottom: '40px'}} alt="reservations" />
                        <i className="fa fa-cutlery" aria-hidden="true"></i>
                        <p>Book your table, come to try this year's selection of beers and choose your favorite! We will be waiting for you with cold beer and salty popcorn.</p><br />
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <p>At World Beer Cup we take very seriously the distancing protocols required by the current situation both on the terrace and inside the bar.</p><br />
                    </div>
                    <div className="col-12 col-lg-4" style={{textAlign: 'center'}}>
                        <ReservationForm reservations={props.reservations} postReservation={props.postReservation} deleteReservation={props.deleteReservation} auth={props.auth} />
                        <RenderReservations reservations={props.reservations} deleteReservation={props.deleteReservation} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Reservations;