import api from '../scripts/api'

// Index of Action Types
const SAMPLE_ACTION = 'SAMPLE_ACTION'

// Initial state
const initialState = {
    sampleState: 'setlife'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                sampleState: action.sampleState
            }
        default:
            return state
    }
}

// Actions
export function sampleAsyncAction(params) {
    return dispatch => {
        api.graph({
            query: `query {
                apiGraphRoute
            }`
        })
            .then(payload => {
                // Handle payload
                // Dispatch additional actions
            })
            .catch(err => {
                // Handle error
            })
    }
}

export function sampleAction(sampleState) {
    return {
        type: SAMPLE_ACTION,
        sampleState
    }
}
