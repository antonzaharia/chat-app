class MessagesController < ApplicationController

    def create
        conversation = Conversation.find_by(id: message_params[:conversation_id])
        user = User.find(message_params[:user_id])
        message = conversation.messages.build(content: message_params[:content], user: user)
        
        if message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(message)).serializable_hash
            MessagesChannel.broadcast_to conversation, serialized_data
            render json: message, status: :created
        else 
            render json: {error: message.errors.full_messages}
        end
    end

    private
    def message_params
        params.require(:message).permit(:content, :conversation_id, :user_id)
    end
end
