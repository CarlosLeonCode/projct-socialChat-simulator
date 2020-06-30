Rails.application.routes.draw do


  devise_for :users, controllers:{
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations'
  } 

  authenticated :user do  
    root 'dashboard#index', as: :user_root
    resources :posts
  end 



  

  root 'main#index'


end
