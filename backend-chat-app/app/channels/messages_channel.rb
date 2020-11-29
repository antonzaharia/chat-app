class MessagesChannel < ApplicationCable::Channel
  def subscribed
    conversation = Conversation.find(params[:id])
    stream_from conversation
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
