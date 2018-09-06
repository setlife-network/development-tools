import React, { Component } from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'

import is from 'styled-is'
import { Grid, Col, Flex, colors } from 'styles'

const Text = styled.p`
    color: ${colors.blue};
    font-size: 4rem;
`

const Tile = styled.div`
    height: 120px;
    width: 100%;
    ${is('color')`
        background-color: ${p => colors[p.color]};
    `}
`

export default class App extends Component {
    render() {
        return (
            <div className='App'>
                {/* <NavigationBar/> */}
                <Text>Welcome to Setlife</Text>
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
            </div>
        )
    }
}