import React from "react";
import { connect } from "react-redux";

import {ReactComponent as ShopIcon} from '../assets/shopping-bag-svgrepo-com.svg';
import { toggleCartIcon } from "../../redux/cart/cart.action";

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartIcon}) => (
    <div className="cart-icon" onClick={toggleCartIcon}>
        <ShopIcon className="shop-icon"/>
        <span className="item-count"> 0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartIcon: () => dispatch(toggleCartIcon())
})

// export default CartIcon => at this stage we can't access toggleCartIcon
export default connect(null, mapDispatchToProps)(CartIcon)

// it's when and only when we've turned CartIcon into an HOC (importing 
// and resetting the cart action => toggleCartIcon) that we can now 
// conveniently destructure toggleCartIcon into CartIcon component 
// yielding a powered up component
