import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import {Carousel} from 'react-responsive-carousel';
import {Card, Col, Row, Tabs} from "antd";

import useProduct from "../app/hook/useProduct";
import Spinner from "../app/components/Spin";

const {TabPane} = Tabs;
const {Meta} = Card;

import './sanpham-detail.less'

// const version = [
//   {
//     name: '2.0 CVT',
//     info: {
//       price: '825.000.000',
//       specification: 'https://firebasestorage.googleapis.com/v0/b/mitsubishicar-57181.appspot.com/o/outlander-2.0-CTV.jpg?alt=media&token=ce65fbd3-8701-4a4b-949a-469bae51ca20'
//     }
//   },
//   {
//     name: '2.0 CVT PRE',
//     info: {
//       price: '950.000.000',
//       specification: 'https://firebasestorage.googleapis.com/v0/b/mitsubishicar-57181.appspot.com/o/outlander-2.0-CVT-pre.jpg?alt=media&token=18107e34-6f42-422b-8d86-910b0a5eb728'
//     }
//   },
//   {
//     name: '2.4 CVT PRE SPE',
//     info: {
//       price: '1.079.000.000',
//       specification: 'https://firebasestorage.googleapis.com/v0/b/mitsubishicar-57181.appspot.com/o/outlander-2.4-cvt-pre-special.jpg?alt=media&token=72504f9e-249e-453c-9b49-ad61a08a4c71'
//     }
//   },
//   {
//     name: '2.0 CVT PRE SPE',
//     info: {
//       price: '939.000.000',
//       specification: 'https://firebasestorage.googleapis.com/v0/b/mitsubishicar-57181.appspot.com/o/outlander-ctv-pre-special.jpg?alt=media&token=c29f941b-aca5-4e54-a539-d16cae55c135'
//     }
//   },
// ];
// const thumbs = [
//   "https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2017/06/outlander-white.jpg",
//   "https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2017/06/outlander-red.jpg",
//   "https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2017/06/outlander-black.jpg",
//   "https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2017/06/outlander-brown.jpg",
//   "https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2017/06/outlander-titanium.jpg",
// ];

const DetailProduct = () => {
  const {getDetailProduct} = useProduct();
  // const {fakeVersion, fakeThumbs} = useFakeData();
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
  }, []);
  if (loading) {
    return <Spinner size={'default'}/>
  }
  return <div className='product-detail'>
    <Row>
      <Col span={12}>
        <div className='carousel'>
          <Carousel
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            showThumbs={true}
            // autoPlay={true}
            verticalSwipe={'standard'}
            transitionTime={240}
            width={'80%'}>
            {detailProduct.thumbs.map((item, index) => {
              return <div key={index}>
                <img
                  src={item}
                  alt=''
                />
              </div>
            })}
          </Carousel>
        </div>
      </Col>
      <Col span={12}>
        <h1>{detailProduct.name}</h1>
        <div className='price'>{detailProduct.price} VND</div>
        <div className='description'>
          {detailProduct.description}
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
    <div>
      <div className='line'/>
      <div className="version">
        <h3>PHIÊN BẢN</h3>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {detailProduct.version.map((item, index) => {
            return <Card
              key={index}
              hoverable
              style={{width: 240, marginRight: 10, marginBottom: 10}}
              cover={<img alt="example" src={detailProduct.photoURL}/>}
            >
              <Meta
                title={`${item.name}`}
                description={`${item.info.price} VND`}/>
            </Card>
          })}
        </div>
      </div>
      <div className='line'/>
      <div className='detail'>
        <h3>Thông số kỹ thuật</h3>
        <Tabs defaultActiveKey="1">
          {detailProduct.version.map((item) => {
            return <TabPane style={{textAlign: 'center', minHeight: 900}} tab={item.name} key={item.name}>
              <img style={{maxWidth: 600, paddingBottom: 20}} src={item.info.specification} alt=""/>
            </TabPane>
          })}
        </Tabs>
      </div>
    </div>
    <h3>Nội thất</h3>
  </div>
};

export default DetailProduct;