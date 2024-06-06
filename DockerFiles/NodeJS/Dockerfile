#Use the Official Node.js image based on Alpine Linux
FROM node:alpine

#Set the working directory in the container
WORKDIR /app

#Copy package.json & package-lock.json files to the working directory
COPY package*.json ./

# Install the application depenedencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the Node.js application
CMD ["npm", "start"]

