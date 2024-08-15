import React from 'react';
import s from './CustomersTable.module.scss';
import { customersData } from './data';
import { StatusUser } from '..';

const CustomersTable = () => {
  return (
    <div className={s.gridContainerName}>
      <div className={s.gridItemHeader}>
        Customer <br className={s.gridItemHeaderNone} />
        Name
      </div>
      <div className={s.gridItemHeader}>Company</div>
      <div className={s.gridItemHeader}>
        Phone <br className={s.gridItemHeaderNone} />
        Number
      </div>
      <div className={s.gridItemHeaderDesktop}>Email</div>
      <div className={s.gridItemHeaderDesktop}>Country</div>
      <div className={s.gridItemHeader}>Status</div>

      {customersData.map(
        ({ id, nameUser, company, phone, email, country, isStatus }) => (
          <React.Fragment key={id}>
            <div className={s.gridItem}>{nameUser}</div>
            <div className={s.gridItem}>{company}</div>
            <div className={s.gridItem}>{phone}</div>
            <div className={s.gridItemDesktop}>{email}</div>
            <div className={s.gridItemDesktop}>{country}</div>
            <div className={s.gridItemStatus}>
              <StatusUser status={isStatus} />
            </div>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default CustomersTable;
