# Suporte 704 API

**Suporte 704 API** é uma aplicação backend desenvolvida com Node.js e TypeORM, utilizando Docker para facilitar o ambiente de desenvolvimento. Esta API oferece funcionalidades para suporte, integração com bases de dados e outros serviços.

---

## Índice

- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [Requisitos](#requisitos)
- [Configuração Inicial](#configuração-inicial)
- [Rodando a Aplicação](#rodando-a-aplicação)
- [Comandos de Migração](#comandos-de-migração)
- [Sincronizando o Banco de Dados](#sincronizando-o-banco-de-dados)
- [Contribuindo](#contribuindo)

---

## Ambiente de Desenvolvimento

### Requisitos

1. **Docker** e **docker-compose** devem estar instalados na sua máquina.
2. **Node.js** (v14 ou superior) para executar scripts locais ou rodar a aplicação fora do Docker (opcional).

### Configuração Inicial

Antes de começar, é necessário configurar o ambiente da aplicação:

1. **Copiar o arquivo `.env.example` para `.env`:**

   O arquivo `.env.example` contém as variáveis de ambiente necessárias para a configuração da aplicação. Para começar, copie este arquivo para `.env`:

   ```bash
   cp .env.example .env
   ```

2. **Copiar o arquivo `.env.example` para `.env`:**
    Após copiar o arquivo, abra o arquivo .env e ajuste as variáveis conforme necessário. As variáveis mais importantes que você precisará configurar são:

    #### Configuração da porta do banco de dados (MySQL)
    DB_PORT=3306   # (Ajuste caso precise de outra porta)

    #### Definir a senha do banco de dados
    DB_PASS=root

    #### Configuração da porta da API
    PORT=3300        # (Ajuste se for necessário rodar a API em outra porta)

    #### Nome do banco de dados
    DB_NAME=suporte704  # (Altere o nome do banco se necessário)

    #### Usuário do banco de dados
    DB_USER=root  # (Altere se não for root)

    #### URL da conexão com o banco de dados

## Rodando a Aplicação

Após configurar o ambiente, siga os passos abaixo para subir a aplicação:

1. **Subir os containers Docker**:

   Certifique-se de estar no diretório raiz do projeto e execute o seguinte comando para subir os containers:

   ```bash
   docker-compose up -d
   ```
   Esse comando irá construir e iniciar os containers definidos no arquivo docker-compose.yml, incluindo o banco de dados e a aplicação API.

2. **Atualizar base de dados**:

    Você terá que criar a base de dados executando o seguinte comando:

    ```bash
    docker-compose exec api npm run typeorm migration:run -- -d src/main/infra/typeorm/connection/app-data-source.ts
    ```

    Após este comando sincronize os ajustes realizados nas entidades com o seguinte comando:

    ```bash
    docker-compose exec api npm run typeorm schema:sync -- -d src/main/infra/typeorm/connection/app-data-source.ts
    ```