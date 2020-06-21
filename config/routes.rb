Rails.application.routes.draw do


  resources :posts
  devise_for :users, controllers:{
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations'
  } 

  authenticated :user do  
    root 'dashboard#index', as: :user_root
  end 



  

  root 'main#index'


end
