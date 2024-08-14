import s from './AllCustomers.module.scss';
import { CustomersTable, FormSearch, Pagination } from '..';

const AllCustomers = () => {
  return (
    <div className={s.content}>
      <div className={s.contentWrap}>
        <div className={s.contentDiv}>
          <h2 className={s.contentDivTitle}>All Customers</h2>
          <p className={s.contentDivText}>Active Members</p>
        </div>
        <FormSearch />
      </div>
      <CustomersTable />
      <div className={s.contentFooter}>
        <p className={s.contentDesc}>Showing data 1 to 8 of 256K entries</p>
        <Pagination />
      </div>
    </div>
  );
};

export default AllCustomers;
