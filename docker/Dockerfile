# FROM node:22.10.0

# WORKDIR /usr/src/app

# RUN ls -la

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3300

# RUN npm run generate-jwt

# RUN npm run build

# RUN rm -rf node_modules

# CMD ["node", "dist/main/infra/http/server.js"]


# Etapa 1: Construção da aplicação
FROM node:22.10.0 AS builder

WORKDIR /usr/src/app

# Copiar os arquivos de configuração do npm (package.json e package-lock.json)
COPY package*.json ./

# Instalar as dependências no ambiente de build
RUN npm install

# Copiar o código-fonte para o container
COPY . .

# Construir a aplicação (se necessário)
RUN npm run build  # ou o comando equivalente para sua aplicação

# Etapa 2: Imagem de produção (menor)
FROM node:22.10.0-slim

WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários da etapa anterior (dist/ e node_modules)
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules

# Copiar arquivos específicos, como .env ou outros configs necessários
COPY .env .env

# Definir o comando de execução do contêiner
CMD ["node", "dist/main/infra/http/server.js"]