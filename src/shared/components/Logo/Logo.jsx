import { sprite } from 'shared/icons';
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={s.logo}>
      <Link to="/" className={s.logoLink}>
        <svg>
          <use href={sprite + '#icon-logo'}></use>
        </svg>
        <div>
          Dashboard<span className={s.logoTextVersion}>v.01</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
