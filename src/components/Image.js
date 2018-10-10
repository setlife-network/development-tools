import styled from 'styled-components'
import {
    borderRadius
} from 'styled-system'
import Box from './Box'

const Image = styled(Box)(
    {
        maxWidth: '100%',
        height: 'auto'
    },
    borderRadius
)

Image.propTypes = {
    ...borderRadius.propTypes
}

Image.defaultProps = {
    as: 'img'
}

export default Image