Rails.application.routes.draw do
  resources :messages
  get '/logged_in', to: "sessions#logged_in"
  post '/login', to: "sessions#create"
  delete '/sessions', to: "sessions#destroy"

  resources :users do
    resources :conversations
    post '/user-conversations', to: "conversations#user"
  end
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
