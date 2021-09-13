import Sequelize, { Model } from 'sequelize';

export default class Client extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must be between 3 and 255 characters',
          },
        },
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'this CPF already exists',
        },
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      phone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Sales, { foreignKey: 'client_id' });
  }
}
