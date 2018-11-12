import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withApollo from 'scripts/withApollo'
import Text from 'components/Text'

const query = gql`
    {
        price(currency: "usd") {
            amount
            currency
        }
    }
`

export default withApollo(() => (
    <Query query={query}>
        {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>{`Error! ${error.message}`}</Text>
            console.log(data)
            return (
                <>
                    <Text as='h1'>Sample Apollo Query from REST Data Source</Text>
                    {/* <Text>{data.price.toString()}</Text> */}
                </>
            )
        }}
    </Query>
))
