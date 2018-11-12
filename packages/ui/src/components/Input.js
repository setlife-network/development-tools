import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet, space } from 'styled-system'
import is from 'styled-is'
import { border } from 'polished'
import Text from './Text'

const StyledInput = styled.input.attrs({
    type: 'text'
})`
    padding: 1rem;
    margin-bottom: 1rem;
    ${p => border('1px', 'solid', p.theme.colors.lightGrey)};
    border-radius: ${themeGet('borderRadius')};
    background-color: ${themeGet('colors.white')};
    color: ${themeGet('colors.charcoal')};
    font-size: 2rem;

    &::placeholder {
        color: ${themeGet('colors.lightGrey')}
    }

    ${is('disabled')`
        background-color: ${themeGet('colors.border')};
    `}
`

const Input = ({
    field,
    form: { touched, errors },
    ...props
}) => {
    return (
        <>
            <StyledInput
                {...field}
                {...props}
            />
            {touched[field.name] && errors[field.name] && (
                <Text
                    color='red'
                    fontSize={10}
                    mb='2rem'
                >
                    {errors[field.name]}
                </Text>
            )}
        </>
    )
}

Input.propTypes = {
    ...space.propTypes,
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
}

export default Input