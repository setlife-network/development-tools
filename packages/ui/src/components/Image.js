import styled from 'styled-components'
import {
    borderRadius
} from 'styled-system'
import Box from './Box'

const Image = styled(Box)(
    {
        maxWidth: '100%'
    },
    borderRadius
)

Image.displayName='Image'

Image.propTypes = {
    ...borderRadius.propTypes
}

Image.defaultProps = {
    as: 'img',
    height: 'auto'
}

export default Image