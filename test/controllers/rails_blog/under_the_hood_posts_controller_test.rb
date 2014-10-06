require 'test_helper'

module RailsBlog
  class UnderTheHoodPostsControllerTest < ActionController::TestCase
    test "should get crud_part_1" do
      get :crud_part_1
      assert_response :success
    end

  end
end
