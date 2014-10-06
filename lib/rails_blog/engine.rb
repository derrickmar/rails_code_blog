module RailsBlog
	class Engine < ::Rails::Engine
		require "jquery-rails"
		require "bootstrap-sass"
		require "sprockets"
		isolate_namespace RailsBlog
	end
end
