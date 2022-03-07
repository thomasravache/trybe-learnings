import { Router, Request, Response, NextFunction } from 'express';
import ProductService from '../service/ProductService';
import StatusCodes from '../types/enums/statusCodes';
import productMainInfo from '../types/types/productMainInfo';
import ProductSchema from './schemas/productSchema';
import { generatedError } from '../functions';

const productRoutes = Router();

const validateProduct = (body: productMainInfo): void => {
  const { error } = ProductSchema.validate(body);

  if (error) throw error;

  const dateValidade = new Date(body.validade).getTime();
  const dateFabricacao = new Date(body.fabricacao).getTime();

  if (dateValidade <= dateFabricacao) {
    throw generatedError('Validade não pode ser menor ou igual a fabricação', StatusCodes.BAD_REQUEST);
  }
};

productRoutes.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const products = await ProductService.getAll();

  return res.status(StatusCodes.OK).json(products);
});

productRoutes.get('/unexpired', async (req: Request, res: Response) => {
  const products = await ProductService.unexpiredProducts();

  return res.status(StatusCodes.OK).json(products);
});

productRoutes.get('/search', async (req: Request, res: Response) => {
    const { initialPrice, finalPrice }: any = req.query;

    const searchedProducts = await ProductService.search(parseFloat(initialPrice), parseFloat(finalPrice));

    return res.status(StatusCodes.OK).json(searchedProducts);
});

productRoutes.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const product = await ProductService.getById(parseInt(id, 10));

    return res.status(StatusCodes.OK).json(product);
  } catch (e) {
    return next(e);
  }
});

productRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newProduct: productMainInfo = req.body;

  try {
    validateProduct(newProduct);

    const createdProduct = await ProductService.create(newProduct);

    return res.status(StatusCodes.CREATED).json(createdProduct);
  } catch (e) {
    return next(e);
  }
});

productRoutes.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const productNewInfo: productMainInfo = req.body;

  try {
    validateProduct(productNewInfo);
    const editedProduct = await ProductService.editProduct({ id: parseInt(id, 10), ...productNewInfo });

    return res.status(StatusCodes.OK).json(editedProduct);
  } catch(e) {
    return next(e);
  }
});

productRoutes.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    await ProductService.removeProduct(parseInt(id, 10));

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch(e) {
    return next(e);
  }
});


export default productRoutes;
