import s from './StatusUser.module.scss';

const StatusUser = ({ status }) => {
  return (
    <div>
      {status === 'Active' ? (
        <div className={s.styleActive}>{status}</div>
      ) : (
        <div className={s.styleInactive}>{status}</div>
      )}
    </div>
  );
};

export default StatusUser;
