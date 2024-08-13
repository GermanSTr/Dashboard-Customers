import { Navigate, Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'shared/components';
import {
  CustomersPage,
  HelpPage,
  IncomePage,
  ProductPage,
  PromotePage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<SharedLayout />}>
        <Route index element={<CustomersPage />} />
        <Route path={'/product'} element={<ProductPage />} />
        <Route path={'/income'} element={<IncomePage />} />
        <Route path={'/customers'} element={<CustomersPage />} />
        <Route path={'/promote'} element={<PromotePage />} />
        <Route path={'/help'} element={<HelpPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}

export default App;
