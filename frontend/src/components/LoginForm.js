import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Nav, NavItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleLogin(event) {
        this.props.loginUser({email: this.email.value, password: this.password.value});
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }
    render(){
        if (!this.props.auth.isAuthenticated) {
            return (
                <React.Fragment>
                    <div className="container component-container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Login</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3 className='App-subtitle'>Login</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-12 col-md-4 offset-md-4">
                                <Form onSubmit={this.handleLogin}>
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
                                <FormGroup check>
                                    <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
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

export default LoginForm;