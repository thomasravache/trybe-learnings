import { Router, Request, Response, NextFunction } from 'express';
import BlogPostService from '../service/BlogPostService';
import StatusCodes from '../types/enums/statusCodes';
import blogPostMainInfo from '../types/types/BlogPostMainInfo';
import blogPostSchema from './schemas/blogPostSchema';

const blogPostRoutes = Router();

const validatePost = (body: blogPostMainInfo): void => {
  const { error } = blogPostSchema.validate(body);

  if (error) throw error;
};

blogPostRoutes.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const blogPosts = await BlogPostService.getAll();

  return res.status(StatusCodes.OK).json(blogPosts);
});

blogPostRoutes.get('/search', async (req: Request, res: Response) => {
    const { term }: any = req.query;

    const searchedPosts = await BlogPostService.search(term);

    return res.status(StatusCodes.OK).json(searchedPosts);
});

blogPostRoutes.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await BlogPostService.getById(parseInt(id, 10));

    return res.status(StatusCodes.OK).json(user);
  } catch (e) {
    return next(e);
  }
});

blogPostRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newPost: blogPostMainInfo = req.body;

  try {
    validatePost(newPost);

    const createdPost = await BlogPostService.create(newPost);

    return res.status(StatusCodes.CREATED).json(createdPost);
  } catch (e) {
    return next(e);
  }
});

blogPostRoutes.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const blogPostNewInfo: blogPostMainInfo = req.body;

  try {
    validatePost(blogPostNewInfo);
    const editedPost = await BlogPostService.editPost({ id: parseInt(id, 10), ...blogPostNewInfo });

    return res.status(StatusCodes.OK).json(editedPost);
  } catch(e) {
    return next(e);
  }
});

blogPostRoutes.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    await BlogPostService.removePost(parseInt(id, 10));

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch(e) {
    return next(e);
  }
});


export default blogPostRoutes;
