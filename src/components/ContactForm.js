import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import Button from './Button'
import Input from './Input'

const contactSchema = yup.object().shape({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required')
})

export default class ContactForm extends React.Component {
    onSubmit = values => {
        console.log(values)
    }
    render() {
        return (
            <Formik
                onSubmit={this.onSubmit}
                validationSchema={contactSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name='name'
                            placeholder='Name'
                            component={Input}
                        />
                        <Field
                            name='email'
                            placeholder='Email'
                            component={Input}
                        />
                        <Field
                            name='message'
                            placeholder='Message'
                            component={Input}
                            as='textarea'
                        />
                        <Button type='submit'>Submit</Button>
                    </Form>
                )}
            </Formik>
        )
    }
}