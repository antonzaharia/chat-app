class UsersController < ApplicationController
    def create
        user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])

        if user.save
            session[:user_id] = user.id
            render json: {
                status: :created,
                user: user
            }
        else
            render json: {
                status: 500
            }
        end
    end
end
