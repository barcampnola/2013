require "sinatra"
require 'sass/plugin/rack'
require 'sinatra/assetpack'

set :root, File.dirname(__FILE__)
register Sinatra::AssetPack

assets {
  css_compression :sass
  js_compression :jsmin

  serve '/js',  from: 'assets/js'
  serve '/css', from: 'assets/css'
  serve '/img', from: 'assets/img'

  js :app, '/js/app.js', [
    '/js/vendor/*.js',
    '/js/app/*.js'
  ]

  css :app, '/css/app.css', [
    '/css/**/*.css',
  ]
}


get "/" do
  send_file File.join(settings.public_folder, "index.html")
end