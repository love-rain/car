import React, {useState} from "react";
import {
  Card,
  Icon
} from "antd";

const {Meta} = Card;
import "./phutung.less"

const Phutung = () => {
  const [mockData] = useState([
    {
      id: 1,
      name: 'DẦU NHỜN VÀ HÓA CHẤT',
      price: '750000',
      description: 'Toyota camry, inova'
    }, {
      id: 2,
      name: 'DÂY CUROA',
      price: '1750000',
      description: 'LX570'
    }, {
      id: 3,
      name: 'LỌC GIÓ',
      price: '11750000',
      description: 'Porsche 911'
    },
    {
      id: 4,
      name: 'LỌC NHIÊN LIỆU',
      price: '11750000',
      description: 'Porsche 911'
    }, {
      id: 5,
      name: 'LỌC NHỚT',
      price: '11750000',
      description: 'Porsche 911'
    }, {
      id: 6,
      name: 'MÁ PHANH',
      price: '11750000',
      description: 'Porsche 911'
    }, {
      id: 7,
      name: 'PHỤ KIỆN',
      price: '11750000',
      description: 'Porsche 911'
    }, {
      id: 7,
      name: 'VALUE SELECTION',
      price: '11750000',
      description: 'Porsche 911'
    }
  ]);
  return <div className="phutung">
    <div className="col-inner">
      <h1 style={{textAlign: 'center'}}>PHỤ TÙNG CHÍNH HIỆU</h1>
      <p>Bạn có thể tìm các phụ tùng chính hiệu Mitsubishi ở đâu tại Việt Nam? Không nơi nào khác ngoài hệ thống cung
        cấp phụ tùng của Mitsubishi Motors Việt Nam.
        <br/>
      </p>
      <div className='danh-sach-phu-tung'>
        {mockData.map(item => {
          return <div style={{paddingBottom: 10, paddingRight: 10, paddingLeft: 10}}>
            <Card
              style={{maxWidth: 298}}
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
  </div>
};

export default Phutung;