/* eslint-disable max-len */
import { FC } from 'react';
import { IProduct } from '~types/Product';
import { CardItem } from '../CardItem';

type TProductsListProps = {
  productsList?: IProduct[];
};

const randomProducts = [
  {
    "id": 1,
    "category": "furniture",
    "shortDescription": "wooden and fabric armchair",
    "itemId": "antey",
    "name": "Antey",
    "price": 2900,
    "image": "img/furniture/antey/1.jpeg"
  },
  {
    "id": 2,
    "category": "furniture",
    "shortDescription": "wooden and epoxy coffee table",
    "itemId": "archipelago",
    "name": "Archipelago",
    "price": 2000,
    "image": "img/furniture/archipelago/1.jpg"
  },
  {
    "id": 3,
    "category": "furniture",
    "shortDescription": "wooden and leather chair",
    "itemId": "aurora",
    "name": "Aurora",
    "price": 2500,
    "image": "img/furniture/aurora/1.jpg"
  }
];

export const ProductsList: FC<TProductsListProps> = ({
  productsList = randomProducts,
}) => {
  return (
    <section className='container-lg grid sm:grid-cols-2 sm-tablet:grid-cols-3 lg:grid-cols-4 resp-[gap-y/40/40] resp-[gap-x/16/16]'>
      {productsList.map(product => (
        <CardItem product={product} />
      ))}
    </section>
  );
};
