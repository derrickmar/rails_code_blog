RailsBlog::Engine.routes.draw do
  get 'under_the_hood_posts/crud_part_1'
  get 'under_the_hood_posts/index'
  get 'under_the_hood_posts/ajax'
  get 'under_the_hood_posts/ngrok'
  get 'under_the_hood_posts/quick_guide_heroku'
  # get 'under_the_hood_posts/deploying_to_heroku'

  root to: "under_the_hood_posts#index"

end
