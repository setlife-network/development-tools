import api from '../scripts/api';

// Reducer
const initialState = {
    contactFormSubmitted: false 
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_CONTACT_FORM_SUBMITTED':
        return {
            ...state,
            contactFormSubmitted: action.submitted,
        };
    default:
        return state;
    }
}

// Actions
export function submitContactForm(params) {
    return (dispatch) => {
        api.graph({
            query: `mutation {
                submitContactForm(
                    name: ${params.name},
                    email: ${params.email},
                    message: ${params.message}
                )
            }`
        })
        .then(payload => {
            // Handle payload
            // Dispatch additional actions
            console.log(payload)
            
        })
        .catch(err => {
            // Handle error
        });
    }
}

export function changeContactFormSubmitted(submitted) {
    return {
        type: ACTCHANGE_CONTACT_FORM_SUBMITTEDION_NAME,
        submitted
    };
}

// Index of Action Types
const CHANGE_CONTACT_FORM_SUBMITTED = 'CHANGE_CONTACT_FORM_SUBMITTED';