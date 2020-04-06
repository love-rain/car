import React, {useEffect, useState} from 'react';
import {Carousel} from "antd";

import "./trangchu.less"
import useNews from "../../app/hook/useNews";
import Spinner from "../../app/components/Spin";
import TabNews from "../../app/components/TabNews";
import TabSanpham from "../../app/components/TabSanpham";

// const listProduct = [
//   {
//     name: 'Atrrage',
//     photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-attrage-360x145-min.png",
//     description: 'Mẫu xe dành cho cho doanh nhân trẻ, phụ nữ thành đạt, gia đình trẻ. Phục vụ việc đi lại hằng ngày, Shopping, đi du lịch, thăm hỏi bạn bè và người thân.'
//   },
//   {
//     name: 'Mirage',
//     photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-mirage-360x145-min.png",
//     description: 'Mẫu xe dành cho phụ nữ thành đạt, gia đình phục vụ đi lại hàng ngày, shopping, đưa đón con cái đi học, phục vụ mục đích thư giãn và giải trí.'
//   },
//   {
//     name: 'Outlander',
//     photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-outlander-360x145-min.png",
//     description: 'Mẫu xe dành cho doanh nhân trẻ thành đạt, gia đình trẻ mong muốn sở hữu một chiếc xe gầm cao rộng rãi để di chuyển hàng ngày cùng những chuyến du lịch cho cả gia đình.'
//   },
//   {
//     name: 'Pajero Sport',
//     photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-new-pajero-sport-360x145-min.png",
//     description: 'Mẫu xe dành cho doanh nghiệp vừa và lớn, bộ ngành nhà nước, các ngân hàng, doanh nghiệp tín dụng, gia đình lớn phục vụ công việc và đi lại hàng ngày cũng như đi du lịch.'
//   },
//   {
//     name: 'New Triton',
//     photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/Thumb-newTriton-360x145-min.png",
//     description: 'Khách hàng có sở thích du lịch cần một chiếc xe khỏe, công suất lớn, tiết kiệm nhiên liệu và bền bỉ. Dành cho doanh nghiệp về xây dựng, khai thác mỏ, cơ khí chế tạo máy.'
//   },
//   {
//     name: 'Xpander',
//     photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-xpander-360x145-min.png",
//     description: 'Mẫu xe dành cho chủ doanh nghiệp nhỏ, taxi, gia đình cần một chiếc xe 7 chỗ rộng rãi, tiết kiệm nhiên liệu phục vụ nhu cầu đi lại hằng ngày và du lịch giải trí.'
//   },
// ];
// const newsFake = [
//   {
//     name: 'CHƯƠNG TRÌNH KHUYẾN MÃI FUKUBUKURO–RINH XE NGHINH TÀI LỘC',
//     description: '',
//     subDescription: 'Mitsubishi Motors Việt Nam và hệ thống NPP ủy quyền trên toàn quốc xin trân trọng gửi đến quý khách hàng thông tin mới nhất về chương trình khuyến mãi: “Fukubukuro–Rinh xe nghinh tài lộc.”  Vào dịp đầu năm mới, người [...]',
//     photoURL: 'https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2020/02/750x600.png',
//     type: 'default'
//   },
//   {
//     name: 'MITSUBISHI OUTLANDER 2.0 MỚI RA MẮT KHÁCH HÀNG, GIÁ CHỈ TỪ 825 TRIỆU VNĐ',
//     description: '',
//     subDescription: 'Kế thừa những ưu điểm nổi bật từ phiên bản trước, Mitsubishi Outlander 2020 tiếp tục là mẫu xe chiến lược với nhiều cải tiến về ngoại thất, tiện [...]',
//     photoURL: 'https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2020/02/KV_A4_OL-01.jpg',
//     type: 'default'
//   },
//   {
//     name: 'KHÁCH HÀNG ĐẠT GIẢI NHẤT – 01 XE MITSUBISHI XPANDER 1.5 MT –  CHƯƠNG TRÌNH ️“MUA SẮM THẬT XÔM – RƯỚC XE THẬT XỊN”  DO TTTM SC VIVO CITY TỔ CHỨC',
//     description: '',
//     subDescription: 'Mitsubishi Motors Việt Nam (MMV) & Nhà Phân Phối AMC  vinh dự là nhà đồng hành cùng Chương trình “Mua Sắm Thật Xôm – Rước Xe Thật Xịn” do SC VivoCity tổ chức, [...]',
//     photoURL: 'https://www.mitsubishi-motors.com.vn/w/wp-content/uploads/2020/01/z1708923563120_1be4dcbf913700b5fcd91d4beca7969a.jpg',
//     type: 'default'
//   },
// ];
const HomePage = () => {
  const {getAllNews} = useNews();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const data = await getAllNews();
      setNews(data);
      setLoading(false)
    }

    fetchData();
  }, []);
  if (loading) {
    return <Spinner style={{paddingTop: 20}} size={'default'}/>
  }
  return <div className='home-page'>
    <div className='carousel'>
      <Carousel autoplaySpeed={3000} autoplay>
        <div>
          <img
            width="1292" height="500"
            src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/banner-new-triton-min.jpg"
            data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/banner-new-triton-min.jpg"
            className="attachment-original size-original lazy-load-active" alt=""
            sizes="(max-width: 1920px) 100vw, 1920px"/>
        </div>
        <div>
          <img
            width="1292" height="500"
            src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/banner-outlander-min.jpg"
            data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/banner-outlander-min.jpg"
            className="attachment-original size-original lazy-load-active" alt=""
            sizes="(max-width: 1920px) 100vw, 1920px"/>
        </div>
        <div>
          <img width="1292" height="500"
               src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/banner-Pajero-sport-min.jpg"
               data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/banner-Pajero-sport-min.jpg"
               className="attachment-original size-original lazy-load-active" alt=""
               sizes="(max-width: 1920px) 100vw, 1920px"/>
        </div>
      </Carousel>
    </div>
    <div className='container'>
      <div className='news'>
        <div className="grid-inner">
          <h3 className="title-block">
            <span>Thông tin nổi bật</span>
          </h3>
          <div style={{paddingBottom: 20}}>
            <TabNews news={news}/>
          </div>
          <h3 className="title-block">
            <span>Sản phẩm</span>
          </h3>
          <div>
            <TabSanpham/>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default HomePage;