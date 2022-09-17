import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { connect } from 'react-redux/es/exports';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // };
  
  authUnsubscription = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.authUnsubscription = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
      // this is us checking if the user is signed in due to presence of an auth
        const userRef = await createUserProfileDoc(userAuth);
        // we're passing the userAuth obj into the profileDoc function
        // if there's a doc we get back the userRef, else we create a new
        // obj and doc in that place and still get back the userRef
        // using the block if(!snapShot.exists) as shown in 
        // the createUserProfileDoc function 
        
        // after which we listen to the userRef for changes in its data
        //getting back its data's first state
        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id, // this has our current userRef location id
          //     ...snapShot.data() // this has our data stored in the database
          //   }
          // }, () => console.log(this.state))
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() 
          }, () => console.log(this.state))
        })
      }

      // this.setState({currentUser: userAuth})
      // i.e if the user is logged out, user becomes null from Auth library
      setCurrentUser(userAuth)
    })
  }; 

  componentWillUnmount() {
    this.authUnsubscription();
  }

  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route 
            exact
            path='/sign-in-up' 
            element={
              this.props.currentUser ? (<Navigate replace to='/'/>) : (<SignInUp />)
            }
          />
        </Routes>
      </div>
    )
  };
};  

// we first have to destructure our user (off of our state) which 
// is the userReducer **see key(user) and value(userReducer) 
// in root-reducer.js
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // this is us resetting setCurrentUser from our user action before
  //passing it into our App

  // the dispatch method tells redux whatever is passed into it should be
  // an action obj which should be passed to every reducer; in the same
  // way that setCurrentUser returns an action object whose properties 
  // are "type" and "payload"
})

export default connect(
  mapStateToProps, // we now have access to this.props.currentUser
  mapDispatchToProps
  )(App);
// export default (App);

// connect (an HOC) takes two argument, the 1st => a function that 
// allows us access the state and the 2nd => being optional [a 
// function that dispatches the new (setCurrentUser from user.actions) 
// action to be passed] and the entire result is connected to the 
// App component yielding a powered up App component