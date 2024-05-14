import { IAd } from "./ad";

export interface IGame {
  id?: string;
  name: string;
  image: string;
  description: string;
  categoryId: string;
  ads?: IAd[];
}
