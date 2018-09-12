import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import is from 'styled-is'
import { Grid, Col, Flex, theme } from 'styles'

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