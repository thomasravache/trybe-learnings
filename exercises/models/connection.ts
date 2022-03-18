import fs from 'fs/promises';
import { IDataBase } from '../types/interfaces';

export class DataBaseConnection<T> implements IDataBase<T> {
  private _filePath: string;

  constructor(filePath: string) {
    this._filePath = filePath;
  }

  public async read(): Promise<T[]> {
    const data = await fs.readFile(this._filePath, 'utf-8');
    const parsedData: T[] = await JSON.parse(data);

    return parsedData;
  }

  public async write(data: T[]): Promise<void> {
    await fs.writeFile(this._filePath, JSON.stringify(data));
  }
}
