export interface IDataBase<T> {
  read(): Promise<T[]>;
  write(data: T[]): Promise<void>;
}
