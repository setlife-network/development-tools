import { css } from 'styled-components'
import is from 'styled-is'
import { themeGet } from 'styled-system'
import { shade, transitions } from 'polished'

export default {
    link: css`
        ${transitions(
            'color',
            '200ms ease-in-out'
        )}
        &:hover {
            color: ${p => shade(0.05, p.theme.colors[p.color])};
        }
        &:active {
            color: ${p => shade(0.1, p.theme.colors[p.color])};
        }
    `,
    clickableBg: css`
        ${transitions(
            'background-color',
            '200ms ease-in-out'
        )}

        &:hover {
            background-color: ${p => shade(0.05, p.theme.colors[p.bg])};
        }
        &:active {
            background-color: ${p => shade(0.1, p.theme.colors[p.bg])};
        }

        ${is('transparent')`
            &:hover {
                background-color: ${p => shade(0.05, p.theme.colors[p.color])};
                color: ${themeGet('colors.white')};
            }
            &:active {
                background-color: ${p => shade(0.1, p.theme.colors[p.color])};
                color: ${themeGet('colors.white')};
            }
        `}
    `
}