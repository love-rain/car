import React, {
  useCallback,
  useState
} from 'react';
import {
  Breadcrumb,
  Card,
  Icon,
  Select
} from "antd";

const {Meta}   = Card;
const {Option} = Select;

import "./sanpham.less"

const Product = () => {
  const [mockData]   = useState([
    {
      id: 1,
      name: 'toyota',
      price: '750000',
      description: 'Toyota camry, inova'
    }, {
      id: 2,
      name: 'lexus',
      price: '1750000',
      description: 'LX570'
    }, {
      id: 3,
      name: 'Porsche',
      price: '11750000',
      description: 'Porsche 911'
    },
    {
      id: 4,
      name: 'Porsche',
      price: '11750000',
      description: 'Porsche 911'
    }
  ]);
  const handleChange = useCallback((value) => {
    console.log(value);
  }, []);

  return <div className='product'>
    <div className='header'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Sản phẩm
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Select defaultValue="Thứ tự mặc định" className='custom-dropdown' onChange={handleChange}>
        <Option value="newest">Mới nhất </Option>
        <Option value="desc">Từ cao đến thấp</Option>
        <Option value="asc">Từ thấp đến cao</Option>
      </Select>
    </div>
    <div className='list-product'>
      {mockData.map(item => {
        return <div style={{paddingBottom: 10}}>
          <Card
            style={{width: 298}}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting"/>,
              <Icon type="edit" key="edit"/>,
              <Icon type="ellipsis" key="ellipsis"/>,
            ]}
          >
            <Meta
              title={item.name}
              description={item.description}
            />
          </Card>
        </div>
      })}

    </div>
  </div>
};

export default Product;