export interface User {
  _id: string;
  type: string,
  name: string,
  adress: string,
  city: string,
  cp: string,
  mail: string,
  telf: string,
  delivery: boolean,
  premiumUser: boolean,
  password: string,
  finalValuation: number,
  products: Product[],
  valuations: [],
}

export interface Product {
  _id: string;
  type: string,
  name: string,
  adress: string,
  city: string,
  cp: string,
  mail: string,
  telf: string,
  delivery: boolean,
  premiumUser: boolean,
  password: string,
  finalValuation: number,
}
