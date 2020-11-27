class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :conversations

  def conversations
    conversations = object.conversations.map{ |c| ConversationSerializer.new(c)}
  end
end
