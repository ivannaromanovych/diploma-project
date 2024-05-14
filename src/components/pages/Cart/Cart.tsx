import { FC } from 'react';
import { CartCheckoutSection } from '~components/widgets/CartCheckoutSection';
import { ProductsSlider } from '~components/widgets/ProductsSlider';
import products from '~public/initial_data/products.json';
import { IProduct } from '~types/Product';

export const Cart: FC = () => {
  const itemsCartJSON = localStorage.getItem('itemsToBuy');
  const itemsCart: IProduct[] = itemsCartJSON ? JSON.parse(itemsCartJSON) : [];

  return <>
    <CartCheckoutSection />
    <ProductsSlider
      sliderName="Other products you may like"
      productsList={products.filter(product => !itemsCart.map(p => p.id).includes(product.id)).slice(0, 10)}
    />
  </>
};
