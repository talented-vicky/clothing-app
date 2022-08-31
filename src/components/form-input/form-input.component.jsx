import React from 'react';

import './form-input.styles.scss';

const FormInput = ( { handleChange, label, ...otherFormProps} ) => (
    <div className='form'>
        <input className='form-input' onChange={handleChange} {...otherFormProps}
        />
        {
            label ?
            (<label
                className={
                    `${otherFormProps.value.length ? 'shrink' : ''} form-input-label`
                }
            > 
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;