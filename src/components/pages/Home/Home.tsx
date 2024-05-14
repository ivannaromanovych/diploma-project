/* eslint-disable max-len */
import { FC } from 'react';

import { ProductsSlider } from '~components/widgets/ProductsSlider';
import { ShopByCategory } from '~components/widgets/ShopByCategory';
import products from '~public/initial_data/products.json';

type THomeProps = object;

export const Home: FC<THomeProps> = () => {
  return (
    <>
      <ProductsSlider
        sliderName="Brand new products"
        productsList={products}
      />
      <ShopByCategory />
      <ProductsSlider
        sliderName="Hot prices"
        productsList={products.slice(0, 10)}
      />
    </>
  );
};
