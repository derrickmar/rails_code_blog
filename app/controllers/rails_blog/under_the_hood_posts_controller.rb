require_dependency "rails_blog/application_controller"

module RailsBlog
  class UnderTheHoodPostsController < ApplicationController
  	def index
      @sidebar_partial = 'rails_blog/sidebar/sidebar_index'
  	end

    # def deploying_to_heroku
    # end

    def quick_guide_heroku
      @sidebar_partial = 'rails_blog/sidebar/sidebar_quick_guide_heroku'
    end

    def ajax
      @sidebar_partial = 'rails_blog/sidebar/sidebar_ajax'
    end
  end
end
