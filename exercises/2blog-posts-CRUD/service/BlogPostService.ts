import BlogPostModel from '../model';
import BlogPost from '../types/interfaces/BlogPost';
import StatusCodes from '../types/enums/statusCodes';
import blogPostMainInfo from '../types/types/BlogPostMainInfo';
import domainError from '../types/types/domainError';

const generatedError = (message: string, statusCode: StatusCodes): domainError => {
  const error: any = new Error();
  error.domain = true;
  error.message = message;
  error.code = statusCode;

  return error;
};

const getAll = async (): Promise<BlogPost[]> => BlogPostModel.read();

const getById = async (id: number): Promise<BlogPost> => {
  const blogPosts = await BlogPostModel.read();

  const blogPost: BlogPost | undefined = blogPosts.find((blogPost) => blogPost.id === id);

  if (!blogPost) throw generatedError('Post não encontrado', StatusCodes.NOT_FOUND);

  return blogPost;
};

const create = async ({ titulo, autor, categoria, criacao }: blogPostMainInfo ): Promise<BlogPost> => {
  const blogPosts = await BlogPostModel.read();

  const maxId = blogPosts
    .map((blogPost: BlogPost) => blogPost.id)
    .reduce((a, b) => Math.max(a, b), 0);
  
  const createdPost: BlogPost = {
    id: maxId + 1,
    titulo,
    autor,
    categoria,
    criacao,
  };

  await BlogPostModel.write([ ...blogPosts, createdPost ]);

  return createdPost;
};

const editPost = async (editedPost: BlogPost): Promise<BlogPost> => {
  const blogPosts = await BlogPostModel.read();

  const blogPostIndex = blogPosts.findIndex((blogPost: BlogPost) => blogPost.id === editedPost.id);
  if (blogPostIndex === -1) throw generatedError('Post não encontrado', StatusCodes.NOT_FOUND);

  blogPosts.splice(blogPostIndex, 1, editedPost);

  await BlogPostModel.write(blogPosts);

  return editedPost;
};

const removePost = async (id: number): Promise<void> => {
  const blogPosts = await BlogPostModel.read();

  const blogPostIndex = blogPosts.findIndex((blogPost: BlogPost) => blogPost.id === id);

  if (blogPostIndex === -1) throw generatedError('Post não encontrado', StatusCodes.NOT_FOUND);

  blogPosts.splice(blogPostIndex, 1);

  await BlogPostModel.write(blogPosts);
};

const search = async (queryParam: any): Promise<BlogPost[]> => {
  const blogPosts = await BlogPostModel.read();

  const filteredPosts = blogPosts.filter(({ autor, categoria, criacao }: BlogPost) => {
    return autor.includes(queryParam) || categoria.includes(queryParam) || criacao === queryParam
  });

  return filteredPosts;
};

const BlogPostService = {
  getAll,
  getById,
  create,
  editPost,
  removePost,
  search,
};

export default BlogPostService;
