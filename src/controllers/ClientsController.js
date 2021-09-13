import Client from '../models/Client';

class ClientController {
  async store(req, res) {
    try {
      const { cpf } = req.body;
      const verify = await Client.findAll({ where: { cpf } });
      if (verify.length > 0) {
        res.status(400).json({
          message: ['Client already exists'],
        });
      }
      const newClient = await Client.create(req.body);
      const {
        id, name, address, phone,
      } = newClient;
      res.json({
        id, name, cpf, address, phone,
      });
    } catch (e) {
      res.status(400).json({ message: `Failed to create new client. Error: ${e}` });
    }
  }

  async index(req, res) {
    try {
      const clients = await Client.findAll({
        attributes: ['id', 'name', 'cpf', 'address', 'phone'],
        order: [['id', 'DESC']],
      });
      return res.json(clients);
    } catch (e) {
      return res.json({
        message: [`error: ${e}`],
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Provide one ID'],
        });
      }
      const user = await Client.findByPk(id);
      if (!user) {
        return res.status(400).json({
          message: ['Client dont exists'],
        });
      }
      await Client.destroy({ where: { id } });
      return res.json('Client has been deleted succesfully');
    } catch (e) {
      return res.status(400).json({
        message: [`Error: ${e}`],
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const client = await Client.findByPk(id);

      if (!client) {
        return res.status(400).json({
          errors: ['This client dont exists'],
        });
      }
      await Client.update(req.body, { where: { id } });
      return res.json({ message: 'Updated Successfully' });
    } catch (e) {
      return res.status(400).json({
        message: [`Error: ${e}`],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Provide one ID'],
        });
      }
      return res.json({ message: ['ok'] });
    } catch (e) {
      return res.status(400).json({
        message: [`Error: ${e}`],
      });
    }
  }
}

export default new ClientController();
