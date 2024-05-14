import { FC } from 'react';
import { Paginator } from '~components/widgets/Paginator';
import itemArray from '~public/initial_data/products.json';

type TTablewareProps = object;

export const Tableware:FC<TTablewareProps> = () => {
  const filteredArray = itemArray
    .filter((item) => item.category === 'tableware');

  return (
    <Paginator itemArray={filteredArray} categoryTitle='Tableware'/>
  );
};
