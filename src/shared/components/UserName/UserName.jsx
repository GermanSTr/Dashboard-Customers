import { Evano } from 'shared/images';
import s from './UserName.module.scss';

const UserName = () => {
  return (
    <div className={s.user}>
      <img src={Evano} className={s.userIMG} alt="Evano" />

      <div>
        <p className={s.userName}>Evano</p>
        <p className={s.userPosition}>Project Manager</p>
      </div>
    </div>
  );
};

export default UserName;
