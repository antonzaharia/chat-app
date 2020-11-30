class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :conversation
  def user
    user = object.user
  end

  def conversation
    conversation = object.conversation
  end
end
