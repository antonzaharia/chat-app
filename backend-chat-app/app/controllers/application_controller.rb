class ApplicationController < ActionController::API
    skip+before_action: verify_authenticity_token
end
