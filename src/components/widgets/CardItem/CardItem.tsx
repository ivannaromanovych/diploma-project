/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FavouriteButton } from '~components/UI/commonButtons/FavouriteButton';
import { Button } from '~components/UI/button';
import { IProduct } from '~types/Product';

type CardItemProps = {
  product: IProduct;
};

export const CardItem: React.FC<CardItemProps> = ({ product }) => {
  return (
    <div className="resp-[px/32/32] resp-[py/32/32] resp-[w-max/272/288] bg-[white] dark:bg-dark-surface-1 border-[1px] border-elements dark:border-dark-surface-2 cursor-pointer hover:shadow-md transition-shadow duration-300">
      <Link to={`/${product.category}/${product.itemId}`}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="resp-[h-max/196/129] resp-[pb/8/8] mx-auto"
          />
        </div>
        <div className="resp-[mb/8/8] flex justify-between">
          <div className="resp-[mb/8/8] flex-column gap-8px">
            <p className="title-5 h-[2em]">{product.name}</p>
            <p className="title-6 h-[4em]">{product.shortDescription}</p>
          </div>
          <div className="text-right resp-[gap/8/8]">
            <p className="title-4">{`₴${product.price}`}</p>
          </div>
        </div>
        <div className="resp-[my/8/8]"></div>
      </Link>

      <div className="flex justify-between gap-x-[8px]">
        <Button isAdd productId={product.id} > Add to cart </Button>
        <FavouriteButton className='w-[60px]' productId={product.id} />
      </div>
    </div>
  );
};
