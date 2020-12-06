class MessagesChannel < ApplicationCable::Channel
  def subscribed
    @conversation = Conversation.find_by(id: params[:conversation_id])
    stream_for @conversation
  end

  def received(data)
    serialized_data = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(data)).serializable_hash
    MessagesChannel.broadcast_to @conversation, serialized_data
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end


end
