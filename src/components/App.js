import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link, Switch, Route } from 'react-router-dom'

import { theme, Flex } from 'styles'
import Text from './Text'

const StyledLink = styled(Link)`
    font-size: 2rem;
    padding: 1rem;
`

const Home = () => (
    <div>
        <Text variant='h1'>Home</Text>
        <Text>This is the home page</Text>
    </div>
)

const About = () => (
    <div>
        <Text variant='h1'>About</Text>
        <Text>This is the about page</Text>
    </div>
)

const Contact = () => (
    <div>
        <Text variant='h1'>Contact</Text>
        <Text>This is the contact page</Text>
    </div>
)

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <Text variant='display1'>Welcome to Setlife</Text>
                    <Flex row>
                        <StyledLink to='/'>Home</StyledLink>
                        <StyledLink to='/about'>About</StyledLink>
                        <StyledLink to='/contact'>Contact</StyledLink>
                    </Flex>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' exact component={About} />
                        <Route path='/contact' exact component={Contact} />
                    </Switch>
                </Fragment>
            </ThemeProvider>
        )
    }
}