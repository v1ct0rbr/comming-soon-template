# Use the Node.js base image
FROM node:22.6.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Execute the build command
RUN npm run build

# Expose the port on which the application will be running
EXPOSE 7777

# Set the application startup command
CMD ["npm", "run", "start"]