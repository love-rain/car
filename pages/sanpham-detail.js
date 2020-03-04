import React, {useEffect, useState} from 'react'
import {useRouter} from "next/router";
import useProduct from "../app/hook/useProduct";
import Spinner from "../app/components/Spin";
import {Descriptions} from "antd";

const DetailSanPham = () => {
  const {getDetailProduct}                = useProduct();
  const router                            = useRouter();
  const [loading, setLoading]             = useState(true);
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
  return <div>
    <Descriptions title="Car Info">
      <Descriptions.Item label="">
        <img style={{width:200}} src={detailProduct.photoURL} alt="error"/>
      </Descriptions.Item>
      <Descriptions.Item label="Name">{detailProduct.name}</Descriptions.Item>
      <Descriptions.Item label="Price">{detailProduct.price}</Descriptions.Item>
      <Descriptions.Item label="Description">{detailProduct.description}</Descriptions.Item>
    </Descriptions>
  </div>
};

DetailSanPham.getInitialProps = async ({query}) => {
  console.log(query.id);
  return {
    namespacesRequired: ['common'],
  }
};
export default DetailSanPham;
