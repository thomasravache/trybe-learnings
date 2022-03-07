import Joi from 'joi';

const userSchema = Joi.object({
  nome: Joi.string().min(3).not().empty().required(),
  email: Joi.string().email().not().empty().required(),
  senha: Joi.string().min(6).max(12).not().empty().required(),
});

export default userSchema;
