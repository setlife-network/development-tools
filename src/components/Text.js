import React from 'react'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import PropTypes from 'prop-types'
import { media, theme, spacing } from 'styles'

const propTypes = {
    variant: PropTypes.oneOf(Object.keys(theme.fonts)),
    color: PropTypes.oneOf(Object.keys(theme.colors)),
    weight: PropTypes.oneOf(Object.keys(theme.fontWeights)),
    size: PropTypes.oneOfType(['number', 'string']),
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    margin: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    marginX: PropTypes.string,
    marginY: PropTypes.string,
    padding: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingX: PropTypes.string,
    paddingY: PropTypes.string
}

const Base = styled.p`
    font-family: 'Inter UI';
    line-height: 1.6;
    color: ${p => theme.colors[p.color] || theme.colors.darkGrey};
    ${spacing};

    /** Font size for non-variant elements */
    ${isNot('as')`
        font-size: ${p => p.size / theme.baseRem.mobile}rem;
        font-weight: ${p => theme.fontWeights[p.weight]};
        ${media.md`
            font-size: ${p => p.size / theme.baseRem.desktop}rem;
        `}
    `}

    /** Variant styling */
    ${is('as')`
        font-size: ${p => theme.fonts[p.variant].size};
        font-weight: ${p => theme.fonts[p.variant].weight};
    `}
`

const Text = ({ variant, ...props }) => (
    <Base
        as={variant && theme.fonts[variant].tag}
        variant={variant}
        {...props}
    />
)

Text.propTypes = propTypes

export default Text