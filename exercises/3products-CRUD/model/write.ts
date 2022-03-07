import fs from 'fs/promises';
import BlogPost from '../types/interfaces/BlogPost';

const write = async(data: BlogPost[]): Promise<void> => {
  await fs.writeFile('./blogPost.json', JSON.stringify(data));
};

export default write;
