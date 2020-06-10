import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home';
import Add from './component/Add';
import Update from './component/Update';
import View from './component/View';
import PageNotFount from './component/PageNotFount';

import Axios from 'axios';
export default class App extends Component {
  constructor(){
    super();
    this.state={
        data:[]
    }
    
  }
  Refresh(){
    Axios.get("http://110.74.194.124:15011/v1/api/articles?page=1&limit=15")
    .then((res)=>{
        this.setState({
            data:res.data.DATA
        })
    })
  }
  componentDidMount(){
      this.Refresh()
  }
  render() {
    return (
      <div>
        <Router>
          <Menu/>
          <Switch>
              <Route  path='/' exact render={()=><Home data={this.state.data} Refresh={this.Refresh()}/>}/>
              {/* <Route  path='/Add' component={Add}/> */}
              <Route  path='/Add' render={(props)=><Add {...props} Refresh={this.Refresh()}></Add>}/>
              <Route  path='/View/:id' render={(props)=><View {...props}></View>}/>
              <Route  path='/Update/:id' render={(props)=><Update {...props} Refresh={this.Refresh()}></Update>}/>
              <Route path='*' component={PageNotFount}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

