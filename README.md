# Projeto_programacao_web3_Claudia

Serviço de cadastro de veículos, utilizando conceitos aprendidos no módulo de programação 
web 3: métodos http, postgres e sistema migrations do sequelize.

# Para iniciar o projeto, você vai precisar:

- instalar as dependencias da aplicação

```
  npm i 
```
- Configurar as variáveis de ambiente: criar um arquivo .env com as variáveis que estão no arquivo .env.example

- Configurar o banco de dados no arquivo config.json, que está na pasta config.

- Criar o Data Base:

```
  npx sequelize-cli db:create
```
- Executar a migração do modelo de tabela para o banco de dados:

```
  npx sequelize-cli db:migrate
```
- Popular a tabela no banco de dados:

```
  npx sequelize-cli db:seed:all
```
- Rodar a aplicação:

```
  npm run dev
```

## Referência

 - [sequelize migrations](https://sequelize.org/docs/v6/other-topics/migrations/)
 - [PostgresSQL](https://www.postgresql.org/docs/)
 
 
## Documentação da API

#### Retorna todos os carros

```http
  GET /localhost/cars
```

#### Retorna um carro pelo id

```http
  GET /localhost/cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você quer |

#### Retorna um carro pelo nome

```http
  GET /localhost/cars/?name=${name}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do carro que você quer |

#### Adiciona um carro no banco

```http
  POST /localhost/cars
```
**Obrigatório**

passar os dados em formato json no corpo da requisição

Exemplo:

{

    "brand": "Fiat",
    "name": "Pulse",
    "model": "drive 1.0 turbo 200 flex aut",
    "year": 2022,
    "collor": "Azul amalfi",
    "licensePlate": "ABC1D23",
    "price": 107700

}

#### Edita os dados de um carro

```http
  PUT /localhost/cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você quer editar |

#### Apaga um carro do banco de dados

```http
  DELETE /localhost/cars/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do carro que você quer deletar |


## Autores

- [@ClaudiaCoder](https://github.com/ClaudiaCoder)





