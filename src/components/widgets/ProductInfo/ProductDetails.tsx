/* eslint-disable no-console */
/* eslint-disable max-len */
import { FC } from 'react';
import { PhotoSwipe } from './Description/PhotoSwipe';
import { Link, useNavigate, useParams } from 'react-router-dom';
import products from '~public/initial_data/products.json';
import furniture from '~public/initial_data/furniture.json';
import decor from '~public/initial_data/decor.json';
import { IProductDetailed } from '~types/ProductDetailed';
import { ProductsSlider } from '../ProductsSlider';
import { ProductInfo } from './Description/ProductInfo';

type TProductProps = object;
const defaultProduct = {
  id: 0,
  name: 'Product name',
  description: [
    {
      title: 'Product description',
      text: 'Product description text',
    }
  ],
  shortDescription: 'Product short description',
  price: 100,
  images: [
    'src/assets/images/product-1.jpg',
    'src/assets/images/product-2.jpg',
    'src/assets/images/product-3.jpg',
  ],
  category: 'furniture',
  itemId: '1',
};

export const Product: FC<TProductProps> = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const category = products.find(product => product.itemId === productId)?.category;
  let product: IProductDetailed | null = defaultProduct;
  switch (category) {
    case 'furniture':
      product = furniture.find(product => product.itemId === productId) as IProductDetailed;
      break;
    case 'decor':
      product = decor.find(product => product.itemId === productId) as IProductDetailed;
      break;
    case 'tableware':
      product = decor.find(product => product.itemId === productId) as IProductDetailed;
      break;
  }

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex flex-row gap-x-[8px] pt-[24px]">
        <Link to={`/`}>
          <button className="flex flex-row items-center gap-[4px]">
            <img src="src/assets/icons/home.svg" alt="home button" />
          </button>
        </Link>
        <div>
          <img
            src="src/assets/icons/arrow-right.svg"
            alt="arrow right button"
          />
        </div>
        <Link to={`/${category}`}>
          <button className="flex flex-row items-center gap-[4px]">
            <p className="title-5">{category}</p>
          </button>
        </Link>
        <img src="src/assets/icons/arrow-right.svg" alt="arrow right button" />
        <div>{product.itemId}</div>
      </div>
      <div className="resp-[pt/40/40] resp-[pb/16/16]">
        <button
          className="flex flex-row items-center gap-[4px]"
          onClick={handleGoBack}
        >
          <img src="src/assets/icons/arrow-left.svg" alt="back button" />
          Back
        </button>
      </div>

      <div className="resp-[grid-col/0,3/1] grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[65px]">
        <PhotoSwipe product={product} images={product.images} />
        <ProductInfo phone={product} />
      </div>

      <ProductsSlider sliderName='You may also like' productsList={products} />
    </div>
  );
};
