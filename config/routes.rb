Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'posts#index', as: 'home'

  get 'about' => "pages#about" , as: 'about'

  get 'login' => "users#login"

  get 'index' => "numbers#index"

  resources :articles 
  
  resources :posts do
  	resources :comments
  end
end
