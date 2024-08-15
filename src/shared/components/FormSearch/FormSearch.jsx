import { sprite } from 'shared/icons';
import s from './FormSearch.module.scss';

const FormSearch = () => {
  return (
    <form className={s.form}>
      <div className={s.formWrap}>
        <input
          className={s.formWrapSearch}
          type="text"
          placeholder="Search"
          name="search"
          required
        />
        <button type="submit" className={s.formWrapIcon}>
          <svg>
            <use href={sprite + '#icon-search'}></use>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default FormSearch;
