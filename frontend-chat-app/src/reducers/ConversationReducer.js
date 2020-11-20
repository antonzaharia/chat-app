export default function ConversationReducer(
    state={conversations: []},
    action
) {
    switch(action.type){
        case "LOAD":
            return {...state, conversations: action.payload}
        default:
            return state
    }
}