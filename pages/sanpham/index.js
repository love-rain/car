import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Breadcrumb,
  Card, Col, Row,
  Select
} from "antd";

import {useRouter} from 'next/router'
import Link from "next/link";

import {firebaseFirestore} from "../../firebaseConfig";
import Spinner from "../../app/components/Spin";
import "./sanpham.less"

const {Meta}   = Card;
const {Option} = Select;

const Product = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading]  = useState(true);
  useEffect(() => {
    async function fetchData() {
      const snap   = [];
      const result = await firebaseFirestore.collection("sanpham").get();
      result.forEach(doc => {
        snap.push(doc.data())
      });
      setProduct(snap);
      setLoading(false)
    }

    fetchData();
  }, []);
  const router       = useRouter();
  const handleChange = useCallback((value) => {
    console.log(value);
  }, []);
  const onDetail     = useCallback((value) => {
    router.push(`/sanpham/${value.id}`);
  }, []);
  if (loading) {
    return <Spinner size={'default'}/>
  }
  return <div className='product'>
    <div className='header'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/trangchu">Trang chủ</Link>
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
      {products.map((item, index) => {
        return <div key={index} className="product-list">
          <Row className='content'>
            <Col span={12}>
              <a className="post-img" href="https://vinfast.vin/car/vinfast-lux-a/" title="VinFast Lux A2.0">
                <img
                  src="https://vinfast.vin/wp-content/uploads/vinfast-lux-a-trang-500x300.png" width="500" height="300"
                  className="img-responsive center-block wp-post-image" alt="VinFast Lux A màu Trắng"
                  data-lazy-loaded="true" style={{display: 'block'}}/>
              </a>
            </Col>
            <Col span={12}>
              <div className='header-post'>
                <span className='post-title'>{item.name}</span>
                <span className="price">{item.price} VNĐ</span>
              </div>
              <p className="text-justify">
                {item.description}
              </p>
              <div>
                <a href='#'>Chi Tiết</a>
              </div>
            </Col>
          </Row>
        </div>
      })}
    </div>
  </div>
};

export default Product;