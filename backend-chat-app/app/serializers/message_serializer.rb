class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :user, :conversation, :conversation_id, :user_id
  def user
    user = object.user
  end

  def conversation
    conversation = object.conversation
  end
end
