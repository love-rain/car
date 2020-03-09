import React, {useCallback, useEffect, useState} from 'react'
import {useRouter} from "next/router";


import useProduct from "../app/hook/useProduct";
import Spinner from "../app/components/Spin";
import './sanpham-detail.less'
import {Card, Carousel, Col, Row} from "antd";

const {Meta} = Card;

const DetailSanPham = () => {
  const {getDetailProduct}                = useProduct();
  const router                            = useRouter();
  const [loading, setLoading]             = useState(true);
  const [currentSlide, setCurrentSlide]   = useState(2);
  const [detailProduct, setDetailProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const product = await getDetailProduct(router.query.id);
      setDetailProduct(product);
      setLoading(false)
    }

    fetchData();
  });
  const onChangeImage = useCallback((value) => {
    setCurrentSlide(value)
  }, []);
  const onClickItem   = useCallback(() => {
    console.log('onClickItem');
  }, []);
  const onClickThumb  = useCallback(() => {
    console.log('onClickThumb');
  }, []);
  if (loading) {
    return <Spinner size={'default'}/>
  }
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return <div className='product-detail'>
    <div>
      <Row>
        <Col span={12}>
          <Carousel autoplay autoplaySpeed={1000} nextArrow={<span>Next</span>} prevArrow={<span>Prev</span>}>
            <div>
              <img src="/static/assets/cats.jpg" alt=""/>
            </div>
            <div>
              <img src="/static/assets/cats.jpg" alt=""/>
            </div>
            <div>
              <img src="/static/assets/cats.jpg" alt=""/>
            </div>
          </Carousel>
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
        <Row>
          <Col span={12}>
            <h3 style={{textAlign: 'center'}}>{`NGOẠI THẤT ${detailProduct.name}`}</h3>
            <span>
              Được phát triển dựa trên mẫu Opel Karl Rock và công nghệ chuyển nhượng lại từ GM, Fadil có thiết kế hiện
            đại, theo đúng xu hướng thế giới kết hợp với những nét đặc trưng riêng của thương hiệu VinFast, đặc biệt là
            phần đầu xe với logo chữ V cách điệu đặc trưng.
            </span>
          </Col>
          <Col span={12} style={{paddingLeft: 20}}>
            <img src="/static/assets/cats.jpg" alt={'error'}/>
          </Col>
        </Row>
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
