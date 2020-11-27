class UsersController < ApplicationController
    include CurrentUserConcern

    def create
        user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

        if user.save
            session[:user_id] = user.id 
            render json: {
                status: :created,
                user: UserSerializer.new(user),
                logged_in: true
            }
        else
            render json: {
                status: 500,
                errors: user.errors.full_messages
            }
        end



    end
end
