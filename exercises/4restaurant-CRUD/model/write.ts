import fs from 'fs/promises';
import Restaurant from '../types/interfaces/Restaurant';

const write = async(data: Restaurant[]): Promise<void> => {
  await fs.writeFile('./restaurants.json', JSON.stringify(data));
};

export default write;
