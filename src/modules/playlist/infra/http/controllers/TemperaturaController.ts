// import axios from 'axios';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import TemperaturaService from '../../../services/TemperaturaService';

class userController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(TemperaturaService);

    const { lat, lon } = request.params;
    // const data = await axios.get(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`,
    //   // 'https://api.openweathermap.org/data/2.5/weather?lat=-23.618866&lon=-46.697369&appid=1219c224afd0c7b6dc88b9bc702be0d2',
    // );
    // console.log(data.data);

    // console.log(lat, lon);

    const data = await createUser.execute({
      lat,
      lon,
    });
    return response.status(201).json(data);
  }
}

export default userController;
