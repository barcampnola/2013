require "sinatra"
require 'sass/plugin/rack'
require 'sinatra/assetpack'
require "sinatra/reloader"

set :root, File.dirname(__FILE__)
set :sass, { :load_paths => [ "./assets/css" ] }

register Sinatra::AssetPack

configure :development do
  register Sinatra::Reloader
end

assets {
  # css_compression :sass
  js_compression :simple

  serve '/js',  from: 'assets/js'
  serve '/css', from: 'assets/css'
  serve '/img', from: 'assets/img'
  serve '/fonts', from: 'assets/fonts'

  js :app, '/js/app.js', [
    '/js/vendor/*.js',
    '/js/app/*.js'
  ]

  css :app, [
    '/css/app.css'
  ]
}


get "/" do
  send_file File.join(settings.public_folder, "index.html")
end
