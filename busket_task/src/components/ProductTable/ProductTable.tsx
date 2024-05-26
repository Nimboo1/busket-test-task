import { useContext } from 'react';
import { Col, Row, Button } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

import UserGuid from '../../context/Userguid';

import type { IProduct } from '../../interfaces/Interfaces';

import styles from './ProductTable.module.css';

interface ProductTableProps {
  products: IProduct[];
  productDelete: (id: number, userGuid: string | null) => void;
  productInc: (id: number, userGuid: string | null) => void;
  productDec: (id: number, userGuid: string | null) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  productDelete,
  productDec,
  productInc,
}) => {
  const userGuid = useContext(UserGuid);

  return (
    <>
      {products.map((el) => {
        return (
          <Row key={el.Id} className={styles.row}>
            <Col flex='auto'>{el.Name}</Col>
            <Col span={4} className={styles.col}>
              <Button
                size={'small'}
                shape='circle'
                icon={<MinusOutlined />}
                onClick={() => {
                  productDec(el.Id, userGuid);
                }}
              />
              {el.Quantity}
              <Button
                size={'small'}
                shape='circle'
                icon={<PlusOutlined />}
                onClick={() => {
                  productInc(el.Id, userGuid);
                }}
              />
            </Col>
            <Col span={4}>{el.Price}</Col>
            <Col span={4}>
              <img className={styles.img} src={'data:image/png;base64,' + el.Images[0].Image} />
            </Col>
            <Col span={4}>
              <Button
                shape='circle'
                icon={<DeleteOutlined />}
                onClick={() => {
                  productDelete(el.Id, userGuid);
                }}
              />
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default ProductTable;
