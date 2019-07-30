import * as Yup from 'yup';
import Users from '../models/Users';

class UsersController {
  async store(req, res) {
    // validações
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // validando email
    const userExists = await Users.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email } = await Users.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    // validações
    const schema = Yup.object().shape({
      oldName: Yup.string(),
      email: Yup.string(),
      name: Yup.string().when('oldName', (oldName, field) =>
        oldName ? field.required() : field
      ),
    });
  }
}

export default new UsersController();
