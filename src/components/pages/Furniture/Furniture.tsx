import { FC } from 'react';
import { Paginator } from '~components/widgets/Paginator';
import itemArray from '~public/initial_data/products.json';

type TFurnitureProps = object;

export const Furniture:FC<TFurnitureProps> = () => {
  const filteredArray = itemArray
    .filter((item) => item.category === 'furniture');

  return (
    <Paginator itemArray={filteredArray} categoryTitle='Furniture'/>
  );
};
