export default function UserReducer (state = {user: null, requesting: false, errors: false}, action) {
    switch(action.type) {
        case "TEST":
            return {...state, user: action.payload}
    default:
        return state
    }
}