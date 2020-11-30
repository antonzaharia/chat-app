class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :messages, :users
  
  def messages
    messages = object.messages.uniq{ |c| c.id }
  end

  def users
    users = object.users.uniq{ |c| c.id }
  end
end
