import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import NavigationBar from './NavigationBar'

import is from 'styled-is'
import { Grid, Col, Flex, theme } from 'styles'
import Text from 'components/Text'

const Tile = styled.div`
    height: 120px;
    width: 100%;
    ${is('color')`
        background-color: ${p => p.theme.colors[p.color]};
    `}
`

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <Text color='blue' marginY='2rem' size={24}>Welcome to Setlife</Text>
                    <Text variant='display1' color='red'>Welcome to Setlife</Text>
                    <Text variant='display2' color='red'>Welcome to Setlife</Text>
                    <Text variant='display3' color='red'>Welcome to Setlife</Text>
                    <Text variant='display4' color='red'>Welcome to Setlife</Text>
                    <Text variant='h1' color='red'>Welcome to Setlife</Text>
                    <Text variant='h2'>Welcome to Setlife</Text>
                    <Text variant='h3'>Welcome to Setlife</Text>
                    <Text variant='h4'>Welcome to Setlife</Text>
                    <Text variant='h5'>Welcome to Setlife</Text>
                    <Text variant='h6'>Welcome to Setlife</Text>
                    <Grid fluid>
                        <Flex row wrap>
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Tile color='red' />
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Tile color='yellow' />
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Tile color='green' />
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Tile color='blue' />
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Tile color='purple' />
                            </Col>
                            <Col sm={12} md={6} lg={4} xl={3}>
                                <Tile color='grey' />
                            </Col>
                        </Flex>
                    </Grid>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}