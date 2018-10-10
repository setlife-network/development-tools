import { num } from '../scripts/helpers'

const unit = unit => value => (num(value) ? value + unit : value)

export const ms = unit('ms')
export const px = unit('px')
export const rem = unit('rem')