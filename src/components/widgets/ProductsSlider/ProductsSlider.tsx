import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { CardItem } from '../CardItem';
import { IProduct } from '~types/Product';

type TProductsSliderProps = {
  productsList: IProduct[];
  sliderName: string;
};

export const ProductsSlider: FC<TProductsSliderProps> = ({
  productsList = [],
  sliderName = 'Random slider name',
}) => {
  const buttonStyles = `resp-[width/32/32] resp-[height/32/32]
    flex items-center justify-center border
    dark:text-gray-white disabled:bg-none
    disabled:border-elements disabled:dark:border-dark-elements
    disabled:bg-none disabled:border-icons
    disabled:dark:border-none disabled:dark:bg-dark-elements
    hover:border-primary hover:text-gray-white
    dark:hover:bg-dark-icons
    disabled:fill-icons
    dark:fill-dark-white dark:disabled:fill-dark-icons`;
  const buttonLeftStyles = `swipe-prod-left ${buttonStyles}`;
  const buttonRightStyles = `swipe-prod-right ${buttonStyles}`;

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={16}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
      }}
      autoHeight
      navigation={{ nextEl: '.swipe-prod-right', prevEl: '.swipe-prod-left' }}
      modules={[Navigation]}
      className="mySwiper !flex !overflow-y-visible
      flex-col-reverse resp-[gap-y/24/24] !resp-[py/40/28]"
    >
      <div className="flex justify-between items-center resp-[gap-x/72/72]">
        <p className="title-2">{sliderName}</p>
        <div className="flex resp-[gap/16/16]">
          <button
            type="button"
            aria-label="arrow-left"
            className={buttonLeftStyles}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4715 3.52861C10.2111 3.26826 9.78903
                  3.26826 9.52868 3.52861L5.52868
                  7.52861C5.26833 7.78896
                  5.26833 8.21107 5.52868
                  8.47141L9.52868 12.4714C9.78903
                  12.7318 10.2111 12.7318 10.4715
                  12.4714C10.7318 12.2111 10.7318 11.789
                  10.4715 11.5286L6.94289 8.00001L10.4715
                  4.47141C10.7318 4.21107 10.7318 3.78896
                  10.4715 3.52861Z"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="arrow-right"
            className={buttonRightStyles}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.52876 3.52861C5.78911 3.26826 6.21122
                  3.26826 6.47157 3.52861L10.4716 7.52861C10.7319
                  7.78896 10.7319 8.21107 10.4716 8.47141L6.47157
                  12.4714C6.21122 12.7318 5.78911 12.7318 5.52876
                  12.4714C5.26841 12.2111 5.26841 11.789 5.52876
                  11.5286L9.05735 8.00001L5.52876 4.47141C5.26841
                  4.21107 5.26841 3.78896 5.52876 3.52861Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {productsList.map(product => (
        <SwiperSlide key={product.itemId} className="resp-[w-max/272/212]">
          <CardItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
