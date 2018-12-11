import styled from 'styled-components'
import {
    alignItems,
    alignSelf,
    justifyContent,
    alignContent,
    style
} from 'styled-system'
import Box from './Box'
import utils from '../styles/utils'

const flexDirection = style({
    prop: 'direction',
    cssProperty: 'flexDirection'
})

const flexBasis = style({
    prop: 'basis',
    cssProperty: 'flexBasis'
})

const Flex = styled(Box)`
    display: flex;
    ${flexDirection}
    ${flexBasis}
    ${alignItems}
    ${alignSelf}
    ${justifyContent}
    ${alignContent}
    ${utils.themed('Flex')}
    
    ${utils.is('wrap')`
        flex-wrap: wrap;
    `}

    /* Misc */
    ${utils.is('center')`
        align-items: center;
        justify-content: center;
    `}

    ${utils.is('order')`
        order: ${p => p.order};
    `}
`

Flex.displayName = 'Flex'

export default Flex