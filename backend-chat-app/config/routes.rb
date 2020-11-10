Rails.application.routes.draw do
  get 'sessions/create'
  get 'session/create'
  get '/logged_in', to: "sessions#logged_in"
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
