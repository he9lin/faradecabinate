# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def item_from_cat(category, ind)
    require 'ostruct'
    name = category.name
    filter = category.filter
    modal_target = "#{filter}-#{ind}"
    modal_class = filter
    norm_name = name.gsub(' ','')
    image_src = "images/#{norm_name.downcase}/#{norm_name}#{ind}.jpg"

    OpenStruct.new name: name, modal_target: modal_target, modal_class: modal_class, image_src: image_src
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
  activate :relative_assets
  config[:relative_links] = true
end
