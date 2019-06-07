# Sistema teste de Desenvolvimento de API NodeJS com TDD #

### Comandos Utilizados ###

> Para limpar o banco para novos testes usar o rollback do knex para recriar as bases :sunglasses:   
> ``` node_modules/.bin/knex migrate:rollback --env test ```   

``` mkdir nomeDoDiretorio ```  
``` npm init -y ```  
``` npm i -D eslint ```  

``` ./node_modules/.bin/eslint --init ```  
``` ./node_modules/.bin/eslint src/** test/** --fix ```  

__colocar no package.json__  
``` "lint": "eslint src/** test/** --fix" ```  

``` npm i -D jest@23.6.0 -E ```    
``` ./node_modules/.bin/jest ```  

__instalar o supertest__  
``` npm i -D -E supertest@3.3.0 ```  
__instalar o express__  
``` npm i -S -E express@4.16.4 ```  

__colocar no package.json__  
``` "secure-mode": "jest --watch" ```  
``` "start": "node src/server.js", ```  

__instalar o bodyparser__  
``` npm i -S -E body-parser@1.18.3 ```  

__instalar o consign__  
``` npm i -S -E consign@0.1.6 ```  

__instalar o knex__  
``` npm i -S -E knex@0.15.2 ```  

__instalar o postgres__  
``` npm i -S -E pg@7.7.1 ```  

__criar migrations com o knexJs__  
``` node_modules/.bin/knex migrate:make create_users --env test ```  

__efetuar a migração__  
``` node_modules/.bin/knex migrate:latest --env test ```  

__voltar a migração__  
``` node_modules/.bin/knex migrate:rollback --env test ```  

__instalar o knex-logger__  
``` npm i -S knex-logger ```  
