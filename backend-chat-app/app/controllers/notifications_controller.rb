class NotificationsController < ApplicationController
    def index
        user = User.find(params[:user_id])
        notifications = user.notifications

        render json: notifications
    end
end
