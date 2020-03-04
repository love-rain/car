import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Breadcrumb,
  Card,
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
      {products.map(item => {
        return <span key={item.id} style={{paddingBottom: 10, paddingRight: 10, paddingLeft: 10}}>
          <Card
            style={{width: 298}}
            cover={
              <img
                alt="example"
                src={item.photoURL}
              />
            }
            actions={[
              <span onClick={() => onDetail(item)}>Detail</span>
            ]}>
            <Meta
              title={item.name}
              description={item.description}
            />
           </Card>
        </span>
      })}
    </div>
  </div>
};

export default Product;