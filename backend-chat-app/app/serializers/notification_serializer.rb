class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :content, :notification

  def notification
    notification = NotificationSerializer.new(object.notification)
  end
end
