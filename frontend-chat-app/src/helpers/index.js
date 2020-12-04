export function makeConversationLink (user, conversation) {
    return `/users/${user.id}/conversations/${conversation.id}`
}