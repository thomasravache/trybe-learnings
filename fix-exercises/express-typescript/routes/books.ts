import { Router, Request, Response } from 'express';
import Book from '../interfaces/Book';
import { read, write } from '../functions';
import StatusCodes from '../enums/books';
import validationBook from '../middlewares/validationBook';

const router = Router();

const NotFoundMessage = 'Livro não encontrado.';

router.get('/books', async (req: Request, res: Response) => {
  const books = await read();
  return res.status(StatusCodes.OK).json(books);
});

router.get('/books/:isbn', async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const books = await read();

  const book = books.find((book) => book.isbn === isbn);

  if (!book) return res.status(StatusCodes.NOT_FOUND).json({ message: NotFoundMessage });

  return res.status(StatusCodes.OK).json(book);
});

router.post('/books', validationBook, async (req: Request, res: Response) => {
  const book: Book = req.body;

  const books = await read();

  books.push(book);

  await write(books);

  return res.status(StatusCodes.CREATED).json(book);
});

router.put('/books/:isbn', validationBook, async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const editedBook: Book = req.body;

  const books = await read();

  const bookIndex = books.findIndex((book: Book) => book.isbn === isbn);

  if (bookIndex === -1) return res.status(StatusCodes.NOT_FOUND).send(NotFoundMessage);

  books.splice(bookIndex, 1, editedBook);

  await write(books);

  return res.status(StatusCodes.OK).json(editedBook);
});

router.delete('/books/:isbn', async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const books = await read();

  const bookIndex = books.findIndex((book: Book) => book.isbn === isbn);

  if (bookIndex === -1) return res.status(StatusCodes.NOT_FOUND).send(NotFoundMessage);

  const actualizatedBooks = books.filter((book: Book) => book.isbn !== isbn);

  await write(actualizatedBooks);

  return res.status(StatusCodes.NO_CONTENT).end();
});

export default router;
