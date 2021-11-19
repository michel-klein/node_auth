import express from 'express';
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware';
import bearerAuthenticationMiddleware from './middlewares/bearer-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Config da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config de rotas
app.use(statusRoute);
app.use(authorizationRoute);

app.use(bearerAuthenticationMiddleware)
app.use(usersRoute);

//Config do handler de erro
app.use(errorHandler);

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});