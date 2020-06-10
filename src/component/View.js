import React, { Component } from 'react'
import Axios from 'axios';
export default class View extends Component {
    constructor(){
        super();
        this.state={
            imags:'',
            description:'',
            titile:''
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
                description:res.data.DATA.DESCRIPTION
            })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={this.state.image} alt="image" style={{width:'100px',height:'100px',marginTop:'2%',float:'left'}}/>
                        <h4 style={{marginTop:'2%',marginLeft:'10%'}}>{this.state.title}</h4>
                        <p style={{marginLeft:'10%'}}>{this.state.description}</p>
                    </div>
                </div>
               
            </div>
        )
    }
}
