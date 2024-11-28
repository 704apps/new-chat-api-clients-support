npm run typeorm migration:run -- -d src/main/infra/typeorm/connection/app-data-source.ts

npm run typeorm schema:sync -- -d src/main/infra/typeorm/connection/app-data-source.ts