import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  };
  
  authUnsubscription = null;

  componentDidMount() {
    this.authUnsubscription = auth.onAuthStateChanged(newUser => {
      this.setState( {currentUser: newUser} );
      console.log(newUser)
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
