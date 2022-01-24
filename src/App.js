import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Odd from './components/OddUserId/OddUserIdList';
import UserSeperation from '../src/redux/action/index';
import Even from './components/EvenUserId/EvenUserIdList';
import {createStore, applyMiddleware} from 'redux';  
import {Provider}from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './redux/reducers/index';


function App() {
  return (
    <Router>
    <div>
     <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route  path='/UserSeperation' element={<UserSeperation/>}></Route>
        <Route  path='/Odd' element={<Odd />}></Route>
        <Route  path='/Even' element={<Even/>}></Route>
     </Routes>
    </div>
 </Router>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import { connect } from 'react-redux';
// import {getListOfUsers} from './apis';
// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {
  
//     //console.log(this.props.users);

//   }

//   render
    
    
 
//     let users = null;
//     /*let err = null;
//     if (this.props.users && this.props.users.length > 0) {
//       users = this.props.users.map((userr, index) => {
//         console.log(userr);*/
       
//         return (
//         <div>
//           <h1>Fetching data</h1>
//           {this.props.users && <ul>
//             <li>{this.props.users.id}</li>
//             <li>{this.props.users.title}</li>
//               </ul>}
//         </div>
        
              
           
         
         
//       )
      
    
 
//   }
 
  
// }
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     users: state.users
//   }
// }


// export default connect(mapStateToProps)(App);
