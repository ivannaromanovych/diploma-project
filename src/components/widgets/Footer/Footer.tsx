/* eslint-disable max-len */
import { FC } from 'react';

import { Logo } from '~components/UI/logo';

import { handleBackToTop } from './utils/handleScrollTo';
import { ArrowButton } from '~components/UI/commonButtons/ArrowButton';

type TFooterProps = object;

export const Footer: FC<TFooterProps> = () => {
  return (
    <footer className="py-[32px] relative after:absolute after:left-0 after:right-0 after:top-0 after:h-[1.5px] mt-[40px] after:bg-elements dark:after:bg-dark-elements">
      <div className="flex flex-col sm:flex-row sm:justify-between container-lg sm:items-center">
        <Logo position="footer" />

        <nav className="pt-[32px] pb-[32px] sm:pt-0 sm:pb-0">
          <ul className="flex flex-col sm:flex-row sm:justify-between sm:resp-[gap-x/14/14] gap-y-[16px] sm:gap-y-0 sm-tablet:resp-[gap-x/110/110] font-extrabold resp-[font/12/12] resp-[line-height/11/12] dark:text-dark-white">
            <li className="uppercase flex-grow">
              <a href="#">Романович Іванна</a>
            </li>
          </ul>
        </nav>

        <div className="text-center">
          <a
            onClick={handleBackToTop}
            className="font-semibold cursor-pointer dark:text-dark-secondary"
          >
            <span className='flex items-center gap-[16px]'>
              Back to top
              <ArrowButton direction="left" disabled={false} rotate/>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
