import React, { Component } from 'react'
import {Form,Nav,FormControl,Button,Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
export default class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{fontWeight:'700'}}>AMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link  as={Link} to="/">Home</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>    
                </Navbar>
            </div>
        )
    }
}
