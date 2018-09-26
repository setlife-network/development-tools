import React from 'react'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import PropTypes from 'prop-types'
import { media, propTypes, mixins, utils } from 'styles'
import { fonts, colors } from 'styles/theme'
import { num } from 'scripts/helpers'

const Base = styled.p`
    font-family: 'Inter UI';
    line-height: 1.6;
    color: ${p => p.theme.colors[p.color] || colors.darkGrey};
    ${mixins.spacing};

    /** Font size for non-variant elements */
    ${isNot('variant')`
        font-size: ${p => num(p.size) ? utils.rem(p.size / p.theme.baseRemMobile) : p.size};
        font-weight: ${p => p.theme.fontWeights[p.weight]};
        ${media.md`
            font-size: ${p => num(p.size) ? utils.rem(p.size / p.theme.baseRemDesktop) : p.size};
        `}
    `}

    /** Variant styling */
    ${is('variant')`
        font-size: ${p => p.theme.fonts[p.variant].size};
        font-weight: ${p => p.theme.fonts[p.variant].weight};
    `}
`

const Text = ({
    variant,
    size = 16,
    ...props
}) => (
    <Base
        as={variant && fonts[variant].tag}
        variant={variant}
        size={size}
        {...props}
    />
)

Text.propTypes = {
    variant: PropTypes.oneOf(Object.keys(fonts)),
    color: PropTypes.oneOf(Object.keys(colors)),
    weight: PropTypes.oneOf(['regular', 'bold']),
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    ...propTypes.spacing
}

export default Text