if Rails.env = 'production'
    Rails.application.config.session_store :cookies_store, key: "_authentication_app", domain: "localhost:3001"
else
    Rails.application.config.session_store :cookies_store, key: "_authentication_app"
end