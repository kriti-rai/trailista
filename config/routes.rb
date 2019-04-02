Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :hikes, only: [:index]
    resources :users, only: [:create]
    resources :sessions, only: [:create]
    get '/show' => 'users#show'
    get '/favorites' => 'users#favorites'
    post '/add_favorite' => 'user#remove_favorite'
    post '/remmove_favorite' => 'user#remove_favorite'
    post '/clear_favorites' => 'user#clear_favorites'
    post '/logout' => 'sessions#logout'
  end

end
