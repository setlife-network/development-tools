import { num, is } from '../scripts/utils'

const unit = unit => value => (num(value) ? value + unit : value)

export const ms = unit('ms')
export const px = unit('px')
export const rem = unit('rem')
export const theme = name => props => {
    const result = props.theme[name]
    if (!is(result)) {
        throw new Error(`"${name}" not found in theme`)
    }
    return result
}