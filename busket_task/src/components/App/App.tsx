import { faker } from '@faker-js/faker';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { createBusket, getHeader } from '../../api/HawkingBrosApi';

import UserGuid from '../../context/Userguid';

import Layout from '../../pages/layout/Layout';
import Main from '../../pages/main/Main';
import RouteOne from '../../pages/route1/RouteOne';
import RouteTwo from '../../pages/route2/RouteTwo';
import RouteThree from '../../pages/route3/RouteThree';
import Busket from '../../pages/busket/Busket';

import { paths } from '../../paths';

import './App.css';

const App: React.FC = () => {
  const [userGuid, setUserGuid] = useState<null | string>(null);
  const [userName, setUserName] = useState<string>('');

  const productCount = faker.number.int({ min: 1, max: 10 });

  useEffect(() => {
    createBusket(productCount)
      .then(() => {
        getHeader()
          .then((data) => {
            setUserGuid(data.UsedGuid);
            setUserName(data.UserName);
          })
          .catch(() => {
            alert('Ошибка получения данных');
          });
      })
      .catch(() => {
        alert('Ошибка получения данных');
      });
  }, []);

  return (
    <UserGuid.Provider value={userGuid}>
      <Routes>
        <Route path={paths.Root} element={<Layout headerTitle={userName} />}>
          <Route index element={<Main />} />
          <Route path={paths.route1} element={<RouteOne />} />
          <Route path={paths.route2} element={<RouteTwo />} />
          <Route path={paths.route3} element={<RouteThree />} />
          <Route path={paths.busket} element={<Busket />} />
        </Route>
      </Routes>
    </UserGuid.Provider>
  );
};

export default App;
