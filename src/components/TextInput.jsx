import React from 'react';

import Base from './Base';

export default class TextInput extends Base {
    constructor(props) {
        super(props);
    }
    render() {
       
        const { input, meta: { touched, error }, name, label, text, type, className, disabled } = this.props;
        
        const disabledStatus = disabled ? 'disabled' : 'enabled';
        
        return (
            <div className={`TextInput column ${className || ''}`}> 
                <input 
                    {...input}  
                    disabled={disabled}
                    required
                    className='input_fields'
                    type={type}
                />
                <span className='bar'/>
                <label
                    htmlFor={name} 
                    className={`main_label ${disabledStatus} `}
                >
                    {label}
                </label>
                {touched && error &&
                    <label
                        className='error_label'
                        htmlFor={name}
                    >
                        {error}
                    </label>
                }
                {touched && error &&
                    <span className='error_bar'/>
                }      
            </div>
        );
    }
}