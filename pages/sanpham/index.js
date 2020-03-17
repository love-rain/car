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
import _ from 'lodash'
import currencyFormatter from 'currency-formatter'
import Link from "next/link";

import Spinner from "../../app/components/Spin";
import useProduct from "../../app/hook/useProduct";
import {NEW} from "../../app/constance";

import "./sanpham.less"

const {Option} = Select;

const Product = () => {
  const {getAllProduct} = useProduct();
  const [products, setProduct] = useState([]);
  const [productRaw, setProductRaw] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProduct();
      setProduct(result);
      setProductRaw(result);
      setLoading(false)
    }

    fetchData();
  }, []);
  const handleChange = useCallback((value) => {
    if (value === NEW) {
      const newCar = products.filter(item => item.type === NEW);
      setProductRaw(newCar);
      return;
    }
    const newList = _.orderBy(products, ['price'], [value]);
    setProductRaw(newList)
  }, [products]);
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
        <Option value="new">Mới nhất </Option>
        <Option value="desc">Từ cao đến thấp</Option>
        <Option value="asc">Từ thấp đến cao</Option>
      </Select>
    </div>
    <div className='list-product'>
      {productRaw.map((item, index) => {
        return <div key={index} className="product-list">
          <Row className='content'>
            <Col span={8}>
              <Link
                href={item.type === NEW ? item.redirect : `/sanpham/${item.id}`}
              >
                <img
                  className='responsive-img'
                  src={item.photoURL}
                  style={{display: 'block', cursor: 'pointer'}}
                  alt=''/>
              </Link>
            </Col>
            <Col style={{paddingLeft: 40}} span={16}>
              <div className='header-post'>
                <span className='post-title'>{item.name}</span>
                <span className="price">
                  {currencyFormatter.format(item.price, {code: 'VND', symbol: 'VND'})}
                </span>
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