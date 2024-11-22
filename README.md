
# Documentação do Projeto Node.js com Express

## Estrutura do Projeto

```
BACKEND_NODEJS/
├── src/
│   ├── config/
│   │   └── dbConfig.js
│   ├── controllers/
│   │   └── postsController.js
│   ├── models/
│   │   └── postsModel.js
│   ├── routes/
│       └── postsRoutes.js
├── .env
├── .gitignore
├── chaveAPI.txt
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

---

## Comandos no Terminal

### Inicializar o projeto com suporte a ES6
```bash
npm init es6 -y
```

### Instalar o Express
```bash
npm install express
```

### Rodar o servidor com recarregamento automático
```bash
node --watch server.js
```

### Instalar o MongoDB
```bash
npm install mongodb
```

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:
```
STRING_CONEXAO=coloque_aqui_a_chave_para_conectar_ao_banco_de_dados
```

---

## Scripts Automatizados no `package.json`

Adicione os seguintes scripts no `package.json` para automatizar comandos:

```json
"scripts": {
  "dev": "node --watch --env-file=.env server.js",
  "test": ""
}
```

### Rodar o servidor no modo de desenvolvimento
```bash
npm run dev
```

---

## Observações

- Certifique-se de que o arquivo `.env` está configurado corretamente para que a conexão com o banco de dados funcione.
- A estrutura de diretórios segue a organização modular para facilitar a manutenção e escalabilidade do projeto.

---

## Dependências

- **Express**: Framework web minimalista para Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

---

## Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto. Basta clonar o repositório e enviar suas propostas por meio de pull requests.


comando novos 
npm install multer 