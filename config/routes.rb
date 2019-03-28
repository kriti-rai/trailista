Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :hikes, only: [:index]
    resources :users
    resources :sessions, only: [:create]
    post '/logout' => 'sessions#logout'
  end

end
