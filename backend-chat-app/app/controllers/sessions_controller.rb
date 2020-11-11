class SessionsController < ApplicationController
  include CurrentUserConcern
  
  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      
      session[:user_id] = @user.id
      render json: {
        status: :created,
        logged_in: true,
        user: @user
      }
    else
      render json: {status: 401}
    end
  end

  def logged_in
    set_current_user
    if @current_user
      render json: {
        status: :created,
        logged_in: true,
        user: @current_user
      }
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    reset_session
    render json: {
      status: 200,
      logged_in: false
    }
  end
end
