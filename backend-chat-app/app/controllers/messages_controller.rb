class MessagesController < ApplicationController
    include CurrentUserConcern
    def index
        messages = Messages.all
        render json: messages
    end

    def create
        conversation = Conversation.find(message_params[:conversation_id])
        message = conversation.messages.create(content: message_params[:content], user: @current_user)
        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(message)).serializable_hash
              MessagesChannel.broadcast_to conversation, serialized_data
            render json: serialized_data
        else 
            render json: {error: message.errors.full_messages}
        end
    end

    private
    def message_params
        params.require(:message).permit(:content, :conversation_id)
    end
end
