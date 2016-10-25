# fff-theme

It base on webpack, babel, yarn and some modern web develop tools.
You can fork this repo to special your want design effect.
Just add some package that I am usually to used, like powerful lib underscore, or picture preview plugin fancybox.
If you want to add more package, you can visit [yarn](https://github.com/yarnpkg/yarn) to get more information.

# Feature

### style
* bootstrap base style
* font-awesome icon
* animate.css support

### minify
* compress js, css, html file

### syntactic sugar
* less
* es6

# Demo

[my personal blog](https://blog.fewspider.com)

# Develop

```
# watch modify
yarn run watch

# build release
yarn run build
```


## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "fff-theme"
```

And add this line to your Jekyll site:

```yaml
theme: fff-theme
```

And then execute:

    $ bundle

## Enabling comments (via Disqus)

Optionally, if you have a Disqus account, you can tell Jekyll to use it to show a comments section below each post.

To enable it, add the following lines to your Jekyll site:

```yaml
  disqus:
    shortname: my_disqus_shortname
```

You can find out more about Disqus' shortnames [here](https://help.disqus.com/customer/portal/articles/466208).

Comments are enabled by default and will only appear in production, i.e., `JEKYLL_ENV=production`

If you don't want to display comments for a particular post you can disable them by adding `comments: false` to that post's YAML Front Matter.

## Enabling Google Analytics

To enable Google Anaytics, add the following lines to your Jekyll site:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/fewspider/fff-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

You can choose to override the [`_includes/head.html `](_includes/head.html) file to specify a custom style path.

To test your theme, run `bundle exec rake preview` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme and the contents of the `example/` directory. As you make modifications to your theme and to the example site, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
