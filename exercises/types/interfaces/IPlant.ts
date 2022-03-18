export interface IPlant {
  id: string,
  breed: string,
  needsSun: Boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

export interface IPlantRequest extends Omit<IPlant, 'id'> {
  id?: string;
}