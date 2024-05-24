import { useState, useEffect, useContext } from 'react';
import { Col, Row, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import UsedGuid from '../../context/Usedguid';
import { getProducts, getSummary, clearBusket } from '../../api/HawkingBrosApi';

import { IProduct } from '../../interfaces/Interfaces';

import styles from './Busket.module.css';

const Busket: React.FC = () => {
  const usedGuid = useContext(UsedGuid);

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (usedGuid) {
      getProducts()
        .then((data) => {
          setProducts(data);
          console.log(data);
        })
        .catch(() => {
          alert('Ошибка получения данных');
        });
    }
  }, [usedGuid]);

  useEffect(() => {
    if (usedGuid) {
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
    <div>
      <Button onClick={clear}>Очистить корзину</Button>
      {products.map((el) => {
        return (
          <Row key={el.Id}>
            <Col flex='auto'>{el.Name}</Col>
            <Col span={4}>{el.Quantity}</Col>
            <Col span={4}>{el.Price}</Col>
            <Col span={4}>
              <img className={styles.img} src={'data:image/png;base64,' + el.Images[0].Image} />
            </Col>
            <Col span={4}>
              <Button shape='circle' icon={<DeleteOutlined />} />
            </Col>
          </Row>
        );
      })}
      <span>{`Общая сумма: ${totalPrice}`}</span>
      <Button>Оформить заказ</Button>
    </div>
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
};

export default Busket;
