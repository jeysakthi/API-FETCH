import React from 'react';
import ReactDOM from 'react-dom';
import getListOfUsers from '../../apis/index';
import UserSeperation from '../../redux/action/index'
import { connect } from 'react-redux';



const eventHandler=()=>{
    window.location.href="UserSeperation"
}
class Home extends React.Component{
  
   
    getlistofuser=()=>{
        this.props.dispatch(getListOfUsers());
        eventHandler()
    }
   
    render(){
        console.log(this.props.users);
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>API FETCH</h1>
                <button type="button" className="btn btn-dark" onClick={this.getlistofuser}>Fetch</button>
            </div>
        )
}

}
const mapStateToProps = (state) => {
    console.log(state);
    return {
      users: state.users
    }
  }
  

export default connect(mapStateToProps)(Home);
