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
    display
} from 'styled-system'

const css = props => props.css

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
    css
)

Box.propTypes = {
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
}

export default Box