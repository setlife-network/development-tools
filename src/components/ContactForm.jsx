import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import Base from './Base';

import { API_ROOT } from '../constants/index';

class ContactForm extends Base {
    handleSubmit() {

    }
    render() {
        return (
            <form action={API_ROOT + 'graph/'} method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' />

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' />

                <label htmlFor='message'>Message</label>
                <textarea name='message' rows='3'></textarea>

                <input type='submit' />
            </form>
        );
    }
}

ContactForm = reduxForm({
    form: 'contact-form',
    validate,
})(ContactForm)

const mapStateToProps = ({ contact }) => {
    return {
        ...contact
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
