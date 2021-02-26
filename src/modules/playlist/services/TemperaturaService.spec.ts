import 'reflect-metadata';
import FakeTemperatureRepository from '../repositories/fakes/FakeTemperaturaRepository';
import TemperaturaService from './TemperaturaService';

let temperatura: TemperaturaService;
let fakeTemperatureRepository: FakeTemperatureRepository;

describe('CreateUsersServices', (): void => {
  beforeEach(() => {
    fakeTemperatureRepository = new FakeTemperatureRepository();
    temperatura = new TemperaturaService(fakeTemperatureRepository);
  });

  it('must return classical music tracks', async () => {
    const data = await temperatura.execute({
      lat: '186186',
      lon: '78645639869',
    });

    expect(data).toEqual('tracks de música clássica');
  });
});
