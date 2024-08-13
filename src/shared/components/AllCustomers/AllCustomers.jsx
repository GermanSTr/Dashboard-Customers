import s from './AllCustomers.module.scss';

const AllCustomers = () => {
  return (
    <div className={s.content}>
      <h2 className={s.contentTitle}>All Customers</h2>
      <p className={s.contentText}>Active Members</p>
      <div className={s.inputDiv}>
        <input className={s.inputSearch} type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default AllCustomers;
