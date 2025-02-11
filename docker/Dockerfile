FROM node:22.10.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3300

RUN npm run generate-jwt

RUN npm run build

RUN rm -rf node_modules

CMD ["npm", "run", "start"]
