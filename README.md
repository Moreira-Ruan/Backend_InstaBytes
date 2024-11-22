Documentacao 

Comandos terminal:

npm init es6 -y 

npm install express

node --watch server.js

npm install mongodb

Criar .env e colocar uma variavel 
STRING_CONEXAO = colocar a chave para conectar ao bd

Script foi passado dentro do package json para automatizar comandos
"scripts": {
    "dev": "node --watch --env-file=.env server.js",
    "test": ""
  },


npm run dev