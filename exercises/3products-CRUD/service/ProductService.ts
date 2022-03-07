import ProductModel from '../model';
import Product from '../types/interfaces/Product';
import StatusCodes from '../types/enums/statusCodes';
import productMainInfo from '../types/types/productMainInfo';
import { generatedError } from '../functions';

const getAll = async (): Promise<Product[]> => ProductModel.read();

const getById = async (id: number): Promise<Product> => {
  const products = await ProductModel.read();

  const product: Product | undefined = products.find((blogPost) => blogPost.id === id);

  if (!product) throw generatedError('Produto não encontrado', StatusCodes.NOT_FOUND);

  return product;
};

const create = async ({ nome, marca, preco, fabricacao, validade }: productMainInfo ): Promise<Product> => {
  const products = await ProductModel.read();

  const maxId = products
    .map((product: Product) => product.id)
    .reduce((a, b) => Math.max(a, b), 0);
  
  const createdProduct: Product = {
    id: maxId + 1,
    nome,
    marca,
    preco,
    fabricacao,
    validade,
  };

  await ProductModel.write([ ...products, createdProduct ]);

  return createdProduct;
};

const editProduct = async (editedProduct: Product): Promise<Product> => {
  const products = await ProductModel.read();

  const productIndex = products.findIndex((product: Product) => product.id === editedProduct.id);
  if (productIndex === -1) throw generatedError('Produto não encontrado', StatusCodes.NOT_FOUND);

  products.splice(productIndex, 1, editedProduct);

  await ProductModel.write(products);

  return editedProduct;
};

const removeProduct = async (id: number): Promise<void> => {
  const products = await ProductModel.read();

  const productIndex = products.findIndex((product: Product) => product.id === id);

  if (productIndex === -1) throw generatedError('Produto não encontrado', StatusCodes.NOT_FOUND);

  products.splice(productIndex, 1);

  await ProductModel.write(products);
};

const search = async (initialPrice: number, finalPrice: number): Promise<Product[]> => {
  const products = await ProductModel.read();

  const filteredPosts = products.filter(({ preco }: Product) => {
    return preco >= initialPrice && preco <= finalPrice;
  });

  return filteredPosts;
};

const unexpiredProducts = async (): Promise<Product[]> => {
  const products = await ProductModel.read();
  const now = new Date().getDate();

  const unexpired = products.filter(({ validade }: Product) => {
    const validadeDate = new Date(validade).getDate();
    return validadeDate >= now;
  });

  return unexpired;
};

const ProductService = {
  getAll,
  getById,
  create,
  editProduct,
  removeProduct,
  search,
  unexpiredProducts,
};

export default ProductService;
