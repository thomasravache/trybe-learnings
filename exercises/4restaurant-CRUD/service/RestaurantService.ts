import RestaurantModel from '../model';
import Restaurant from '../types/interfaces/Restaurant';
import StatusCodes from '../types/enums/statusCodes';
import restaurantMainInfo from '../types/types/restaurantMainInfo';
import { generatedError } from '../functions';

const getAll = async (): Promise<Restaurant[]> => RestaurantModel.read();

const getById = async (id: number): Promise<Restaurant> => {
  const restaurants = await RestaurantModel.read();

  const restaurant: Restaurant | undefined = restaurants.find((restaurant) => restaurant.id === id);

  if (!restaurant) throw generatedError('Restaurante não encontrado', StatusCodes.NOT_FOUND);

  return restaurant;
};

const create = async ({ nome, tipoComida, abertura, fechamento }: restaurantMainInfo ): Promise<Restaurant> => {
  const restaurants = await RestaurantModel.read();

  const maxId = restaurants
    .map((restaurant: Restaurant) => restaurant.id)
    .reduce((a, b) => Math.max(a, b), 0);
  
  const createdRestaurant: Restaurant = {
    id: maxId + 1,
    nome,
    tipoComida,
    abertura,
    fechamento,
  };

  await RestaurantModel.write([ ...restaurants, createdRestaurant ]);

  return createdRestaurant;
};

const editRestaurant = async (editedRestaurant: Restaurant): Promise<Restaurant> => {
  const restaurants = await RestaurantModel.read();

  const restaurantIndex = restaurants.findIndex((restaurant: Restaurant) => restaurant.id === editedRestaurant.id);
  if (restaurantIndex === -1) throw generatedError('Restaurante não encontrado', StatusCodes.NOT_FOUND);

  restaurants.splice(restaurantIndex, 1, editedRestaurant);

  await RestaurantModel.write(restaurants);

  return editedRestaurant;
};

const removeRestaurant = async (id: number): Promise<void> => {
  const restaurants = await RestaurantModel.read();

  const restaurantIndex = restaurants.findIndex((restaurant: Restaurant) => restaurant.id === id);

  if (restaurantIndex === -1) throw generatedError('Restaurante não encontrado', StatusCodes.NOT_FOUND);

  restaurants.splice(restaurantIndex, 1);

  await RestaurantModel.write(restaurants);
};

const openedRestaurants = async (): Promise<Restaurant[]> => {
  const restaurants = await RestaurantModel.read();
  const actualHour = new Date().getHours();
  console.log(actualHour);
  const opened = restaurants
    .filter(({ abertura, fechamento }: Restaurant) => actualHour >= abertura && actualHour <= fechamento);

  return opened;
};

const RestaurantService = {
  getAll,
  getById,
  create,
  editRestaurant,
  removeRestaurant,
  openedRestaurants,
};

export default RestaurantService;
