import { css } from 'styled-components'
import theme from './theme'

const media = Object.keys(theme.breakpointMap).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${theme.breakpointMap[label]}px) {
            ${css(...args)};
        }
    `

    return acc
}, {})

export default media