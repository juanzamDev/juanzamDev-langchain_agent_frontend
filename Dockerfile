# Use Node.js image as base
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]
