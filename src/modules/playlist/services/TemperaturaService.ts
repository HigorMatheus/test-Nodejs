import { inject, injectable } from 'tsyringe';

import ITemperatureRepository from '../repositories/ITemperatureRepository';

interface ISarch {
  lat: string;
  lon: string;
}

@injectable()
class TemperaturaService {
  constructor(
    @inject('Test')
    private temperatureRepository: ITemperatureRepository,
  ) {}

  public async execute({ lat, lon }: ISarch): Promise<string> {
    const temperature = await this.temperatureRepository.search({ lon, lat });
    const tempK = temperature.main.temp;

    const temp = tempK.toFixed();

    const graus = Number(temp) - 273.15;
    const tempAtual = graus.toPrecision(2);

    if (Number(tempAtual) > 32) return 'tracks para festa';

    if (Number(tempAtual) >= 22 && Number(tempAtual) <= 32)
      return 'tracks para pop';
    if (Number(tempAtual) >= 10 && Number(tempAtual) < 22)
      return 'tracks para rock';
    if (Number(tempAtual) < 10) return 'tracks de música clássica';
    return '';
  }
}

export default TemperaturaService;
