import React, {useEffect, useState} from "react";
import {
  Card,
} from "antd";

const {Meta} = Card;
import "./phutung.less"
import useAccessory from "../../app/hook/useAccessory";
import Spinner from "../../app/components/Spin";

const Phutung = () => {
  const {getAllAccessory} = useAccessory();
  const [accessories, setAccessories] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const accessories = await getAllAccessory();
      setAccessories(accessories);
      setLoading(false)
    }

    fetchData();
  }, []);
  if (loading) {
    return <Spinner style={{paddingTop: 20}} size={'default'}/>
  }
  return <div className="phutung">
    <div className="col-inner">
      <h1 style={{textAlign: 'center'}}>PHỤ TÙNG CHÍNH HIỆU</h1>
      <p>Bạn có thể tìm các phụ tùng chính hiệu Mitsubishi ở đâu tại Việt Nam? Không nơi nào khác ngoài hệ thống cung
        cấp phụ tùng của Mitsubishi Motors Việt Nam.
        <br/>
      </p>
      <div className='danh-sach-phu-tung'>
        {accessories.map(item => {
          return <div style={{paddingBottom: 10, paddingRight: 10}}>
            <Card
              style={{maxWidth: 202}}
              cover={
                <img
                  style={{maxHeight: 120}}
                  alt="" src={item.photoURL}/>}
            >
              <Meta
                title={item.name}
              />
            </Card>
          </div>
        })}
      </div>
    </div>
  </div>;
};
export default Phutung;