import User from '../models/User';

class UserController {
  async signUp(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: `Ocorreu um erro${e}` });
    }
  }
}

export default new UserController();
