import styled from 'styled-components'
import {
    borderRadius
} from 'styled-system'
import Box from './Box'
import utils from '../styles/utils'

const Image = styled(Box)(
    {
        maxWidth: '100%'
    },
    borderRadius,
    utils.themed('Image')
)

Image.displayName='Image'

Image.defaultProps = {
    as: 'img',
    height: 'auto'
}

export default Image