import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { sprite } from 'shared/icons';
import s from './LinkButton.module.scss';

const LinkButton = ({ title, className, to, icon, arrow }) => {
  return (
    <Link to={to} className={clsx(s.link, className && className)}>
      <div className={s.linkIconTitle}>
        <svg>
          <use href={sprite + icon}></use>
        </svg>
        <span>{title}</span>
      </div>
      <svg>
        <use href={sprite + arrow}></use>
      </svg>
    </Link>
  );
};

export default LinkButton;
