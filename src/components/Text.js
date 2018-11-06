import styled from 'styled-components'
import {
    style,
    space,
    color,
    lineHeight,
    letterSpacing,
    fontFamily,
    variant
} from 'styled-system'

const variants = variant({
    key: 'fonts'
})

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
    cssProperty: 'fontSize'
})

const Text = styled.p.attrs({
    as: p => p.theme.tags[p.variant]
})`
    ${align};
    ${weight};
    ${fontFamily};
    ${size};
    ${lineHeight};
    ${letterSpacing};
    ${color};
    ${space};
    ${variants};
`

Text.propTypes = {
    ...align.propTypes,
    ...weight.propTypes,
    ...color.propTypes,
    ...space.propTypes,
    ...fontFamily.propTypes,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
    ...size.propTypes,
    ...weight.propTypes,
    ...align.propTypes
}

Text.defaultProps = {
    color: 'charcoal',
    fontSize: 16,
    weight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.025rem'
}

export default Text