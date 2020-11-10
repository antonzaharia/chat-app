Rails.application.routes.draw do
  get '/logged_in', to: "sessions#logged_in"
  post '/login', to: "sessions#create"
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
