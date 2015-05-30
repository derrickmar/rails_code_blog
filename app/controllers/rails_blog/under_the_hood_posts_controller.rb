require_dependency "rails_blog/application_controller"

module RailsBlog
  class UnderTheHoodPostsController < ApplicationController
    SIDEBAR_NAMESPACE = "rails_blog/sidebar/"
    before_action :append_namespace

  	def index
      @sidebar_partial = 'rails_blog/sidebar/sidebar_index'
      @hover_elem_partial_path = 'rails_blog/under_the_hood_posts/partials/grid_hover_elem'
  	end

    def ar_relation_lazy_evaluation
      @sidebar_partial += 'sidebar_ar_relation_lazy_evaluation'
    end

    def ar_reload
    end

    def ngrok
      @sidebar_partial += 'sidebar_ngrok'
    end

    def quick_guide_heroku
      @sidebar_partial += 'sidebar_quick_guide_heroku'
    end

    def ajax
      @sidebar_partial += 'sidebar_ajax'
    end

    def angular_performance
      @sidebar_partial += 'sidebar_angular_performance'
    end

    private
    def append_namespace
      @sidebar_partial = SIDEBAR_NAMESPACE
    end
  end
end
