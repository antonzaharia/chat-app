class ConversationsController < ApplicationController
  include CurrentUserConcern
  def index
    user = User.find(params[:user_id])
    conversations = user.conversations.uniq{ |c| c.id }.reverse
    render json: conversations
  end

  def create
    user = User.find(params[:userId])
    reciever = User.find_by(email: params[:email])
    conversation = user.conversations.build
    if conversation.save
      conversation.users << reciever
      message = conversation.messages.create(content: params[:message], user: user)
      serialized_data = ActiveModelSerializers::Adapter::Json.new(ConversationSerializer.new(conversation)).serializable_hash
      ActionCable.server.broadcast 'conversations_channel', serialized_data
     
      render json: conversation, status: :created
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
