import fs from 'fs/promises';
import Product from '../types/interfaces/Product';

const read = async (): Promise<Product[]> => {
  const data = await fs.readFile('./products.json', 'utf-8');

  const users: Product[] = JSON.parse(data);

  return users;
};

export default read;
