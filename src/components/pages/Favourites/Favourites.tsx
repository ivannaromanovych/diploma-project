/* eslint-disable max-len */
import { FC, useContext, useEffect } from 'react';
import { ThemeContext } from '~context/Theme';
import { IProduct } from '~types/Product';
import { Paginator } from '~components/widgets/Paginator';
import { Link } from 'react-router-dom';

export const Favourites: FC = () => {
  const { setFavoriteCount } = useContext(ThemeContext);

  const favoritesJSON = localStorage.getItem('favorites');
  const parsedFavorites: IProduct[] = favoritesJSON
    ? JSON.parse(favoritesJSON)
    : [];

  useEffect(() => {
    setFavoriteCount(parsedFavorites.length);
  }, []);

  return (
    <>
      {parsedFavorites.length ?
        (<Paginator itemArray={parsedFavorites} categoryTitle='Favorites' />) :
        (<div className="flex flex-col resp-[py/40/40] items-center justify-center resp-[gap-y/32/32]">
          <p className="pt-4 title-1 text-center text-secondary dark:text-dark-secondary">
            You do not have favourite
            <br />
            products yet
          </p>
          <Link
            to="/"
            className="button-add resp-[w-max/300/300] p-5 flex justify-center"
          >
            Go to the Home page
          </Link>
        </div>)
      }
    </>
  );
};
