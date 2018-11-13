import styled from 'styled-components'
import {
    style,
    lineHeight,
    letterSpacing,
    fontFamily,
    variant
} from 'styled-system'
import Box from './Box'
import { utils } from '../styles'

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

const textAlign = style({
    prop: 'align',
    cssProperty: 'textAlign'
})

const fontWeight = style({
    prop: 'weight',
    cssProperty: 'fontWeight'
})

const fontSize = style({
    prop: 'size',
    cssProperty: 'fontSize',
    transformValue: n => n + 'px'
})

const textStyle = variant({
    key: 'fontVariants'
})

const Text = styled(Box).attrs({
    as: p => p.variant ? tags[p.variant] : 'p',
})`
    ${utils.themed('Text')};
    ${fontFamily};
    ${textAlign};
    ${fontWeight};
    ${fontSize};
    ${lineHeight};
    ${letterSpacing};
    ${textStyle};
`

Text.displayName = 'Text'

Text.propTypes = {
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
    size: 16
}

export default Text