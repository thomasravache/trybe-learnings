import fs from 'fs/promises';
import User from '../types/interfaces/User';

const write = async(data: User[]): Promise<void> => {
  await fs.writeFile(`${__dirname}/users.json`, JSON.stringify(data));
};

export default write;
