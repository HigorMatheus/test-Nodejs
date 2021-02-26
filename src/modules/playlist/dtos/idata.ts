export default interface IResponse {
  coord: {
    lon: string;
    lat: string;
  };
  main: {
    temp: number;
  };
}
