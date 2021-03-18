import React, { Component, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardText, CardBody, CardTitle, CardHeader, Row, Label, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addMonths, setHours, setMinutes } from "date-fns";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

function DatePickerComponent() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            onChange={date => setStartDate(date)} 
            showTimeSelect 
            minDate={subDays(new Date(), 0)} 
            maxDate={addMonths(new Date(), 2)} 
            minTime={setHours(setMinutes(new Date(), 0), 17)} 
            maxTime={setHours(setMinutes(new Date(), 30), 22)} 
            dateFormat="MMMM d, yyyy h:mm aa" 
            placeholderText="Select a date"
            className="date-picker"
            withPortal
        />
    );
}

class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log(values);
        /* this.props.postReservation(values);
        this.props.resetReservationForm(); */
        // event.preventDefault();
    }

    render() {
        return (
            <Card style={{marginBottom: '20px'}}>
                <CardBody>
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values) }>
                        <Row className="form-group">
                            <Label htmlFor="date" md={4} style={{textAlign: 'left'}}>Date*</Label>
                            <Col md={8}>
                                <DatePickerComponent />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="party" md={4} style={{textAlign: 'left'}}>Party size*</Label>
                            <Col md={8}>
                                <Control.select model=".party" name="party"
                                    className="form-control" validators={{required, isNumber}}>
                                    <option>Select</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Control.select>
                                <Errors
                                    className="text-danger"
                                    model=".party"
                                    show="touched"
                                    messages={{
                                        required: 'Required.',
                                        isNumber: ' Please select.'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="requeriments" xs={12} style={{textAlign: 'left'}}>Special requirements</Label>
                            <Col>
                                <Control.textarea model=".requeriments" id="requeriments" name="requeriments"
                                    rows="2"
                                    className="form-control" 
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" className="reservation-btn">Book a table</Button>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        );
    }
}

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
                        <h3 className='App-subtitle'>Reservations</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-8 r-description">
                        <img src={baseUrl + 'images/reservations.jpg'} style={{width:'100%', marginBottom: '40px'}} />
                        <p>Book your table, come to try this year's selection of beers and choose your favorite! We will be waiting for you with cold beer and salty popcorn.</p><br />
                        <p>At World Beer Cup we take very seriously the distancing protocols required by the current situation both on the terrace and inside the bar.</p><br />
                    </div>
                    <div className="col-12 col-lg-4" style={{textAlign: 'center'}}>
                        <ReservationForm reservations={props.reservations} deleteReservation={props.deleteReservation} />
                        <RenderReservations reservations={props.reservations} deleteReservation={props.deleteReservation} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Reservations;