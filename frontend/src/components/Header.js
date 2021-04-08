import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({email: this.email.value, password: this.password.value});
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }
    
    render(){
        return (
            <React.Fragment>

                {/* NAVBAR */}
                <Navbar dark className="background-header" expand="lg">
                <div className="container" style={{fontFamily: 'FiraSans-Light'}}>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">World Beer Cup</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/beers">
                                Beers
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/reservations">
                                Reservations
                            </NavLink>
                        </NavItem>
                    { this.props.auth.isAuthenticated ?
                        <NavItem>
                            <NavLink className="nav-link" to="/favorites">
                                Favorites
                            </NavLink>
                        </NavItem>
                        :   ''
                    }
                        <NavItem>
                            { !this.props.auth.isAuthenticated ?
                                <Button outline onClick={this.toggleModal}>
                                    Login
                                </Button>
                            :
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-user-circle-o" aria-hidden="true" ></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.handleLogout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            }
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
                </Navbar>

                {/* LOGIN MODAL */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <Form onSubmit={this.handleLogin}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label htmlFor="email">email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            { this.props.auth.errors ?
                                <Label htmlFor="email" style={{color: "red"}}>{this.props.auth.errors.email ? this.props.auth.errors.email[0] : ''}</Label>
                            : ''}
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
                            <div style={{textAlign: "right"}}>Not Registered? <Link to="/signin" onClick={() => this.toggleModal()}>Sign In</Link></div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
                
            </React.Fragment>
        );
    }
}

export default Header;