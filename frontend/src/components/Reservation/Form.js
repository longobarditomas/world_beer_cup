import React, { Component } from 'react';
import { Button, Card, CardBody, Row, Label, Col } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addMonths, setHours, setMinutes } from "date-fns";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

class ReservationForm extends Component {
    constructor(props) {
        var today = new Date();
        super(props);
        this.state = {
            startDate: new Date(today.getFullYear()+"/"+(today.getMonth()+2)+"/"+today.getDate()+" 20:30")
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({ startDate: date })
    }

    handleSubmit(data) {
        this.props.postReservation({ date: this.state.startDate, party: data.party, requeriments: data.requeriments});
    }

    render() {
        if (this.props.auth.isAuthenticated) {
            return (
                <Card style={{marginBottom: '20px'}}>
                    <CardBody>
                        <Form model="feedback" onSubmit={(data) => this.handleSubmit(data)}>
                            <Row className="form-group">
                                <Label htmlFor="date" md={4} style={{textAlign: 'left'}}>Date*</Label>
                                <Col md={8}>
                                    <DatePicker
                                        onChange={date => this.handleChange(date)} 
                                        selected={this.state.startDate}
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
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="party" md={4} style={{textAlign: 'left'}}>Party size*</Label>
                                <Col md={8}>
                                    <Control.select model=".party" name="party" className="form-control" validators={{required, isNumber}}>
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
        } else {
            return (
                <div><Card><CardBody><h6>Please <Link to="/login">Login</Link> to make a Reservation.</h6></CardBody></Card></div>
            )
        }
    }
}

export default ReservationForm;