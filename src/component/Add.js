import React, { Component } from 'react'
import { Row, Col ,Button,Form, Container,Card} from 'react-bootstrap';
import Axios from 'axios';
export default class Add extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            desc:'',
            img:'',
            msg:'',
            save:false
        }
    }
    onChanged=(e)=>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]:value
        })
        this.setState({
            msg:true
        })
    }
    onSubmited=(e)=>{
        e.preventDefault();
        let title = this.state.title
        let desc = this.state.desc
        if(!(title==="" || desc==="")){
            this.setState({
                msg:true
            })
            let article={
                TITLE:this.state.title,
                DESCRIPTION:this.state.desc,
                IMAGE:'https://cdn.sabay.com/cdn/media.sabay.com/media/TECH-KK/RAKSA/Local(1)/Samsung(3)/5edf1691d4c9d_1591678560_medium.png'
            }
            Axios.post("http://110.74.194.124:15011/v1/api/articles",article)
            .then((res)=>{
                alert(res.data.MESSAGE)
                this.props.history.push("/")
            })
            this.setState({
                title:'',
                desc:''
            })
        }else{
            this.setState({
                msg:false
            })
        }
    }
    
    render() {
       
        return (
            <div>
                <Container>
                    <Row style={{marginTop:'2%'}}>
                        <Col md={8}>
                            <h1>Add Article</h1>
                            <Form onSubmit={this.onSubmited}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" name="title" placeholder="Enter Title" value={this.state.title} onChange={this.onChanged}/>
                                    <Form.Text className="text-muted">
                                       {this.state.msg===false ? <span style={{color:'red'}}>Please Enter Title!.</span>: null}
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="desc" placeholder="Enter Description" value={this.state.desc} onChange={this.onChanged}/>
                                    <Form.Text className="text-muted">
                                       {this.state.msg===false ? <span style={{color:'red'}}>Please Enter Description!.</span>: null}
                                    </Form.Text>
                                </Form.Group>
                                <Button  variant="primary" type="submit">Submit</Button>
                              
                            </Form>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" name="img" src="https://www.eltis.org/sites/default/files/default_images/photo_default_4.png" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
               
            </div>
        )
    }
}
