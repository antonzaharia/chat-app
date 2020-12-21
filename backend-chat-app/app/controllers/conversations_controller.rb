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
  
    if reciever && reciever.id != user.id
      existing_conversation_array = Conversation.joins(:users).where(users: { id: [user.id, reciever.id] })
      byebug
      conversation = user.conversations.build
      if existing_conversation_array.size > 0
        existing_conversation = existing_conversation_array[0]
        message = existing_conversation.messages.create(content: params[:message], user: user)
        serialized_data = ActiveModelSerializers::Adapter::Json.new(ConversationSerializer.new(existing_conversation)).serializable_hash
        ActionCable.server.broadcast 'conversations_channel', serialized_data

        render json: existing_conversation
        
      elsif conversation.save
        conversation.users << reciever
        notification = reciever.notifications.build(conversation: conversation, content: "You have a new message from #{user.name}")
        notification.save
        message = conversation.messages.create(content: params[:message], user: user)
        serialized_data = ActiveModelSerializers::Adapter::Json.new(ConversationSerializer.new(conversation)).serializable_hash
        ActionCable.server.broadcast 'conversations_channel', serialized_data
     
        render json: conversation, status: :created
      end
    elsif reciever
      render json: {errors: "You cannot start a conversation with yourself"}
    else
      render json: {errors: "No user found"}
    end
  end
    def show
        conversation = Conversation.find_by(id: params[:id])
        render json: conversation
    end
    def update
      conversation = Conversation.find(params[:id])
      conversation.update(seen: true)
      render json: conversation
    end
      
      private
      
      # def conversation_params
      #   params.require(:conversation).permit(:title)
      # end
end
