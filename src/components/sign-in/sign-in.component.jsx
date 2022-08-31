import React from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { googleSignIn } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState( {email: '', password: ''} )
    }

    handleChange = e => {
        // const val = e.target.value
        // const nm = e. target.name
        // this.setState( {[nm]: val} )
        const {value, name} = e.target;
        this.setState( {[name]: value} )
        // whatever is being typed is retrieved as the value and passed into
        // the name (either email or paassword) which becomes the new state
        // console.log(e.target.value) console.log(e.target.name) <= see both
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'> Sign in Here </h2>
                <span> Sign in with email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <Button type="submit"> Sign In </Button>
                        <Button onClick={googleSignIn} isGoogleSignIn> Sign In with google </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;