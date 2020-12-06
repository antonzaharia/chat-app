export default function UserReducer( state = { userConversations: []}, action) {
    switch (action.type) {
        case "LOAD_CONVERSATIONS":
            return { ...state, userConversations: action.payload }
        case "CREATE_CONVERSATION":
            return {...state, userConversations: [...state.userConversations, action.payload]}
        case "RECEIVE_MESSAGE":
            const findConversation = state.userConversations.find( c => c.id === action.payload.message.conversation.id)
            findConversation.messages.push(action.payload.message)
            const filteredConversation = state.userConversations.filter( c => c.id !== action.payload.message.conversation.id)
            filteredConversation.push(findConversation)
            return {...state, userConversations: [...filteredConversation]}
        case "SEND_MESSAGE":
            // const newConversation = state.userConversations.find( c => c.id === action.payload.conversation.id)
            // newConversation.messages.push(action.payload)
            // const filteredConvs = state.userConversations.filter( c => c.id !== action.payload.conversation.id)
            // filteredConvs.push(newConversation)
            // return {...state, userConversations: [...filteredConvs]}
            console.log(action.payload)
            return state
        default:
            return state
    }
  }