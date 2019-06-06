*Comandos Utilizados*

mkdir nomeDoDiretorio
npm init -y
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