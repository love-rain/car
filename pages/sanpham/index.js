import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Breadcrumb,
  Col, Row,
  Select
} from "antd";
import Link from "next/link";

import Spinner from "../../app/components/Spin";
import "./sanpham.less"
import useProduct from "../../app/hook/useProduct";

const {Option} = Select;

const Product = () => {
  const {getAllProduct} = useProduct();
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProduct();
      setProduct(result);
      setLoading(false)
    }

    fetchData();
  }, []);
  const handleChange = useCallback((value) => {
    console.log(value);
  }, []);
  if (loading) {
    return <Spinner size={'default'}/>
  }
  return <div className='product'>
    <div className='header'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href={"/trangchu"}>Trang chủ</Link>
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
              <img
                src={item.photoURL}
                style={{display: 'block', maxWidth: 400}}
                alt=''/>
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
                <Link
                  href={item.type === 'new' ? item.redirect : `/sanpham/${item.id}`}
                >Chi Tiết</Link>
              </div>
            </Col>
          </Row>
        </div>
      })}
    </div>
  </div>
};

export default Product;