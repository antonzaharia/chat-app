class NotificationsController < ApplicationController
    def update
        notification = Notification.find(params[:id])
        notification.update(seen: true)

        render json: notification
    end
end
