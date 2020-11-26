class MessagesController < ApplicationController
    def index
        messages = Messages.all
        render json: messages
    end

    def create
        message = Message.new(message_params)
        message.user = current_user
        if message.save
            ActionCable.server.broadcast 'messages_channel', message
            head: ok
        else
            head: ok
        end
    end

    private
    def message_params
        params.require(:message).permit(:content, :conversation_id)
    end
end
