import PropTypes from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is'

import media from './media'
import { spacing, size } from './mixins'
import { spacing as spacingTypes, size as sizeTypes } from './propTypes'

const Box = styled.div`
    ${spacing};
    ${size};

    ${is('responsiveWidth')`
        margin-left: auto;
        margin-right: auto;
        ${p => Object.keys(p.theme.gridWidth).map(size => {
            return media[size]`
                width: ${p.theme.gridWidth[size]}%;
            `
        })}
    `}
`

Box.propTypes = {
    ...spacingTypes,
    ...sizeTypes,
    responsiveWidth: PropTypes.bool
}

export default Box