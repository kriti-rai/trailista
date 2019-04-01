Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :hikes, only: [:index]
    resources :users, only: [:create]
    resources :sessions, only: [:create]
    get '/show' => 'users#show'
    post '/favorites' => 'users#favorites'
    post '/logout' => 'sessions#logout'
  end

end
