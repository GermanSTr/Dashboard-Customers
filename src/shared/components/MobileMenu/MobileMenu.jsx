import { slide as Menu } from 'react-burger-menu';
import { LinkButton, Logo, UserName } from 'shared/components';
import { sprite } from 'shared/icons';
import { DashboardMenuData } from '../../../modules/menu/components/data';

import './MobileMenu.scss';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="div">
      <Menu
        onClose={() => setIsOpenMenu(false)}
        onOpen={() => setIsOpenMenu(true)}
        isOpen={isOpenMenu}
      >
        <div className={'menu'}>
          <div>
            <Logo />
            <div className={'menuDashboard'}>
              <svg>
                <use href={sprite + '#icon-key-square'}></use>
              </svg>
              <p>Dashboard</p>
            </div>
            <ul className={'menuList'}>
              {DashboardMenuData.map(({ id, title, icon, to, icon_arrow }) => (
                <li key={id}>
                  <LinkButton
                    title={title}
                    icon={icon}
                    to={to}
                    arrow={icon_arrow}
                  />
                </li>
              ))}
            </ul>
          </div>
          <UserName />
        </div>
      </Menu>
    </div>
  );
};

export default MobileMenu;
