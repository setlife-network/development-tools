import styled from 'styled-components'
import {
    width,
    height,
    space,
    color,
    flex,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    display,
    position,
    top,
    right,
    bottom,
    left,
    opacity
} from 'styled-system'
import utils from '../styles/utils'

const Box = styled('div')(
    color,
    space,
    width,
    height,
    flex,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    display,
    position,
    top,
    right,
    bottom,
    left,
    opacity,
    utils.css,
    utils.themed('Box')
)

Box.displayName = 'Box'

Box.propTypes /* remove-proptypes */ = {
    ...space.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...color.propTypes,
    ...flex.propTypes,
    ...minWidth.propTypes,
    ...maxWidth.propTypes,
    ...minHeight.propTypes,
    ...maxHeight.propTypes,
    ...display.propTypes,
    ...position.propTypes,
    ...top.propTypes,
    ...right.propTypes,
    ...bottom.propTypes,
    ...left.propTypes,
    ...opacity.propTypes
}

export default Box