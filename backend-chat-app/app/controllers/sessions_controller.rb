class SessionsController < ApplicationController
  include CurrentUserConcern
  
  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      render json: {
        status: :created,
        logged_in: true,
        user: UserSerializer.new(@user)
      }
    else
      render json: {status: 401}
    end
  end

  def logged_in
    if @current_user
      render json: {
        status: :created,
        logged_in: true,
        user: UserSerializer.new(@current_user)
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    reset_session
    @current_user = nil
    render json: {
      status: 200,
      logged_in: false
    }
  end
end
