import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import { border } from 'polished'

const StyledInput = styled.input.attrs({
    type: 'text'
})`
    padding: 1rem;
    ${p => border('1px', 'solid', p.theme.colors.lightGrey)};
    border-radius: ${p => p.theme.borderRadius};
    background-color: ${p => p.theme.white};
    color: ${p => p.theme.darkGrey};
    font-size: 2rem;

    &::placeholder {
        color: ${p => p.theme.lightGrey}
    }

    ${is('disabled')`
        background-color: ${p => p.theme.border};
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