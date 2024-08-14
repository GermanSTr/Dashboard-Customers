import { sprite } from 'shared/icons';
import s from './Pagination.module.scss';

const Pagination = () => {
  return (
    <ul className={s.pagination}>
      <li className={s.disabled}>
        <a href="#">
          <svg width={8} height={12}>
            <use href={sprite + '#icon-left'}></use>
          </svg>
        </a>
      </li>
      <li className={s.active}>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li className={s.disabled}>
        <a href="#">...</a>
      </li>
      <li>
        <a href="#">40</a>
      </li>
      <li>
        <a href="#">
          <svg width={8} height={12}>
            <use href={sprite + '#icon-right'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
