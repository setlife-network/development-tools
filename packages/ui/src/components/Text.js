import styled from 'styled-components'
import {
    style,
    lineHeight,
    letterSpacing,
    fontFamily,
    variant
} from 'styled-system'
import Box from './Box'

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

const align = style({
    prop: 'align',
    cssProperty: 'textAlign'
})

const weight = style({
    prop: 'weight',
    cssProperty: 'fontWeight'
})

const size = style({
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
    ${fontFamily};
    ${align};
    ${weight};
    ${size};
    ${lineHeight};
    ${letterSpacing};
    ${textStyle};
`

Text.propTypes = {
    ...align.propTypes,
    ...weight.propTypes,
    ...fontFamily.propTypes,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
    ...size.propTypes,
    ...weight.propTypes,
    ...align.propTypes,
    ...textStyle.propTypes
}

Text.defaultProps = {
    color: 'darkGrey',
    size: 16,
    lineHeight: 1.6,
    letterSpacing: '0.025rem',
    align: 'left'
}

export default Text