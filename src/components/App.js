import React, { Component, Fragment } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link, Switch, Route } from 'react-router-dom'
import { theme, Flex } from 'styles'
import Text from './Text'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const StyledLink = styled(Link)`
    font-size: 2rem;
    padding: 1rem;
`

const Home = () => (
    <div>
        <Text variant='h1'>Home</Text>
        <Text>This is the home page</Text>
        <Query
            query={gql`
                {
                    rates(currency: "USD") {
                        currency
                        rate
                    }
                }
            `}
        >
            {({ loading, error, data }) => {
                if (loading) return <Text>Loading...</Text>
                if (error) return <Text>Error loading</Text>

                return data.rates.map(({ currency, rate}) => (
                    <div key={currency}>
                        <Text>{`${currency}: ${rate}`}</Text>
                    </div>
                ))
            }}
        </Query>
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
    // componentDidMount() {
    //     fetch('https://w5xlvm3vzz.lp.gql.zone/graphql', {
    //         method: 'POST',
    //         xhrFields: {
    //             withCredentials: true
    //         },
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include',
    //         body: JSON.stringify({
    //             query: `
    //                 query {
    //                     rates(currency: "USD") {
    //                         currency
    //                         rate
    //                     } 
    //                 }
    //             `
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    // }
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