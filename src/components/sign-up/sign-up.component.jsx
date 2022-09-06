import React from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utils";

import './sign-up.styles.scss'


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state;
        // similar to what we did in appjs excep there's manual creation now
        if(password !== confirmPassword) {
            alert(`passwords do not match`);
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
            // this method from the auth library does its name literally
            // we used a destructure constant bcos we'd get a js object back
                email, 
                password
                );
            await createUserProfileDoc(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }) // upon success, we're setting our state to default empty 
        } catch(error) {
            console.log(error);
            // this is throwing an error, not the same as console
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState( {[name]: value} )
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'> I do not have an account </h2>
                <span> Sign up with your email and password </span>

                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        label='user Name'
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <Button type="submit"> Sign Up </Button>
                </form>
            </div>
        )
    }
}

export default SignUp;