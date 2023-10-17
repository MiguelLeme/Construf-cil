# Tecnologia

- Backend em Node e JavaScript
- Banco de dados SQL com PostgreSQL

# Estrutura do projeto

- index.js
  - Arquivo principal do backend. Onde eh feito toda a configuracao inicial da API
- Routes:
  - Rotas HTTP. Serve de entrada para execucao das funcoes no backend que chama o banco de dados
- Controllers:
  - Funcoes que acessam o banco de dados
- Database:
  - Arquivo que contem as configuracoes de conexao com o banco de dados

# Como executar

- Apos baixar o projeto, instalar as dependecias usando o comando:

```bash
npm install
```

- Alterar as credenciais do banco de dados no arquivo `.env`:
  - Host: Endereco do banco de dados
  - Port: Porta em que o banco de dados esta executando. (Geralmente 5432 para PostgreSQL)
  - User: Usuario do banco de dados
  - Pass: Senha do banco de dados
- Apos baixar as dependecias, certifique-se de que o banco de dados esta funcionando.
- Apos tudo configurado, executar o comando:

```bash
npm run start
```

# Como chamar a API

- Mandar requisicoes para:
  - GET para a rota `http://localhost:products`
    - Retorna listagem de produtos do banco de dados
  - POST para a rota `http://localhost:products`
    - Insere um novo produto no banco de dados
  - PUT para a rota `http://localhost:products/:id` (substituir `:id` pelo ID do produto no banco)
    - Atualiza um produto no banco de dados de acordo com o ID
  - DELETE para a rota `http://localhost:products/:id` (substituir `:id` pelo ID do produto no banco)
    - Deleta um produto do banco de dados de acordo com o ID
