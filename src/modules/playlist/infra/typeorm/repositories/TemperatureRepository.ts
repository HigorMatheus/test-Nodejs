import IResponse from '@modules/playlist/dtos/idata';
import ITemperatureRepository from '@modules/playlist/repositories/ITemperatureRepository';

import axios from 'axios';

interface IGetTemperature {
  lat: string;
  lon: string;
}
class TemperatureRepository implements ITemperatureRepository {
  public async search({ lat, lon }: IGetTemperature): Promise<IResponse> {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`,
    );

    return response.data;
  }
}

export default TemperatureRepository;
