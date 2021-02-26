import IResponse from '../dtos/idata';

interface Idata {
  lat: string;
  lon: string;
}

export default interface ITemperatureRepository {
  search(data: Idata): Promise<IResponse>;
}
