module RailsBlog
	class Engine < ::Rails::Engine
		require "jquery-rails"
		require "bootstrap-sass"
		require "sprockets"
		require "autoprefixer-rails"
    require "slim-rails"
		isolate_namespace RailsBlog
	end
end
