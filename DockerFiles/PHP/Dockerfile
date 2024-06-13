# Use the official PHP image as the base image
FROM php:8.0-cli

# Set the working directory
WORKDIR /var/www/html

# Copy the PHP file into the container
COPY index.php /var/www/html/index.php

# Expose port 80
EXPOSE 80

# Command to run the PHP built-in web server
CMD ["php", "-S", "0.0.0.0:80", "-t", "/var/www/html"]