import { NavLink } from 'react-router-dom';
import { Flex } from 'antd';

import SelectComponent from '../Select/Select';

import { paths } from '../../paths';

import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {Object.entries(paths).map((el) => {
          return <NavLink to={el[1]}>{el[0]}</NavLink>;
        })}
        <SelectComponent />
      </nav>
    </header>
  );
};

export default Header;
