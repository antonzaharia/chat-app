Rails.application.routes.draw do
  resources :notifications
  resources :messages
  get '/logged_in', to: "sessions#logged_in"
  post '/login', to: "sessions#create"
  delete '/sessions', to: "sessions#destroy"
  get "/:user_id/mark-all-as-seen", to: "notifications#mark_all_as_seen"

  resources :users do
    resources :conversations 
    resources :notifications
  end
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html 
end
