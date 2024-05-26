import { useState, useEffect, useContext } from 'react';
import { Button, Flex, Spin } from 'antd';

import ProductTable from '../../components/ProductTable/ProductTable';

import UserGuid from '../../context/Userguid';
import {
  getProducts,
  getSummary,
  clearBusket,
  deleteProduct,
  quantityDec,
  quantityInc,
} from '../../api/HawkingBrosApi';

import type { IProduct } from '../../interfaces/Interfaces';

import styles from './Busket.module.css';

const Busket: React.FC = () => {
  const userGuid = useContext(UserGuid);

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    if (userGuid) {
      getProducts()
        .then((data) => {
          setProducts(data);
        })
        .catch(() => {
          alert('Ошибка получения данных');
        });
    }
  }, [userGuid]);

  useEffect(() => {
    if (userGuid) {
      getSummary()
        .then((data) => {
          setTotalPrice(data);
        })
        .catch(() => {
          alert('Ошибка получения данных');
        });
    }
  }, [products]);

  return (
    <Flex justify='center' align='stretch' vertical>
      <Button onClick={clear} className={styles.buttonClear}>
        Очистить корзину
      </Button>
      {products ? (
        <ProductTable
          products={products}
          productDelete={handleDelete}
          productDec={handleDec}
          productInc={handleInc}
        />
      ) : (
        <Spin size='large' />
      )}

      <span className={styles.total}>{`Общая сумма: ${totalPrice}`}</span>
      <Button className={styles.buttonSubmit}>Оформить заказ</Button>
    </Flex>
  );

  function clear() {
    clearBusket()
      .then(() => {
        setProducts([]);
      })
      .catch(() => {
        alert('Ошибка удаления корзины');
      });
  }

  function handleDelete(id: number, userGuid: string | null) {
    deleteProduct(id, userGuid)
      .then(() => {
        if (products) setProducts(products.filter((el) => el.Id !== id));
      })
      .catch(() => {
        alert('Ошибка получения данных');
      });
  }

  function handleInc(id: number, userGuid: string | null) {
    quantityInc(id, userGuid)
      .then(() => {
        if (products)
          setProducts(
            products.map((el) => {
              if (el.Id === id) {
                return { ...el, Quantity: ++el.Quantity };
              } else {
                return el;
              }
            })
          );
      })
      .catch(() => {
        alert('Ошибка получения данных');
      });
  }

  function handleDec(id: number, userGuid: string | null) {
    quantityDec(id, userGuid)
      .then((data) => {
        if (data !== 'Bad') {
          if (products)
            setProducts(
              products.map((el) => {
                if (el.Id === id) {
                  return { ...el, Quantity: --el.Quantity };
                } else {
                  return el;
                }
              })
            );
        } else alert('Количество товара больше нельзя уменьшить');
      })
      .catch(() => {
        alert('Ошибка получения данных');
      });
  }
};

export default Busket;
