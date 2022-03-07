import UserModel from '../model';
import User from '../types/interfaces/User';
import StatusCodes from '../types/enums/statusCodes';
import userMainInfo from '../types/types/userMainInfo';
import domainError from '../types/types/domainError';

const generatedError = (message: string, statusCode: StatusCodes): domainError => {
  const error: any = new Error();
  error.domain = true;
  error.message = message;
  error.code = statusCode;

  return error;
};

const getAll = async (): Promise<User[]> => UserModel.read();

const getById = async (id: number): Promise<User> => {
  const users = await UserModel.read();

  const user: User | undefined = users.find((user) => user.id === id);

  if (!user) throw generatedError('Usuário não encontrado', StatusCodes.NOT_FOUND);

  return user;
};

const create = async ({ nome, email, senha }: userMainInfo ): Promise<User> => {
  const users = await UserModel.read();

  const emailAlreadyExists = users.some((user: User) => user.email === email);

  if (emailAlreadyExists) throw generatedError('Usuário já cadastrado na plataforma', StatusCodes.CONFLIT);

  const maxId = users
    .map((user: User) => user.id)
    .reduce((a, b) => Math.max(a, b), 0);
  
  const createdUser: User = {
    id: maxId + 1,
    nome,
    email,
    senha,
  };

  await UserModel.write([ ...users, createdUser ]);

  return createdUser;
};

const editUser = async (editedUser: User): Promise<User> => {
  const users = await UserModel.read();

  const userIndex = users.findIndex((user: User) => user.id === editedUser.id);
  if (userIndex === -1) throw generatedError('Usuário não encontrado', StatusCodes.NOT_FOUND);

  const emailAlreadyExists = users.some((user: User) => user.email === editedUser.email);
  if (emailAlreadyExists) throw generatedError('Usuário com e-mail já cadastrado na plataforma', StatusCodes.CONFLIT);

  users.splice(userIndex, 1, editedUser);

  await UserModel.write(users);

  return editedUser;
};

const removeUser = async (id: number): Promise<void> => {
  const users = await UserModel.read();

  const userIndex = users.findIndex((user: User) => user.id === id);

  if (userIndex === -1) throw generatedError('Usuário não encontrado', StatusCodes.NOT_FOUND);

  const newUsers = users.splice(userIndex, 1);

  await UserModel.write(newUsers);
};

const UserService = {
  getAll,
  getById,
  create,
  editUser,
  removeUser,
};

export default UserService;
