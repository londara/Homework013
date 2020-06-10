import React, { Component } from 'react'
import { Row, Col, Button ,Table,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Axios from 'axios';

export default class Home extends Component {
    onDeleted=(id)=>{
        Axios.delete(`http://110.74.194.124:15011/v1/api/articles/${id}`)
        .then((res)=>{
            alert(res.data.MESSAGE)
        })
    }
    render() {
        return (
            <div>
                <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h1>Article Management</h1>
                        <Button  as={Link} to="/Add" variant="dark">Add New Article</Button>
                    </Col>  
                </Row>
                <Row style={{marginTop:'2%'}}>
                    <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>TITLE</th>
                                    <th>DESCRIPTION</th>
                                    <th>CREATE DATE</th>
                                    <th>IMAGE</th>
                                    <th>ACTIVE</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.props.data.map((d)=>
                                   <tr key={d.ID}>
                                       <td>{d.ID}</td>
                                       <td>{d.TITLE}</td>
                                       <td>{d.DESCRIPTION}</td>
                                       <td>{d.CREATED_DATE}</td>
                                       <td><img src={d.IMAGE} style={{width:'100px'}}/></td>
                                       <td style={{width:'250px'}}><Button  as={Link} to={`/View/${d.ID}`} variant="primary">View</Button>{' '}
                                            <Button  as={Link} to={`/Update/${d.ID}`}  variant="success">Update</Button>{' '}
                                            <Button variant="danger" onClick={()=>this.onDeleted(d.ID)}>Delete</Button>{' '}
                                        </td>  
                                   </tr> 
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
