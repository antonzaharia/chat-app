class MessagesController < ApplicationController
    include CurrentUserConcern

    def create
        conversation = Conversation.find_by(id: message_params[:conversation_id])
        message = Message.new(content: message_params[:content], user: @current_user, conversation: conversation)
        
        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(message)).serializable_hash
            MessagesChannel.broadcast_to conversation, serialized_data
            render json: message
        else 
            render json: {error: message.errors.full_messages}
        end
    end

    private
    def message_params
        params.require(:message).permit(:content, :conversation_id)
    end
end
