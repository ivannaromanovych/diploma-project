export interface IDescription {
  title: string;
  text: string;
}

export interface IProductDetailed {
  id: number,
  category: string,
  itemId: string,
  name: string,
  shortDescription: string,
  price: number,
  images: string[];
  description: IDescription[];
}
