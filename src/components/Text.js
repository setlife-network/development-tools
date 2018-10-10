import styled from 'styled-components'
import {
    space,
    color,
    textAlign,
    lineHeight,
    letterSpacing,
    fontWeight,
    fontFamily,
    fontSize,
    variant
} from 'styled-system'

const variants = variant({
    key: 'fonts'
})

const Text = styled.p.attrs({
    as: p => p.theme.tags[p.variant]
})`
    ${fontFamily};
    ${fontSize};
    ${fontWeight};
    ${textAlign};
    ${lineHeight};
    ${letterSpacing};
    ${color};
    ${space};
    ${variants};
`

Text.propTypes = {
    ...color.propTypes,
    ...space.propTypes,
    ...fontFamily.propTypes,
    ...fontSize.propTypes,
    ...fontWeight.propTypes,
    ...textAlign.propTypes,
    ...lineHeight.propTypes,
    ...letterSpacing.propTypes,
}

Text.defaultProps = {
    color: 'charcoal',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.06rem'
}

export default Text