import fs from 'fs/promises';
import BlogPost from '../types/interfaces/BlogPost';

const read = async (): Promise<BlogPost[]> => {
  const data = await fs.readFile('./blogPost.json', 'utf-8');

  const users: BlogPost[] = JSON.parse(data);

  return users;
};

export default read;
