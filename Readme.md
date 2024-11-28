

# 1 Rode o comando para gerar a base de dados
npm run typeorm migration:run -- -d src/main/infra/typeorm/connection/app-data-source.ts

# 2 Rode o comando para atualizar a base de dados
npm run typeorm schema:sync -- -d src/main/infra/typeorm/connection/app-data-source.ts