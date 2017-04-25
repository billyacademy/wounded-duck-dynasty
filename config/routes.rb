Rails.application.routes.draw do
  root 'dynasty_teams#index'
  resources :players, only: [:index, :show, :edit, :update, :create, :new]
  resources :dynasty_teams, only: [:show, :index, :trade]
  resources :trades, only: [:index, :update, :create, :new]
  match '/customview' => 'players#customview' , via: [:get]
  match '/players/:id/edit' => 'players#update', via: [:get, :post]
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  match '/trade_post' => 'dynasty_teams#trade' , via: [:update]
end
