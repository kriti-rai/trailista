Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :hikes, only: [:index]
  end

  namespace :api do
    resources :users
  end
end
