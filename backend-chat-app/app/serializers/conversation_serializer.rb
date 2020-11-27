class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :users
  has_many :messages
end
