Rails.application.routes.draw do
  get 'sessions/new', to: "sessions#new", as: :signin
  post 'sessions/create'
  delete 'sessions/destroy'

  resources :records

  resources :data_infos do
    post "invite"
  end

  get :home, to: 'home#index'
  post "update_data", to: 'home#update_data', as: "update_data"
  root 'home#index'
end
