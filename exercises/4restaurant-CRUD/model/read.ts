import fs from 'fs/promises';
import Restaurant from '../types/interfaces/Restaurant';

const read = async (): Promise<Restaurant[]> => {
  const data = await fs.readFile('./restaurants.json', 'utf-8');

  const users: Restaurant[] = JSON.parse(data);

  return users;
};

export default read;
