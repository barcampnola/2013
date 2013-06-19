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

configure :production do
  set :static_cache_control, [:public, :max_age => 300]
  before do
    cache_control :public, :max_age => 300
  end
end

assets {
  # css_compression :sass
  js_compression :simple

  serve '/js',  from: 'assets/js'
  serve '/css', from: 'assets/css'
  serve '/img', from: 'assets/img'
  serve '/fonts', from: 'assets/fonts'

  js :app, '/js/app.js', [
    '/js/vendor/jquery.js',
    '/js/vendor/*.js',
    '/js/app/*.js'
  ]

  css :app, [
    '/css/app.css'
  ]
}

helpers do
  def production?
    ENV['RACK_ENV'] == 'production'
  end

  ASSET_HOST = production? ? 'http://d12qi0sd8r0cmx.cloudfront.net' : ""
  def asset path
    ASSET_HOST + path
  end
end

get "/" do
  erb :index
end
