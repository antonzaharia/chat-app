class MessagesChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:conversation_id])
    stream_from conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
