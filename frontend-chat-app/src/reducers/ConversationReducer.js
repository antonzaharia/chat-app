export default function UserReducer( state = { userConversations: []}, action) {
    switch (action.type) {
        case "LOAD_CONVERSATIONS":
            return { ...state, userConversations: action.payload }
        default:
            return state
    }
  }