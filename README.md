
# Documentação do Projeto Node.js com Express

## Comandos no Terminal

### Inicializar o projeto com suporte a ES6
Este comando inicializa um novo projeto Node.js utilizando a configuração de módulos ES6. Ele cria um arquivo `package.json` com as configurações básicas.

```bash
npm init es6 -y
```

### Instalar dependências principais
- **Express**: Um framework minimalista para criar aplicações web e APIs com Node.js.
- **MongoDB**: Driver oficial do MongoDB para conexão e manipulação de banco de dados.
- **Multer**: Middleware para lidar com uploads de arquivos, como imagens e documentos.
- **dotenv**: Biblioteca que permite gerenciar variáveis de ambiente de forma segura e prática.

```bash
npm install express mongodb multer dotenv
```

### Instalar biblioteca de IA do Google
Este comando adiciona a biblioteca **@google/generative-ai**, que facilita a integração com APIs de inteligência artificial generativa da Google.

```bash
npm i @google/generative-ai
```

### Rodar o servidor com recarregamento automático
O comando abaixo inicia o servidor com suporte a recarregamento automático sempre que há mudanças no código. Isso reduz o tempo de desenvolvimento, eliminando a necessidade de reiniciar manualmente o servidor.

```bash
node --watch server.js
```

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto para armazenar informações sensíveis, como chaves de API e credenciais. Por exemplo:

```
STRING_CONEXAO=coloque_aqui_a_chave_para_conectar_ao_banco_de_dados
```

Esse arquivo será usado em conjunto com a biblioteca **dotenv** para carregar as variáveis de ambiente no código.

---

## Scripts Automatizados no `package.json`

Adicione os seguintes scripts ao `package.json` para facilitar a execução de comandos comuns:

```json
"scripts": {
  "dev": "node --watch --env-file=.env server.js",
  "test": ""
}
```

- **dev**: Executa o servidor no modo de desenvolvimento, com suporte a recarregamento automático e carregamento de variáveis do arquivo `.env`.

### Rodar o servidor no modo de desenvolvimento
Este comando utiliza o script definido no `package.json` para iniciar o servidor em modo de desenvolvimento.

```bash
npm run dev
```

---

## Dependências

- **Express**: Framework web minimalista para Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Multer**: Middleware para upload de arquivos.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **@google/generative-ai**: Biblioteca para integração com APIs generativas da Google.

---

## Observações

- Certifique-se de que o arquivo `.env` está configurado corretamente para que a conexão com o banco de dados funcione.
- A organização modular foi adotada para facilitar a manutenção e escalabilidade do projeto. Divida os componentes em controladores, modelos e rotas conforme necessário.

---

## Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto. Basta clonar o repositório, fazer as alterações e enviar suas propostas por meio de pull requests.
