import styled from 'styled-components'
import media from './media'

const Page = styled.div`
    margin-left: auto;
    margin-right: auto;
    ${p => Object.keys(p.theme.gridWidth).map(size => {
        return media[size]`
            width: ${p.theme.gridWidth[size]}%;
        `
    })}
`

export default Page