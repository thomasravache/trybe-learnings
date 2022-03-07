import Joi from 'joi';

const blogPostSchema = Joi.object({
  titulo: Joi.string().not().empty().required(),
  autor: Joi.string().min(3).not().empty().required(),
  categoria: Joi.string().min(3).not().empty().required(),
  criacao: Joi.date().not().empty().required(),
});

export default blogPostSchema;
