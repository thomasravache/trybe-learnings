import UserModel from '../model';
import User from '../types/interfaces/User';

type createUserParams = {
  nome: string;
  email: string;
  senha: string;
};

const getAll = async (): Promise<User[]> => UserModel.read();

const getById = async (id: number): Promise<User> => {
  const users = await UserModel.read();

  const user: User | undefined = users.find((user) => user.id === id);

  if (!user) throw new Error('Usuário não encontrado');

  return user;
};

const create = async ({ nome, email, senha }: createUserParams ): Promise<User> => {
  const users = await UserModel.read();

  const emailAlreadyExists = users.some((user: User) => user.email === email);

  if (emailAlreadyExists) throw new Error('Usuário já cadastrado na plataforma');

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

  if (userIndex === -1) throw new Error('Usuário não encontrado');

  const newUsers = users.splice(userIndex, 1, editedUser);

  await UserModel.write(newUsers);

  return editedUser;
};

const removeUser = async (id: number): Promise<void> => {
  const users = await UserModel.read();

  const userIndex = users.findIndex((user: User) => user.id === id);

  if (userIndex === -1) throw new Error('Usuário não encontrado');

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
