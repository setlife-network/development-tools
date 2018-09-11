import { css } from 'styled-components'
import is from 'styled-is'

export default css`
    ${is('margin')`
        margin: ${p => p.margin};
    `}

    ${is('marginX')`
        margin-left: ${p => p.marginX};
        margin-right: ${p => p.marginX};
    `}

    ${is('marginY')`
        margin-top: ${p => p.marginY};
        margin-bottom: ${p => p.marginY};
    `}

    ${is('marginTop')`
        margin-top: ${p => p.marginTop};
    `}

    ${is('marginBottom')`
        margin-bottom: ${p => p.marginBottom};
    `}

    ${is('marginLeft')`
        margin-left: ${p => p.marginLeft};
    `}

    ${is('marginRight')`
        margin-right: ${p => p.marginRight};
    `}

    ${is('padding')`
        padding: ${p => p.padding};
    `}

    ${is('paddingX')`
        padding-left: ${p => p.paddingX};
        padding-right: ${p => p.paddingX};
    `}

    ${is('paddingY')`
        padding-top: ${p => p.paddingY};
        padding-bottom: ${p => p.paddingY};
    `}

    ${is('paddingTop')`
        padding-top: ${p => p.paddingTop};
    `}

    ${is('paddingottom')`
        padding-bottom: ${p => p.paddingBottom};
    `}

    ${is('paddingLeft')`
        padding-left: ${p => p.paddingLeft};
    `}

    ${is('paddingRight')`
        padding-right: ${p => p.paddingRight};
    `}
`