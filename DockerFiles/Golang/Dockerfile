# Use official Golang image as base
FROM golang:alpine

# Set the Current Working Directory inside the container
WORKDIR /go/src/app

# Copy the source code from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o main .

# Copy the HTML file into the container
COPY index.html .

# Expose port 2000 to the outside world
EXPOSE 2000

# Command to run the executable
CMD ["./main"]

