import { container } from 'tsyringe';

import ITemperatureRepository from '@modules/playlist/repositories/ITemperatureRepository';
import TemperatureRepository from '@modules/playlist/infra/typeorm/repositories/TemperatureRepository';

container.registerSingleton<ITemperatureRepository>(
  'Test',
  TemperatureRepository,
);
