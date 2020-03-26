import React, {useCallback, useEffect, useState} from 'react'
import {useRouter} from "next/router";
import {Carousel} from 'react-responsive-carousel';
import currencyFormatter from 'currency-formatter'
import {Card, Tabs} from "antd";

import useProduct from "../app/hook/useProduct";
import Spinner from "../app/components/Spin";

const {TabPane} = Tabs;
const {Meta} = Card;

import {MIRAGE, NEW, NEW_TRITON, OUTLANDER, PAJERO_SPORT, XPANDER} from "../app/constance";
import OutLander from "../app/containers/mota-xe/outlander";
import Xpander from "../app/containers/mota-xe/xpander";
import Mirage from "../app/containers/mota-xe/mirage";
import NewTriton from "../app/containers/mota-xe/new-triton";
import PajeroSport from "../app/containers/mota-xe/pajero-sport";

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
  const {getAllProduct, getDetailProduct} = useProduct();
  // const {fakeVersion, fakeThumbs} = useFakeData();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [detailProduct, setDetailProduct] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const product = await getDetailProduct(router.query.id);
      const list = await getAllProduct();
      setListProduct(list);
      setDetailProduct(product);
      setLoading(false)
    }

    fetchData();
  }, []);

  const onSelectProduct = useCallback((val) => {
    if (val.type === NEW) {
      return router.push(val.link)
    }
    router.push(`/sanpham/${val.id}`)
  }, []);
  if (loading) {
    return <Spinner style={{paddingTop: 20}} size={'default'}/>
  }
  return <div className='product-detail'>
    <div style={{paddingBottom: 10}} className='row'>
      <div className='col-sm-6'>
        <div className='carousel'>
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            showThumbs={true}
            autoPlay={true}
            verticalSwipe={'standard'}
            transitionTime={240}
            width={'100%'}>
            {detailProduct.thumbs.map((item, index) => {
              return <div key={index}>
                <img
                  className='responsive-img'
                  src={item}
                  alt=''
                />
              </div>
            })}
          </Carousel>
        </div>
      </div>
      <div className='col-sm-6'>
        <h1>{detailProduct.name}</h1>
        <div className='price'>
          {currencyFormatter.format(detailProduct.price, {code: 'VND', symbol: 'VND'})}
        </div>
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
            <span style={{fontWeight: 800}}>HOTLINE: 097 364 5596</span>
          </a>
        </div>
      </div>
    </div>
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
                description={`${currencyFormatter.format(item.info.price, {code: 'VND', symbol: 'VND'})}`}/>
            </Card>
          })}
        </div>
      </div>
      <div className='line'/>
      <div className='detail'>
        <h3>Thông số kỹ thuật</h3>
        <Tabs defaultActiveKey="1">
          {detailProduct.version.map((item) => {
            return <TabPane className='tab-pane' tab={item.name} key={item.name}>
              <img className='img-specification' src={item.info.specification} alt=""/>
            </TabPane>
          })}
        </Tabs>
      </div>
      <div className='line'/>
      <h3 style={{paddingBottom: 20}}>Mô tả</h3>
      <div className='mota'>
        {detailProduct.type === OUTLANDER && <OutLander/>}
        {detailProduct.type === XPANDER && <Xpander/>}
        {detailProduct.type === MIRAGE && <Mirage/>}
        {detailProduct.type === NEW_TRITON && <NewTriton/>}
        {detailProduct.type === PAJERO_SPORT && <PajeroSport/>}
      </div>
      <div className='line'/>
      <div>
        <h3>Có thể bạn quan tâm</h3>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {listProduct.map((item, index) => {
            return <Card
              bordered={false}
              key={index}
              hoverable
              onClick={() => onSelectProduct(item)}
              style={{width: 240, marginRight: 10, marginBottom: 10}}
              cover={<img style={{height: 100}} alt="" src={item.photoURL}/>}
            >
              <Meta
                title={`${item.name}`}
                description={`${item.price} VND`}/>
            </Card>
          })}
        </div>
      </div>
    </div>
  </div>
};

export default DetailProduct;