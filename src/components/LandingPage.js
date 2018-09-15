import React from 'react'

import Button from './Button'
import Text from './Text'
import ContactForm from './ContactForm'

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Text>This is the LandingPage component</Text>
                <ContactForm />
            </div>
        )
    }
}
