import { AllCustomers } from 'shared/components';
import s from './CustomersPage.module.scss';

const CustomersPage = () => {
  return (
    <div className={s.section}>
      <h1 className={s.sectionTitle}>Hello Evano 👋🏼,</h1>
      <div className={s.sectionBlock}>
        <AllCustomers />
      </div>
    </div>
  );
};

export default CustomersPage;
