import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  headerTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ headerTitle }) => {
  return (
    <>
      <Header userName={headerTitle} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
