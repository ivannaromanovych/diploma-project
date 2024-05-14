/* eslint-disable max-len */
import { FC } from 'react';
import { Button } from '~components/UI/button';
import { FavouriteButton } from '~components/UI/commonButtons/FavouriteButton';
import { IProductDetailed } from '~types/ProductDetailed';
import products from '~public/initial_data/products.json';
import { Description } from './Description';

type TProductInfo = { phone: IProductDetailed };

export const ProductInfo: FC<TProductInfo> = ({ phone: product }) => {
  const productNeeded = products.find(({ itemId }) => itemId === product.itemId);

  return (
    <>
      <section className="">
        <div className="flex justify-between">
          <h3 className="title-2 resp-[font/32/22] flex items-center justify-start">
            {product?.name}
          </h3>
        </div>
        <div className="text-s title-5 font-normal resp-[my/8/8] resp-[font/12/12]">
          <div className="text-gray-800 height text-secondary dark:text-dark-secondary">
            {product.shortDescription}
          </div>
        </div>

        <div className="flex-row resp-[pb/16/16]">
            <p className="title-3">{`₴${product.price}`}</p>
        </div>
        
        <div className="flex flex-row items-center resp-[gap-x/8/8] resp-[GB/32/32]">
          <Button isAdd productId={productNeeded?.id || 0}>
            {' '}
            Add to cart{' '}
          </Button>
          <FavouriteButton productId={productNeeded?.id || 0} />
        </div>

        <div className=" border-b-[1px] border-elements resp-[my/8/8]"></div>
        <Description description={product.description.slice(0, 2)} />
      </section>
    </>
  );
};
