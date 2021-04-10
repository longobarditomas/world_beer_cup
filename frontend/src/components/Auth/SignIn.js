import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Row, Col } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.handleSignin = this.handleSignin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleSignin(values) {
        this.props.signinUser({name: values.name, email: values.email, password: values.password, password_confirmation: values.password_confirmation});
    }

    render(){
        if (!this.props.auth.isAuthenticated) {
            return (
                <React.Fragment>
                    <div className="container component-container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Sign In</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3 className='App-subtitle'>Sign In</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-12 col-md-4 offset-md-4">
                                <LocalForm onSubmit={(values) => this.handleSignin(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="name" md={12}>Name</Label>
                                        <Col md={12}>
                                            <Control.text model=".name" id="name" name="name"
                                                rows="6"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3),
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={{
                                                    required: 'Required. ',
                                                    minLength: 'Must be greater than 3 characters.',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="email" md={12}>Email</Label>
                                        <Col md={12}>
                                            <Control.text model=".email" id="email" name="email"
                                                type="email"
                                                rows="6"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3),
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                messages={{
                                                    required: 'Required. ',
                                                    minLength: 'Must be greater than 3 characters.',
                                                }}
                                            />
                                        { this.props.auth.errors ?
                                            <Label htmlFor="email" style={{color: "red"}}>{this.props.auth.errors.email ? this.props.auth.errors.email[0] : ''}</Label>
                                        : ''}
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="password" md={12}>Password</Label>
                                        <Col md={12}>
                                            <Control model=".password" id="password" name="password"
                                                type="password"
                                                rows="6"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(8),
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                messages={{
                                                    required: 'Required. ',
                                                    minLength: 'Must be greater than 8 characters.',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="password_confirmation" md={12}>Password</Label>
                                        <Col md={12}>
                                            <Control model=".password_confirmation" id="password_confirmation" name="password_confirmation"
                                                type="password"
                                                rows="6"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(8),
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password_confirmation"
                                                show="touched"
                                                messages={{
                                                    required: 'Required. ',
                                                    minLength: 'Must be greater than 8 characters.',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Button type="submit" value="submit" color="primary">Sign In</Button>
                                </LocalForm>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return ( <Redirect to="/" /> );
        }
    }
}

export default SignIn;