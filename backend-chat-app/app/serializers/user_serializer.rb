class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :conversations
  def conversations
    uniq_convs = object.conversations.uniq{ |c| c.id }
    conversations = uniq_convs.map{ |c| ConversationSerializer.new(c)}
  end
end
