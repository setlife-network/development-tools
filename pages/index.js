import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import withApollo from 'scripts/withApollo'
import Text from 'components/Text'

const query = gql`
    {
        rates(currency: "usd") {
            name
        }
    }
`

export default withApollo(() => (
    <Query query={query}>
        {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>
            if (error) return <Text>{`Error! ${error.message}`}</Text>

            return data.rates.map(rate => <Text>{rate.name}</Text>)
        }}
    </Query>
))
