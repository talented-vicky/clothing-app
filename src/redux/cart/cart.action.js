import ActionTypesCart from "./cart.types";

export const toggleCartIcon = () => ({
    type: ActionTypesCart.TOGGLE_CART_ICON
})


// we don't need payload because it's actually an optional property 
// in our action object, plus we're not using it in our cart reducer

// We can now conveniently bind this action using connect to the cart 
// icon component itself