import PropTypes from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is'
import {
    alignItems,
    justifyContent,
    alignContent,
    style
} from 'styled-system'
import Box from './Box'

const flexDirection = style({
    prop: 'direction',
    cssProperty: 'flexDirection'
})

const flexBasis = style({
    prop: 'basis',
    cssProperty: 'flexBasis'
})

const Flex = styled(Box)`
    ${flexDirection};
    ${flexBasis};
    ${alignItems};
    ${justifyContent};
    ${alignContent};
    
    ${is('wrap')`
        flex-wrap: wrap;
    `}

    ${is('row')`
        flex-direction: row;
    `}

    ${is('row', 'reverse')`
        flex-direction: row-reverse;
    `}

    ${is('column')`
        flex-direction: column;
    `}

    ${is('column', 'reverse')`
        flex-direction: column-reverse;
    `}

    /* Misc */
    ${is('center')`
        align-items: center;
        justify-content: center;
    `}

    ${is('order')`
        order: ${p => p.order};
    `}
`

Flex.propTypes = {
    ...alignItems.propTypes,
    ...alignContent.propTypes,
    ...justifyContent.propTypes,
    ...flexDirection.propTypes,
    ...flexBasis.propTypes,
    row: PropTypes.bool,
    column: PropTypes.bool,
    reverse: PropTypes.bool,
    center: PropTypes.bool,
    order: PropTypes.number,
}

Flex.defaultProps = {
    display: 'flex'
}

export default Flex