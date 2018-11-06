import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import Button from './Button'
import Flex from './Flex'
import Input from './Input'
import Toggle from './Toggle'
import Modal from './Modal'

const contactSchema = yup.object().shape({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required')
})

export default class ContactForm extends React.Component {
    onSubmit = (values, formik) => {
        console.log(values)
        formik.resetForm()
    }
    render() {
        return (
            <Formik
                onSubmit={this.onSubmit}
                validationSchema={contactSchema}
            >
                {({ isValid }) => (
                    <Form>
                        <Flex direction='column'>
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
                            <Toggle>
                                {({ toggled, onToggle }) => (
                                    <>
                                        <Button
                                            type='submit'
                                            onClick={onToggle}
                                            disabled={!isValid}
                                        >
                                            Submit
                                        </Button>
                                        <Modal
                                            opened={toggled}
                                            onClose={onToggle}
                                        >
                                            <Flex p='2rem' column alignItems='center'>
                                                <Text textAlign='center'>Contact form submitted</Text>
                                                <Button minWidth='50%' onClick={onToggle}>Close</Button>
                                            </Flex>
                                        </Modal>
                                    </>
                                )}
                            </Toggle>
                        </Flex>
                    </Form>
                )}
            </Formik>
        )
    }
}