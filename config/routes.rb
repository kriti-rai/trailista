Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :hikes, only: [:index]
    resources :users
    resources :sessions, only: [:create, :destroy]
    post 'user_token' => 'user_token#create'
  end

end
