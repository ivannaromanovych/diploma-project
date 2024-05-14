import { FC } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '~components/pages/Layout';
import { Home } from '~components/pages/Home';
import { Cart } from '~components/pages/Cart';
import { Product } from '~components/widgets/ProductInfo';
import { Decor } from '~components/pages/Decor';
import { Tableware } from '~components/pages/Tableware';
import { PageNotFound } from '~components/pages/PageNotFound';
import { Favourites } from '~components/pages/Favourites';
import { Furniture } from '~components/pages/Furniture';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/furniture">
            <Route index element={<Furniture/>} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/decor">
            <Route index element={<Decor />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/tableware">
            <Route index element={<Tableware />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route
            path="/favourites"
            element={<Favourites/>}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
