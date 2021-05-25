This site uses the Jekyll Minima Theme, with some updates.

# Run on Local Environment

Detailed Instructions: [setting-up-your-github-pages-site-locally-with-jekyll](https://help.github.jp/enterprise/2.11/user/articles/setting-up-your-github-pages-site-locally-with-jekyll/#requirements)

### Install Bundle

    gem install bundler

### Create a Gemfile
    source 'https://rubygems.org'
    gem 'github-pages', group: :jekyll_plugins

### Instructions

    bundle install
    bundle exec jekyll serve --increment
