import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';

interface LayoutProps {
  headerTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ headerTitle }) => {
  return (
    <>
      <Header userName={headerTitle} />
      <Outlet />
    </>
  );
};

export default Layout;
