$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rails_blog/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rails_blog"
  s.version     = RailsBlog::VERSION
  s.authors     = ["Derrick Mar"]
  s.email       = ["derrickmar24@gmail.com"]
  s.homepage    = "http://derrick-mar.com/"
  s.summary     = "Summary of RailsBlog."
  s.description = "Description of RailsBlog."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.6"

  s.add_development_dependency "pg"

  s.add_dependency "bootstrap-sass", "~> 3.2.0"
  s.add_dependency "sass-rails", ">= 3.2"
  s.add_dependency "jquery-rails"
  s.add_dependency "autoprefixer-rails"
  s.add_dependency "slim-rails"

end
