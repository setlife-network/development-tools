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
    display1: 'h1',
    display2: 'h2',
    display3: 'h3',
    display4: 'h4',
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

Text.propTypes /* remove-proptypes */ = {
    ...textAlign.propTypes,
    ...fontWeight.propTypes,
    ...fontFamily.propTypes,
    ...fontSize.propTypes,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
    ...textStyle.propTypes
}

Text.defaultProps = {
    color: 'darkGrey',
    fontSize: 16,
    letterSpacing: '0.025rem',
    lineHeight: 1.6
}

export default Text