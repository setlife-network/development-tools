import PropTypes from 'prop-types'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import { themeGet } from 'styled-system'
import { border, tint } from 'polished'
import { mixins } from '../styles'
import Card from './Card'

const Button = styled(Card)`
    font-size: 1.5rem;
    height: 4rem;
    padding: 0 1.5rem;
    cursor: pointer;
    
    ${is('transparent')`
        ${mixins.link};
        background-color: transparent;
        ${p => border('1px', 'solid', p.theme.colors[p.color])};
    `}

    ${is('fullWidth')`
        width: 100%;
    `}

    ${isNot('transparent', 'disabled')`
        ${mixins.clickableBg};
        box-shadow: ${themeGet('shadows.1')};
    `}

    ${is('disabled')`
        background-color: ${p => tint(0.5, p.theme.colors[p.bg])};
        color: ${themeGet('colors.white')};
        cursor: default;
    `}
`

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
    fullWidth: PropTypes.bool
}

Button.defaultProps = {
    as: 'button',
    bg: 'blue',
    color: 'white',
    borderRadius: 3,
    fullWidth: false
}

export default Button