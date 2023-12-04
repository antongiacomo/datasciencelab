FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000
RUN npm run generate
CMD [ "bash" ]