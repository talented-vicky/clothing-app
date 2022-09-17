import { ActionTypesUser } from "./user.types"

export const setCurrentUser = user => ({
    type: ActionTypesUser.SET_CURRENT_USER,
    payload: user
})

// Now we can bind this action using connect to the App 
// component itself