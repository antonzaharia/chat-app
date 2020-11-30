class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :conversation
  belongs_to :user
end
