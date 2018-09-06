import styled, { css } from 'styled-components'
import is from 'styled-is'
import PropTypes from 'prop-types'
import { colors } from 'styles'

const propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    fontWeight: PropTypes.oneOf(Object.keys(fontWeights)),
    size: PropTypes.number,
    textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify']),
    margin: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    marginX: PropTypes.string,
    marginY: PropTypes.string,
    padding: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingX: PropTypes.string,
    paddingY: PropTypes.string
}

const fontWeights = {
    regular: 400,
    italic: 400,
    bold: 700
}

const Base = styled.p`
    font-family: 'Inter UI';
    line-height: 1.6;
`

const Text = styled(Base)`
    font-weight: ${p => fontWeights[p.weight]};
    font-size: ${p => p.size || 14}px;
    color: ${p => colors[p.color] || colors.darkGrey};

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

export const H1 = styled(Text).attrs({
    as: 'h1',
    weight: 'bold'
})

export const H2 = styled(Text).attrs({
    as: 'h2',
    weight: 'bold'
})

Text.propTypes = propTypes

export default Text