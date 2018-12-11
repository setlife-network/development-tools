import { css } from 'styled-components'
import shade from 'polished/lib/color/shade'
// import { shade } from 'polished'

export default {
    link: css`
        transition: color 200ms ease-in-out;
        &:hover {
            color: ${p => shade(0.1, p.theme.colors[p.color])};
        }
        &:active {
            color: ${p => shade(0.2, p.theme.colors[p.color])};
        }
    `,
    clickableBg: css`
        transition: background 200ms ease-in-out;

        &:hover {
            background-color: ${p => shade(0.05, p.theme.colors[p.bg])};
        }
        &:active {
            background-color: ${p => shade(0.1, p.theme.colors[p.bg])};
        }
    `
}