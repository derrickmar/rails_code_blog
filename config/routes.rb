RailsBlog::Engine.routes.draw do
  get 'under_the_hood_posts/crud_part_1'
  get 'under_the_hood_posts/index'
  get 'under_the_hood_posts/minitopics'

  root to: "under_the_hood_posts#index"

end
