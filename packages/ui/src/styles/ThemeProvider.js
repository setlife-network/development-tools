import React from 'react'
import PropTypes from 'prop-types'
import {
    ThemeProvider as StyledThemeProvider
} from 'styled-components'
import defaultTheme from './theme'

const ThemeProvider = ({
    theme,
    customBreakpoints,
    customColors,
    children
}) => {
    const breakpoints = customBreakpoints || defaultTheme.breakpoints
    const colors = customColors || defaultTheme.colors
    const newTheme = {
        ...defaultTheme,
        breakpoints,
        colors: {
            ...colors
        },
        ...theme
    }

    return (
        <StyledThemeProvider theme={newTheme}>
            {children}
        </StyledThemeProvider>
    )
}

ThemeProvider.propTypes = {
    customBreakpoints: PropTypes.array,
    customColors: PropTypes.object,
    theme: PropTypes.shape({
        breakpoints: PropTypes.array,
        shadows: PropTypes.object,
        colors: PropTypes.object,
        fonts: PropTypes.object,
        space: PropTypes.array
    })
}

export default ThemeProvider