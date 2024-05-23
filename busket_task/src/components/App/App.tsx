import { Route, Routes } from 'react-router-dom';

import Layout from '../../pages/layout/Layout';
import Main from '../../pages/main/Main';
import RouteOne from '../../pages/route1/RouteOne';
import RouteTwo from '../../pages/route2/RouteTwo';
import RouteThree from '../../pages/route3/RouteThree';
//import Busket from '@/pages/busket/Busket';

import { paths } from '../../paths';

import './App.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.Root} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={paths.route1} element={<RouteOne />} />
        <Route path={paths.route2} element={<RouteTwo />} />
        <Route path={paths.route3} element={<RouteThree />} />
      </Route>
    </Routes>
  );
};

export default App;
