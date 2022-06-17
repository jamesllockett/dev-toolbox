# Official base image
FROM node:13.12.0-alpine

# Set working directory
WORKDIR /toolbox-app

# Add to PATH
ENV PATH /toolbox-app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Add the toolbox app
COPY . ./

# Start the app
CMD ["npm", "start"]
