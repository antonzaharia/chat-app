export function makeConversationLink(user, conversation) {
  return `/users/${user.id}/conversations/${conversation.id}`;
}
export function makeNotificationLink(user, conversation_id) {
  return `/users/${user.id}/conversations/${conversation_id}`;
}
export function makeNotificationNumber(user) {
  console.log(user.notifications);
  const unSeen = user.notifications.filter((n) => !n.seen);
  return unSeen.length;
}
