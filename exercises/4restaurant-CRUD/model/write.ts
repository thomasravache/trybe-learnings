import fs from 'fs/promises';
import Product from '../types/interfaces/Product';

const write = async(data: Product[]): Promise<void> => {
  await fs.writeFile('./products.json', JSON.stringify(data));
};

export default write;
