/* eslint-disable max-len */
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Description } from './Description';
import { IProductDetailed } from '~types/ProductDetailed';

type Props = {
  product: IProductDetailed;
  images: string[];
};

export const PhotoSwipe: React.FC<Props> = ({ product, images }) => {
  const [selectImg, setSelectImg] = useState<string>(images[0]);

  useEffect(() => {
    setSelectImg(images[0]);
  }, [images]);

  return (
    <div className='flex flex-col resp-[gap-y/24/24]'>
      <div className="flex justify-end sm:flex-row-reverse flex-col sm:resp-[gap-x/16/16] resp-[gap-y/27/0]">
        <div className="flex items-start grow-1 justify-center ">
          <img
            src={selectImg}
            alt={selectImg}
            className="object-contain resp-[width/370/275] resp-[height/370/275]"
          />
        </div>
        <div className="inline-flex sm:flex-col sm:justify-start sm:resp-[gap-y/8/8] resp-[gap-x/8/8] justify-center">
          {images.map((imgLink, index) => (
            <button
              key={index}
              type="button"
              className={classNames(
                'border-[1px] border-elements dark:border-dark-surface-2 resp-[width/80/50] resp-[height/80/51]',
                {
                  'border-[1px] border-primary dark:border-dark-surface-2 resp-[width/80/50] resp-[height/80/51]':
                    imgLink === selectImg,
                },
              )}
              onClick={() => setSelectImg(imgLink)}
            >
              <img
                src={imgLink}
                alt={'name'}
                className="mx-auto resp-[height/64/40]"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="hidden sm:contents">
        <Description description={product.description.slice(2)} />
      </div>
    </div>
  );
};
