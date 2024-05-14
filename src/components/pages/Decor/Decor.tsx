import { FC } from 'react';
import { Paginator } from '~components/widgets/Paginator';
import itemArray from '~public/initial_data/products.json';

type TDecorProps = object;

export const Decor:FC<TDecorProps> = () => {
  const filteredArray = itemArray
    .filter((item) => item.category === 'decor');

  return (
    <Paginator itemArray={filteredArray} categoryTitle='Decor'/>
  );
};
