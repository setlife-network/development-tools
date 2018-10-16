import { css } from 'styled-components'
import theme from './theme'

const media = Object.keys(theme.devices).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (${label === 'mobile' ? 'max' : 'min'}-width: ${theme.devices[label]}px) {
            ${css(...args)};
        }
    `

    return acc
}, {})

export default media