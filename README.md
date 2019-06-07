**Comandos Utilizados**

```mkdir nomeDoDiretorio```

```npm init -y```

npm i -D eslint

./node_modules/.bin/eslint --init
./node_modules/.bin/eslint src/** test/** --fix

-- colocar no package.json
"lint": "eslint src/** test/** --fix"
--
npm i -D jest@23.6.0 -E
./node_modules/.bin/jest

-- instalar o supertest
npm i -D -E supertest@3.3.0
-- instalar o express
npm i -S -E express@4.16.4

-- colocar no package.json
"secure-mode": "jest --watch"
"start": "node src/server.js",

-- instalar o bodyparser
npm i -S -E body-parser@1.18.3

-- instalar o consign
npm i -S -E consign@0.1.6

-- instalar o knex
npm i -S -E knex@0.15.2

-- instalar o postgres
npm i -S -E pg@7.7.1

-- criar migrations com o knexJs
node_modules/.bin/knex migrate:make create_users --env test

-- efetuar a migração
node_modules/.bin/knex migrate:latest --env test

-- voltar a migração
node_modules/.bin/knex migrate:rollback --env test

-- instalar o knex-logger
npm i -S knex-logger
