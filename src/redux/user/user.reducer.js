import { ActionTypesUser } from "./user.types"

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypesUser.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
// this is sent to the root reducer and stored in the 'user' key in the
// combinedReducers function

// the state parameter is going to be what the redux store will pass to 
// this reducer whenever an action fires (as in mapStateToProps object 
// in header component)

export default userReducer;  