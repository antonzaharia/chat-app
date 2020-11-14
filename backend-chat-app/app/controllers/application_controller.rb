class ApplicationController < ActionController::Base
    protect_from_forgery
    skip_before_action :verify_authenticity_token, :raise => false

    def encode_token(payload)
        JWT.encode(payload, "abracadabra001")
    end
end
