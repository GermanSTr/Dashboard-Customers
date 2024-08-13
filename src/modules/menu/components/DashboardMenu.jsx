import { LinkButton, Logo, UserName } from 'shared/components';
import { sprite } from 'shared/icons';
import { DashboardMenuData } from './data';

import s from './DashboardMenu.module.scss';

const DashboardMenu = () => {
  return (
    <div className={s.menu}>
      <div>
        <Logo />
        <div className={s.menuDashboard}>
          <svg>
            <use href={sprite + '#icon-key-square'}></use>
          </svg>
          <p>Dashboard</p>
        </div>
        <ul className={s.menuList}>
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
  );
};

export default DashboardMenu;
