import styled from 'styled-components'
import {
    textAlign,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    fontFamily,
    variant
} from 'styled-system'
import Box from './Box'
import utils from '../styles/utils'

const tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

const textStyle = variant({
    key: 'fontVariants'
})

const Text = styled(Box).attrs({
    as: p => p.variant ? tags[p.variant] : 'p',
})`
    ${fontFamily}
    ${textAlign}
    ${fontWeight}
    ${fontSize}
    ${lineHeight}
    ${letterSpacing}
    ${textStyle}
    ${utils.themed('Text')}
`

Text.displayName = 'Text'

Text.defaultProps = {
    color: 'darkGrey',
    fontSize: 16,
    letterSpacing: '0.025rem',
    lineHeight: 1.6
}

export default Text