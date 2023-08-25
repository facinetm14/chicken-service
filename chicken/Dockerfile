FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

#Install app dependencies
RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]