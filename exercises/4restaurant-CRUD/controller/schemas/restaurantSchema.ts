import Joi from 'joi';
import restaurantMainInfo from '../../types/types/restaurantMainInfo';

const restaurantSchema: Joi.ObjectSchema<restaurantMainInfo> = Joi.object({
  nome: Joi.string().min(3).not().empty().required(),
  tipoComida: Joi.string().min(3).not().empty().required(),
  abertura: Joi.number().not().empty().required(),
  fechamento: Joi.number().not().empty().required(),
});

export default restaurantSchema;
