import Joi from 'joi';

const ProductSchema = Joi.object({
  nome: Joi.string().not().empty().required(),
  marca: Joi.string().min(3).not().empty().required(),
  preco: Joi.number().min(0.01).not().empty().required(),
  validade: Joi.date().not().empty().required(),
  fabricacao: Joi.date().not().empty().required(),
});

export default ProductSchema;
