import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import SelectComponent from '../Select/Select';

import { paths } from '../../paths';

import styles from './Header.module.scss';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {Object.entries(paths).map((el) => {
          return (
            <NavLink
              to={el[1]}
              key={el[1]}
              className={({ isActive }) =>
                isActive ? clsx(styles.link, styles.linkActive) : styles.link
              }
            >
              {el[0]}
            </NavLink>
          );
        })}
        <SelectComponent />
      </nav>
      <div className={styles.title}>{userName}</div>
    </header>
  );
};

export default Header;
