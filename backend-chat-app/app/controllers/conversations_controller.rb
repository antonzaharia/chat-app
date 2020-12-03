class ConversationsController < ApplicationController
  include CurrentUserConcern
  def index
    user = User.find(params[:user_id])
    render json: user.conversations
  end

    def create
        newUser = User.find_by(email: params[:email])
        conversation = Conversation.new
        if newUser && conversation.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(ConversationSerializer.new(conversation)).serializable_hash
          ActionCable.server.broadcast 'conversations_channel', serialized_data
         
          render json: conversation
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
