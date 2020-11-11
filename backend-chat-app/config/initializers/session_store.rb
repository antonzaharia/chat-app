if Rails.env == 'production'
    Rails.application.config.session_store :cookies_store, key: "_backend_chat_app", domain: "localhost:3000"
else
    Rails.application.config.session_store :cookies_store, key: "_backend_chat_app"
end