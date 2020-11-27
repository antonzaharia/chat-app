class ConversationsController < ApplicationController
    def user
      user = User.find(params[:id])
        conversations = user.conversations
        render json: conversations
    end
    def create
        conversation = Conversation.new
        if conversation.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(ConversationSerializer.new(conversation)).serializable_hash
          ActionCable.server.broadcast 'conversations_channel', serialized_data
          head :ok
        end
    end
    def show
        conversation = Conversation.find_by(id: params[:id])
        ActiveModelSerializers::Adapter::Json.new(ConversationSerializer.new(conversation)).serializable_hash
        ActionCable.server.broadcast 'conversations_channel', serialized_data
        render json: conversation
    end
      
      private
      
      # def conversation_params
      #   params.require(:conversation).permit(:title)
      # end
end
