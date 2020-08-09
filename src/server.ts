import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// yarn add typescript -D
// yarn tsc --init
// yarn add ts-node-dev -D
// yarn add express
// yarn add @types/express -D
// yarn add knex sqlite3
// yarn add cors
// yarn add @types/cors -D

// métodos http / get: listar dados / post: criar dados / put: atualizar informação / delete: deletar informação

// parâmetros
// corpo (request body) - dados para atualização de um registro
// route params: identificar qual recurso eu quero atualizar ou deletar
// query params: parâmetro de filtro