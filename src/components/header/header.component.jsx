import React from 'react';

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/home-svgrepo-com.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/'>
                CONTACT
            </Link>
            {
                currentUser
                ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/sign-in-up'> SIGN IN </Link>
            }
            <CartIcon />
        </div>
        {
            hidden 
            ? null
            : <CartDropdown />
        }
    </div>
)
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser, hidden
})
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser 
//     // the parameter(state) passed into this object is the root reducer
//     // and this would yield action.payload
//     // 1)state = combinedReducers function
//     // 2)user(off of state) = userReducer
//     // 3)currentUser(off of userReducer) = action.payload

//     // the property(currentUser) of this object is what we destructure into 
//     // the Header component 
// })

export default connect(mapStateToProps)(Header);
// connect (an HOC) takes two argument, the 1st => a function that allows 
// us access the state (being our root reducer) and the 2nd => being 
// optional(and not needed in this case); the entire result is then 
// connected to the Header component, yielding a powered up Header component