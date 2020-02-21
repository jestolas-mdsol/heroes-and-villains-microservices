FROM node:12
WORKDIR /usr/src/villains-microservice
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
