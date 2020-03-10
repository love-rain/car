import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";


import useProduct from "../app/hook/useProduct";
import Spinner from "../app/components/Spin";
import {Card, Col, Row} from "antd";

const {Meta} = Card;

import './sanpham-detail.less'

const DetailSanPham = () => {
  const {getDetailProduct} = useProduct();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [detailProduct, setDetailProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const product = await getDetailProduct(router.query.id);
      setDetailProduct(product);
      setLoading(false)
    }

    fetchData();
  });
  if (loading) {
    return <Spinner size={'default'}/>
  }
  return <div className='product-detail'>
    <div>
      <Row>
        <Col span={12}>
          <div>
            <img width={500} height={300} src="/static/assets/cats.jpg" alt=""/>
          </div>
        </Col>
        <Col span={12}>
          <h1>{detailProduct.name}</h1>
          <div className='price'>{detailProduct.price} VND</div>
          <div className='description'>
            Mitsubishi Triton TVC – Uy mãnh vượt trội
            Quà tặng trị giá lên đến 25 triệu VNĐ
          </div>
          <div style={{paddingBottom: 10}}>
            <strong>
              <span style={{color: '#ed1c24', fontSize: '16px'}}>Chú ý: Liên hệ để có giá ưu đãi nhất</span>
            </strong>
          </div>
          <div>
            <a href="tel:0973645596" target="_self"
               className="hotline">
              <span>HOTLINE BÁO GIÁ: 097 364 5596</span>
            </a>
          </div>
        </Col>
      </Row>
      <div className='line'/>
      <div className="version">
        <Row>
          <Col span={8}>
            <h3>PHIÊN BẢN</h3>
          </Col>
          <Col span={16}>
            <div style={{display: 'flex'}}>
              <Card
                hoverable
                style={{width: 240, marginLeft: 10}}
                cover={<img alt="example" src={detailProduct.photoURL}/>}
              >
                <Meta title={detailProduct.name} description={`${detailProduct.price} VND`}/>
              </Card>
              <Card
                hoverable
                style={{width: 240, marginLeft: 10}}
                cover={<img alt="example" src={detailProduct.photoURL}/>}
              >
                <Meta title={detailProduct.name} description={`${detailProduct.price} VND`}/>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <div className='line'/>
      <div className='detail'>
        <h3>Thông số kỹ thuật</h3>
        <div>
          <img
            className="aligncenter wp-image-68039"
            src="http://mitsubishiviethung.com/wp-content/uploads/2019/01/Xpander_Leaflet-1082018_PRINT-1.jpg" alt=""
            width="1025" height="1699"
            sizes="(max-width: 1025px) 100vw, 1025px"/>

          <img
            className="aligncenter wp-image-68041"
            src="http://mitsubishiviethung.com/wp-content/uploads/2019/01/Xpander_Leaflet-1082018_PRINT-2.jpg" alt=""
            width="1048" height="2058"
            sizes="(max-width: 1048px) 100vw, 1048px"/>
        </div>
      </div>
      <h3>Nội thất</h3>
      <div className="option-slide">
        <div className="option-track slick-initialized slick-slider slick-vertical">
          <div className="slick-list draggable">
            <div className="slick-track">
              <div className="option-item hightline active-show slick-slide slick-current slick-active" tabIndex="-1"
                   data-item="0" data-slick-index="0">
                <div className="opLink-inner"><span className="opText">NỘI THẤT RỘNG RÃI &amp; TIỆN NGHI</span></div>
              </div>
              <div className="option-item null slick-slide slick-active" tabIndex="-1" data-item="1"
                   data-slick-index="1">
                <div className="opLink-inner"><span className="opText">1. Khoang lái rộng rãi</span></div>
              </div>
              <div className="option-item null slick-slide slick-active" tabIndex="-1" data-item="2"
                   data-slick-index="2">
                <div className="opLink-inner"><span className="opText">2. 7 chỗ với sắp xếp ghế linh hoạt</span></div>
              </div>
              <div className="option-item null slick-slide slick-active" tabIndex="-1" data-item="3"
                   data-slick-index="3">
                <div className="opLink-inner"><span className="opText">3. Ghế sau gập phẳng sàn</span></div>
              </div>
              <div className="option-item null slick-slide slick-active" tabIndex="-1" data-item="4"
                   data-slick-index="4">
                <div className="opLink-inner"><span className="opText">4. Tựa gác tay hàng ghế hai</span></div>
              </div>
              <div className="option-item null slick-slide slick-active" tabIndex="-1" data-item="5"
                   data-slick-index="5">
                <div className="opLink-inner"><span className="opText">5. Tiện nghi triết lý OMOTENASHI</span></div>
              </div>
              <div className="option-item null slick-slide" tabIndex="-1" data-item="6" data-slick-index="6">
                <div className="opLink-inner"><span className="opText">6. Mát lạnh và thoải mái</span></div>
              </div>
              <div className="option-item null slick-slide" tabIndex="-1" data-item="7" data-slick-index="7">
                <div className="opLink-inner"><span
                  className="opText">7. Chìa khóa thông minh và khởi động bằng nút bấm</span>
                </div>
              </div>
              <div className="option-item null slick-slide" tabIndex="-1" data-item="8" data-slick-index="8">
                <div className="opLink-inner"><span className="opText">8. Màn hình hiển thị đa thông tin</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="option-list-detail">
          <div className="option-detail show-detail" data-item="0">
            <div className="option-img">
              <p style={{maxWidth: 1138}}>
                <img
                  width={'100%'}
                  src="https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2018/09/23.jpg"
                  alt="NỘI THẤT RỘNG RÃI &amp; TIỆN NGHI"/>
              </p>
            </div>
            <div className="option-info ">
              <h3 className="opTitle">NỘI THẤT RỘNG RÃI &amp; TIỆN NGHI</h3>
              <div className="opContent">
                <p>Thiết kế nội thất rộng rãi, hiện đại và tinh tế với vật liệu chất lượng không chỉ tạo ấn tượng ngay
                  từ ánh nhìn đầu tiên mà còn mang lại sự thoải mái cho mọi hành khách ngay cả trên những hành trình
                  dài.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

DetailSanPham.getInitialProps = async ({query}) => {
  return {
    namespacesRequired: ['common'],
  }
};
export default DetailSanPham;
