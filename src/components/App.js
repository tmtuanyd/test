import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import {connect} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';
import {Dieuhuongurl} from './Router/Dieuhuongurl';


const getProductData=()=>(axios.get('/getdata').then((res)=>(res.data)))



class App extends Component {
  
  componentDidMount(){
      if(this.props.data===null){
        getProductData().then((res)=>{
          this.props.getdata(res)
          this.setState({
            data:res
          })
        })
      }
     }
  render() {
    
    return (
      <Router>
         <Dieuhuongurl/>
      </Router>
    );
  }
}
const mapStateToProps = (state,ownProps)=>{
  return{
    data:state.data
  }
}  
const mapDispatchToProps = (dispatch,ownProps)=>{
  return {
    getdata: (data)=>{dispatch({type:"GET_DATA",data})}
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(App)


