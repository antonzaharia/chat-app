Rails.application.routes.draw do
  get 'sessions/create'
  get 'session/create'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
