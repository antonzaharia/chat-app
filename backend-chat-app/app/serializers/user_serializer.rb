class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :notifications

  def notifications
    notifications = object.notifications
  end
end
