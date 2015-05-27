require_dependency "rails_blog/application_controller"

module RailsBlog
  class UnderTheHoodPostsController < ApplicationController
  	def index
      @sidebar_partial = 'rails_blog/sidebar/sidebar_index'
      @hover_elem_partial_path = 'rails_blog/under_the_hood_posts/partials/grid_hover_elem'
  	end

    def ar_relation_lazy_evaluation
      @sidebar_partial = 'rails_blog/sidebar/sidebar_ar_relation_lazy_evaluation.html.erb'
    end


    def ngrok
      @sidebar_partial = 'rails_blog/sidebar/sidebar_ngrok'
    end

    def quick_guide_heroku
      @sidebar_partial = 'rails_blog/sidebar/sidebar_quick_guide_heroku'
    end

    def ajax
      @sidebar_partial = 'rails_blog/sidebar/sidebar_ajax'
    end

    def angular_performance
      @sidebar_partial = 'rails_blog/sidebar/sidebar_angular_performance'
    end
  end
end
