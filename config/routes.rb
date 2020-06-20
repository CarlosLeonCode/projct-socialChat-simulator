Rails.application.routes.draw do


  devise_for :users, controllers:{
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations'
  } 

  authenticated :user do  
    root 'main#dashboard', as: :user_root
  end 



  

  root 'main#index'


end
