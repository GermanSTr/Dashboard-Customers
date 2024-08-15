import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardMenu } from 'modules/menu';
import { Loader, MobileMenu } from '..';

import s from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <div className={s.layout}>
      <DashboardMenu />
      <MobileMenu />
      <div style={{ minHeight: '100vh' }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default SharedLayout;
