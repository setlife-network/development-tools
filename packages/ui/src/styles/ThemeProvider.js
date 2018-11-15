import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './theme'

const ThemeProvider = ({
    theme,
    customBreakpoints,
    customColors,
    children
}) => {
    const breakpoints = customBreakpoints || defaultTheme.breakpoints
    const colors = customColors || defaultTheme.colors

    const newTheme = theme ? theme : {
        ...defaultTheme,
        breakpoints,
        colors,
    }

    return (
        <StyledThemeProvider theme={newTheme}>
            {children}
        </StyledThemeProvider>
    )
}

ThemeProvider.propTypes  /* remove-proptypes */ = {
    customBreakpoints: PropTypes.array,
    customColors: PropTypes.object,
    theme: PropTypes.object
}

export default ThemeProvider