export default function UserReducer( state = { userConversations: []}, action) {
    switch (action.type) {
        case "LOAD_CONVERSATIONS":
            return { ...state, userConversations: action.payload }
        case "CREATE_CONVERSATION":
            console.log(action.payload)
            return {...state, userConversations: [...state.userConversations, action.payload]}
        case "SEND_MESSAGE":
            const newConversation = state.userConversations.find( c => c.id === action.payload.conversation.id)
            newConversation.messages.push(action.payload)
            const filteredConvs = state.userConversations.filter( c => c.id !== action.payload.conversation.id)
            filteredConvs.push(newConversation)
            return {...state, userConversations: [...filteredConvs]}
        default:
            return state
    }
  }