import PropTypes from 'prop-types'
import styled from 'styled-components'
import is, { isNot } from 'styled-is'
import { themeGet } from 'styled-system'
import { border } from 'polished'
import { mixins } from 'styles'
import Card from './Card'

const Button = styled(Card)`
    font-family: 'Inter UI';
    font-size: 1.5rem;
    height: 5rem;
    padding: 0 1.5rem;
    
    ${is('transparent')`
        ${mixins.clickableBg};
        background-color: transparent;
        ${p => border('1px', 'solid', p.theme.colors[p.color])};
    `}

    ${isNot('transparent', 'disabled')`
        ${mixins.clickableBg};
        box-shadow: ${themeGet('shadows.1')};
    `}

    ${is('disabled')`
        background-color: ${themeGet('colors.lightGrey')};
        color: ${themeGet('colors.charcoal')};
    `}
`

Button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    transparent: PropTypes.bool
}

Button.defaultProps = {
    as: 'button',
    bg: 'blue',
    color: 'white',
    borderRadius: 3
}

export default Button