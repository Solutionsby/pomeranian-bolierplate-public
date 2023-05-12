import { SettingIcon } from '../Icons/SettingIcon';
import './styles.css';
export const HeaderMenu = () => {
  return (
    <div className="wrapper-heder-menu">
      <div className="seting-icon">
        <SettingIcon />
      </div>
      <div className="user-deta-heder">
        <div className="photo-icon"></div>
        <div className="user-name-heder">
          <h2>Paweł</h2>
          <p>Kursant</p>
        </div>
      </div>
      <div className="arrow-heder">❱</div>
    </div>
  );
};
