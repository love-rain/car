import React, {useEffect, useState} from "react";
import useProduct from "../hook/useProduct";
import Spinner from "./Spin";

const TabSanpham = () => {
  const {getAllProduct} = useProduct();
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProduct();
      setProduct(result);
      setLoading(false)
    }

    fetchData();
  }, []);

  if (loading) {
    return <Spinner style={{paddingTop: 20}} size={'default'}/>
  }
  
  return <div>
    {products.map((item, index) => {
      return <div key={index}>
        <img className='responsive-img' src={item.photoURL} alt=""/>
        <div>
          {item.name}
        </div>
        <div>
          <div>
            <span>Tiêu thụ:</span>
            <span>{`${item.consume}L/100km`}</span>
          </div>
          <div>
            <span>Giá</span>
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    })}
  </div>

};

export default TabSanpham;