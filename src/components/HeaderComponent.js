import React,{Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav,  NavbarToggler, Collapse, NavItem, Button, Modal, ModalBody, ModalHeader, FormGroup, Form, Label, Input,toggle, isOpen } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar light expand="md">
                    <div className="container">
                        <NavbarToggler onClick = {this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/logo.png" height="30px" width="30px" alt="NPS"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>      
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        About Us
                                    </NavLink>
                                </NavItem>   
                                <NavItem>
                                    <NavLink className="nav-link" to="/work">
                                        <span>That's how we work</span>
                                    </NavLink>    
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span>Contact US</span>
                                    </NavLink>    
                                </NavItem>                                                     
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
          </div>
        )
    }
}

export default Header;