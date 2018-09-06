import styled from 'styled-components'
import { isNot } from 'styled-is'
import PropTypes from 'prop-types'
import media from './media'
import {
    outerMargin,
    gutterWidth,
    gridWidth,
    sizes
} from './config'

const Grid = styled.div`
    margin-left: auto;
    margin-right: auto;
    
    ${media.md`
        padding: ${outerMargin / 2}rem;
        > * > * {
            padding: ${gutterWidth / 2}rem;
        }
    `}

    ${isNot('fluid')`
        ${Object.keys(sizes).map(size => {
            return gridWidth && media[size]`
                width: ${gridWidth[size]}%;
            `
        })}
    `}
`

Grid.propTypes = {
    // set true to make grid width 100%
    fluid: PropTypes.bool
}

export default Grid