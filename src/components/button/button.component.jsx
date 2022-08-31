import React from 'react';

import './button.styles.scss';

const Button = ( { children, isGoogleSignIn, ...otherButtonProps } ) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`} 
        {...otherButtonProps}>
        {children}
    </button>
);

export default Button;