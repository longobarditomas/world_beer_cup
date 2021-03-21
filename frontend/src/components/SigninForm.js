import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Nav, NavItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class SigninForm extends Component {

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

    handleSignin(event) {
        this.props.signinUser({name: this.name.value, email: this.email.value, password: this.password.value, password_confirmation: this.password_confirmation.value});
        event.preventDefault();
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
                                <Form onSubmit={this.handleSignin}>
                                    <FormGroup>
                                        <Label htmlFor="name">Name</Label>
                                        <Input type="text" id="name" name="name"
                                            innerRef={(input) => this.name = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="text" id="email" name="email"
                                            innerRef={(input) => this.email = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" name="password"
                                            innerRef={(input) => this.password = input}  />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password_confirmation">Password Confirmation</Label>
                                        <Input type="password" id="password_confirmation" name="password_confirmation"
                                            innerRef={(input) => this.password_confirmation = input}  />
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Sign In</Button>
                                </Form>
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

export default SigninForm;