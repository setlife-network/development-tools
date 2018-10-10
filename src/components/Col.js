import styled from 'styled-components'
import PropTypes from 'prop-types'
import { theme, media } from 'styles'
import Box from './Box'

const { gridSize, breakpointMap } = theme
const sizes = Object.keys(breakpointMap)

const Col = styled(Box)`
    display: flex;
    flex-basis: auto;
    flex-direction: column;

    /**
     * Responsive grid sizing
     *
     * Usage <Col sm={12} md={6} lg={4} xl={12} />
     */

    ${p => Object.keys(p)
        .filter(k => sizes.indexOf(k) !== -1)
        .sort((a,b) => sizes.indexOf(a) - sizes.indexOf(b))
        .map(size => {
            return media[size]`
                ${Number.isInteger(p[size]) ? `
                    flex-basis: ${100 / gridSize * p[size]}%;
                    max-width: ${100 / gridSize * p[size]}%;
                ` : `
                    flex-grow: 1;
                    flex-basis: 0;
                    max-width: 100%;
                `}
            `
        })
    }
`

Col.propTypes = {
    sm: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    md: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    lg: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    xl: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
}

export default Col