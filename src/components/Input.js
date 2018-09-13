import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { border } from 'polished'
import { theme } from 'styles/utils'

const StyledInput = styled.input.attrs({
    type: 'text',
    placeholder: 'placeholder'
})`
    padding: 1rem 2rem;
    ${p => border('1px', 'solid', p.theme.colors.lightGrey)};
    border-radius: ${theme('borderRadius')};
    background-color: ${theme('white')};

    &::placeholder {
        color: ${theme('lightGrey')}
    }

    ${is('disabled')`
        background-color: ${theme('border')};
    `}
`

const Input = ({
    // field, // { name, value, onChange, onBlur }
    // form: { touched, errors },
    ...props
}) => (
    <div>
        <StyledInput
            // {...field}
            {...props}
        />
    </div>
)

Input.propTypes = {
    // field: PropTypes.object.isRequired,
    // form: PropTypes.object.isRequired
}

export default Input