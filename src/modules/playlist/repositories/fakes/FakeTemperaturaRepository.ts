import IResponse from '@modules/playlist/dtos/idata';

import IUserRepository from '../ITemperatureRepository';

interface ISarch {
  lat: string;
  lon: string;
}
class FakeTemperatureRepository implements IUserRepository {
  async search({ lat, lon }: ISarch): Promise<IResponse> {
    const data = {
      coord: {
        lon,
        lat,
      },
      main: {
        temp: 10,
      },
    };
    return data;
  }
}

export default FakeTemperatureRepository;
