# Use the official Ruby image as the base image
FROM ruby:3.1

# Set the working directory
WORKDIR /usr/src/app

# Copy the Ruby script into the container
COPY hello.rb .

# Install webrick gem
RUN gem install webrick

# Expose port 80
EXPOSE 80

# Command to run the Ruby web server
CMD ["ruby", "hello.rb"]
