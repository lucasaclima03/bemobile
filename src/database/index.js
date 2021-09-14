import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Clients from '../models/Clients';
import Sales from '../models/Sales';
import User from '../models/User';

const models = [Clients, Sales, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
