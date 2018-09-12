import { css } from 'styled-components'
import is from 'styled-is'
import Color from 'color'

export const border = color => css`
    border: ${p => `solid ${p.theme.borderWidth} ${p.theme.colors[color]}`};
`

export const clickable = css`
    transition-duration: ${p => p.theme.durationShort};
    transition-property: background-color;
    transition-timing-function: ease-in-out;
    &:hover {
        background-color: ${
            p => Color(p.theme.colors[p.backgroundColor]).darken(0.1).toString()
        };
    }
    &:active {
        background-color: ${
            p => Color(p.theme.colors[p.backgroundColor]).darken(0.2).toString()
        };
    }
`

export const colors = css`
    color: ${p => p.theme.colors[p.color]};
    background-color: ${p => p.theme.colors[p.backgroundColor]};
`

export const link = css`
    transition-duration: ${p => p.theme.durationShort};
    transition-property: color;
    transition-timing-function: ease-in-out;
    &:hover {
        color: ${
            p => Color(p.theme.colors[p.color]).darken(0.1).toString()
        };
    }
    &:active {
        color: ${
            p => Color(p.theme.colors[p.color]).darken(0.2).toString()
        };
    }
`

export const spacing = css`
    ${is('m')`
        margin: ${p => p.m};
    `}

    ${is('mX')`
        margin-left: ${p => p.mX};
        margin-right: ${p => p.mX};
    `}

    ${is('mY')`
        margin-top: ${p => p.mY};
        margin-bottom: ${p => p.mY};
    `}

    ${is('mT')`
        margin-top: ${p => p.mT};
    `}

    ${is('mB')`
        margin-bottom: ${p => p.mB};
    `}

    ${is('mL')`
        margin-left: ${p => p.mL};
    `}

    ${is('mR')`
        margin-right: ${p => p.mR};
    `}

    ${is('p')`
        padding: ${p => p.p};
    `}

    ${is('pX')`
        padding-left: ${p => p.pX};
        padding-right: ${p => p.pX};
    `}

    ${is('pY')`
        padding-top: ${p => p.pY};
        padding-bottom: ${p => p.pY};
    `}

    ${is('pT')`
        padding-top: ${p => p.pT};
    `}

    ${is('pB')`
        padding-bottom: ${p => p.pB};
    `}

    ${is('pL')`
        padding-left: ${p => p.pL};
    `}

    ${is('pR')`
        padding-right: ${p => p.pR};
    `}
`