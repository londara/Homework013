import React, { Component } from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import Axios from 'axios';
export default class Update extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            image:'',
            desc:'',
            msg:'',
            
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
        let id = this.props.match.params.id
        console.log(id)
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
            Axios.put(`http://110.74.194.124:15011/v1/api/articles/${id}`,article)
            .then((res)=>{
                alert(res.data.MESSAGE)
                this.props.history.push("/");
               
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
    componentDidMount(){
        let id = this.props.match.params.id
        Axios.get(`http://110.74.194.124:15011/v1/api/articles/${id}`)
        .then((res)=>{
            console.log(res.data.DATA)
            this.setState({
                image:res.data.DATA.IMAGE,
                title:res.data.DATA.TITLE,
                desc:res.data.DATA.DESCRIPTION
            })
        })
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Update Article</h1>
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
                            <Button  variant="primary" type="submit">Update</Button>
                        </Form>
                    </div>
                    <div className="col-md-4" style={{marginTop:'2%'}}>
                        <Card>
                            <Card.Img variant="top" name="img" src={this.state.image} />
                        </Card>
                    </div>
                </div>
                
            </div>
        )
    }
}
