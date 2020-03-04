import React from 'react';
import {
  Col,
  Row
} from "antd";
import './styles.less'


const BangGia = () => {
  return <div className="product-list">
    <Row>
      <Col span={12}>
        <a className="post-img" href="https://vinfast.vin/car/vinfast-lux-a/" title="VinFast Lux A2.0">
          <img
            src="https://vinfast.vin/wp-content/uploads/vinfast-lux-a-trang-500x300.png" width="500" height="400"
            className="img-responsive center-block wp-post-image" alt="VinFast Lux A màu Trắng"
            data-lazy-loaded="true" style={{display: 'block'}}/>
        </a>
      </Col>
      <Col span={16}>
        <div className='header-post'>
          <a className='post-title' href='#'>XPANDER</a>
          <span className="price">1.099.000.000 VNĐ</span>
        </div>
        <p className="text-justify"> Giá xe VinFast Lux A2.0 là 1,366 tỷ đồng (giá 3 không) giảm 376 triệu đồng (giá ưu
          đãi) còn còn 1.099 triệu. Thiết kế của xe VinFast Lux A mang tính hiện đại, thiên...
        </p>
        <div>
          <a href='#'>Chi Tiết</a>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <a className="post-img" href="https://vinfast.vin/car/vinfast-lux-a/" title="VinFast Lux A2.0">
          <img
            src="https://vinfast.vin/wp-content/uploads/vinfast-lux-a-trang-500x300.png" width="300" height="200"
            className="img-responsive center-block wp-post-image" alt="VinFast Lux A màu Trắng"
            data-lazy-loaded="true" style={{display: 'block'}}/>
        </a>
      </Col>
      <Col span={12}>
        <div className='header-post'>
          <a className='post-title' href='#'>XPANDER</a>
          <span className="price">1.099.000.000 VNĐ</span>
        </div>
        <p className="text-justify"> Giá xe VinFast Lux A2.0 là 1,366 tỷ đồng (giá 3 không) giảm 376 triệu đồng (giá ưu
          đãi) còn còn 1.099 triệu. Thiết kế của xe VinFast Lux A mang tính hiện đại, thiên...
        </p>
        <div>
          <a href='#'>Chi Tiết</a>
        </div>
      </Col>
    </Row>
  </div>
};

export default BangGia;