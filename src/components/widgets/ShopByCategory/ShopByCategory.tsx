/* eslint-disable max-len */
import { FC } from 'react';
import furniture from './assets/furniture.jpeg';
import decor from './assets/decor.jpeg';
import tableware from './assets/tableware.jpeg';
import { Link } from 'react-router-dom';
import furnitureInfo from '~public/initial_data/furniture.json';
import decorInfo from '~public/initial_data/decor.json';
import tablewareInfo from '~public/initial_data/tableware.json';

const categories = [
  {
    title: 'Furniture',
    link: '/furniture',
    image: furniture,
    itemsCount: `${furnitureInfo.length}`,
  },

  {
    title: 'Decor',
    link: '/decor',
    image: decor,
    itemsCount: `${decorInfo.length}`,
  },

  {
    title: 'Tableware',
    link: '/tableware',
    image: tableware,
    itemsCount: `${tablewareInfo.length}`,
  },
];

export const ShopByCategory: FC = () => {
  return (
    <div className="resp-[py/40/40]">
      <h2 className="title-2 resp-[mb/24/24]">Shop by category</h2>
      <div className="resp-[grid-col/0,3/1] grid-cols-1 sm:grid-cols-3 justify-items-center resp-[gap-x/16/16] resp-[gap-y/32/32]">
        {categories.map(category => (
          <Link to={`${category.link}`} key={category.title}>
            <img
              src={category.image}
              alt={category.title}
              className="resp-[mb/24/24] transform hover:scale-105 transition-transform duration-300"
            />
            <h4 className="title-4 resp-[mb/4/4]">{category.title}</h4>
            <p className='dark:text-dark-secondary'>{`${category.itemsCount} models`}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
