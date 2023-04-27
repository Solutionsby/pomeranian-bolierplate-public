import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon />
              DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="myCv">
              <PersonalCardIcon />
              Moje Cv
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon />
              Kalendarz
            </NavLink>
          </li>
          <li>
            <div></div>
          </li>
          <li>
            <NavLink className="aside-row" to="setings">
              <SettingIcon />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
