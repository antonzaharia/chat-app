export function makeConversationLink(user, conversation) {
  return `/users/${user.id}/conversations/${conversation.id}`;
}
export function makeNotificationNumber(user) {
  const unSeen = user.notifications.filter((n) => n.seen);
  return unSeen.length;
}
