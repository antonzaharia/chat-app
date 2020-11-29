class ConversationsController < ApplicationController
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
        render json: conversation
    end
      
      private
      
      # def conversation_params
      #   params.require(:conversation).permit(:title)
      # end
end
