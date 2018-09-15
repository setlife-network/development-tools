import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is'
import { border } from 'polished'

import Text from './Text'
import { mixins, propTypes } from 'styles'

const StyledInput = styled.input.attrs({
    type: 'text'
})`
    ${mixins.spacing};
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

const Error = styled(Text)`
    opacity: ${p => p.showError ? 1 : 0};
`

const Input = ({
    field,
    form: { touched, errors },
    ...props
}) => {
    // const showError = errors[field.name] && errors[field.name]
    return (
        <div>
            <StyledInput
                {...field}
                {...props}
            />
            {touched[field.name] && errors[field.name] && (
                <Text
                    color='red'
                    size={10}
                    marginVertical='1rem'
                >
                    {errors[field.name]}
                </Text>
            )}
        </div>
    )
}

Input.propTypes = {
    ...propTypes.spacing,
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
}

export default Input