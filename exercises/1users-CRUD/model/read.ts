import fs from 'fs/promises';
import User from '../types/interfaces/User';

const read = async (): Promise<User[]> => {
  const data = await fs.readFile('./users.json', 'utf-8');

  const users: User[] = JSON.parse(data);

  return users;
};

export default read;
