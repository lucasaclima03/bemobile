import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Client from '../models/Client';

const models = [User, Client];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
