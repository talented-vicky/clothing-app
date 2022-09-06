import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  };
  
  authUnsubscription = null;

  componentDidMount() {
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
          this.setState({
            id: snapShot.id, // this has our current userRef location id
            ...snapShot.data() // this has our data stored in the database
          })
        })
      }

      else { // i.e if the user is logged out, user bcoms null from Auth library
        this.setState({currentUser: userAuth})
      }
    })
  }; 

  componentWillUnmount() {
    this.authUnsubscription();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/sign-in-up' element={<SignInUp />}/>
        </Routes>
      </div>
    )
  };
};  

export default App;
