FROM node:22.10.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3300

RUN npm run generate-jwt

CMD ["npm", "run", "dev"]
