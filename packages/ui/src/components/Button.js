import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { border, tint } from 'polished'
import utils from '../styles/utils'
import mixins from '../styles/mixins'
import Card from './Card'

const Button = styled(Card)`
    cursor: pointer;
    outline: 0;
    font-size: 1.5rem;
    ${utils.themed('Button')};
    
    ${utils.is('transparent')`
        ${mixins.link};
        background-color: transparent;
        ${p => border('1px', 'solid', p.theme.colors[p.color])};
    `}

    ${utils.is('fullWidth')`
        width: 100%;
    `}

    ${utils.isNot('transparent', 'disabled')`
        ${mixins.clickableBg};
        box-shadow: ${themeGet('shadows.1')};
    `}

    ${utils.is('disabled')`
        background-color: ${p => tint(0.5, p.theme.colors[p.bg])};
        color: white;
        cursor: default;
    `}
`

Button.displanName = 'Button'

Button.propTypes /* remove-proptypes */ = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool,
    fullWidth: PropTypes.bool
}

Button.defaultProps = {
    as: 'button',
    bg: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: 3,
    fullWidth: false,
    p: '0 1.5rem',
    height: '4rem',
}

export default Button