import React from 'react'
import { connect } from 'react-redux'
import Text from 'components/Text'

class Redux extends React.Component {
    static getInitialProps({ store, isServer }) {
        return {
            isServer
        }
    }
    render() {
        return <Text>{this.props.setlife}</Text>
    }
}

const mapStateToProps = state => {
    return {
        setlife: state.environment.sampleState
    }
}

export default connect(mapStateToProps)(Redux)