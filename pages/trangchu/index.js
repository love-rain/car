import React from 'react';
import {Carousel} from "antd";

import "./trungchu.less"

const listProduct = [
  {
    name: 'Atrrage',
    photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-attrage-360x145-min.png",
    description: 'Mẫu xe dành cho cho doanh nhân trẻ, phụ nữ thành đạt, gia đình trẻ. Phục vụ việc đi lại hằng ngày, Shopping, đi du lịch, thăm hỏi bạn bè và người thân.'
  },
  {
    name: 'Mirage',
    photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-mirage-360x145-min.png",
    description: 'Mẫu xe dành cho phụ nữ thành đạt, gia đình phục vụ đi lại hàng ngày, shopping, đưa đón con cái đi học, phục vụ mục đích thư giãn và giải trí.'
  },
  {
    name: 'Outlander',
    photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-outlander-360x145-min.png",
    description: 'Mẫu xe dành cho doanh nhân trẻ thành đạt, gia đình trẻ mong muốn sở hữu một chiếc xe gầm cao rộng rãi để di chuyển hàng ngày cùng những chuyến du lịch cho cả gia đình.'
  },
  {
    name: 'Pajero Sport',
    photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-new-pajero-sport-360x145-min.png",
    description: 'Mẫu xe dành cho doanh nghiệp vừa và lớn, bộ ngành nhà nước, các ngân hàng, doanh nghiệp tín dụng, gia đình lớn phục vụ công việc và đi lại hàng ngày cũng như đi du lịch.'
  },
  {
    name: 'New Triton',
    photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/Thumb-newTriton-360x145-min.png",
    description: 'Khách hàng có sở thích du lịch cần một chiếc xe khỏe, công suất lớn, tiết kiệm nhiên liệu và bền bỉ. Dành cho doanh nghiệp về xây dựng, khai thác mỏ, cơ khí chế tạo máy.'
  },
  {
    name: 'Xpander',
    photoURL: "https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thumb-xpander-360x145-min.png",
    description: 'Mẫu xe dành cho chủ doanh nghiệp nhỏ, taxi, gia đình cần một chiếc xe 7 chỗ rộng rãi, tiết kiệm nhiên liệu phục vụ nhu cầu đi lại hằng ngày và du lịch giải trí.'
  },
];
const HomePage    = () => {
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
    <div className="text-center">
      <p>
        <img className="alignnone size-full wp-image-2759 aligncenter lazy-load-active"
             src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-video-min.png"
             data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-video-min.png"
             alt="" width="362" height="50"/>
      </p>
      <div style={{display: 'flex', justifyContent: ' center'}}>
      </div>
      <iframe
        style={{paddingRight: 10}}
        title="Xưởng dịch vụ Mitsubishi Kim Liên Hà Nội | Dịch vụ sửa chữa Ô tô| Mitsubishi Kim Liên Hà Nội"
        width="500" height="300" src="https://www.youtube.com/embed/_1f_Adsa3aU?feature=oembed"
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""/>
      <iframe
        title="Mitsubishi New Triton 2019 - Mạnh mẽ vượt trội (TVC) | Mitsubishi Kim Liên Hà Nội"
        width="500" height="300" src="https://www.youtube.com/embed/Og0dxlGeWKg?feature=oembed"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""/>
    </div>
    <div style={{paddingTop: 20}} className="text-center">
      <p style={{paddingBottom: 10}}>
        <img
          className="aligncenter size-full wp-image-2755 lazy-load-active"
          src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-quy-trinh-mua-xe-min.png"
          data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-quy-trinh-mua-xe-min.png"
          alt="" width="382" height="50"/>
      </p>
      <div className="quy-trinh">
        <div style={{display: 'flex', paddingBottom: 10, justifyContent: 'center'}}>
          <div style={{maxWidth: 320, margin: 10}}>
            <img
              width="200" height="83"
              src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/lien-he-dai-ly-min.png"
              data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/lien-he-dai-ly-min.png"
              className="attachment-medium size-medium lazy-load-active" alt=""/>
            <p style={{textAlign: 'left', paddingTop: 10, fontFamily: '"Open Sans", sans-serif', lineHeight: '1.6'}}>Quý
              khách có 2 lựa chọn: Đến trực tiếp Showroom hoặc liên hệ Hotline để được
              hỗ trợ tư vấn xe theo
              nhu cầu.</p>
          </div>
          <div style={{maxWidth: 320, margin: 10}}>
            <img width="200" height="83"
                 src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/tu-van-tai-chinh-min.png"
                 data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/tu-van-tai-chinh-min.png"
                 className="attachment-medium size-medium lazy-load-active" alt=""/>
            <p style={{
              textAlign: 'left',
              paddingTop: 10,
              fontFamily: '"Open Sans", sans-serif',
              lineHeight: '1.6'
            }}>Quý khách có 2 lựa chọn: Đến trực tiếp Showroom hoặc liên hệ Hotline để được
              hỗ trợ tư vấn xe theo
              nhu cầu.</p>
          </div>
          <div style={{maxWidth: 320, margin: 10}}>
            <img width="200" height="83"
                 src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/tu-van-chon-xe-min.png"
                 data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/tu-van-chon-xe-min.png"
                 className="attachment-medium size-medium lazy-load-active" alt=""/>
            <p style={{
              textAlign: 'left',
              paddingTop: 10,
              fontFamily: '"Open Sans", sans-serif',
              lineHeight: '1.6'
            }}>Nếu Quý khách mua xe trả góp, Đại lý sẽ tư vấn cho Quý khách về thủ tục trả góp và vay vốn ngân
              hàng.</p>
          </div>
        </div>
        <div style={{display: 'flex', paddingBottom: 10, justifyContent: 'center'}}>
          <div style={{maxWidth: 320, margin: 10}}>
            <img
              width="200" height="83"
              src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/dat-coc-min.png"
              data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/dat-coc-min.png"
              className="attachment-medium size-medium lazy-load-active" alt=""/>
            <p
              style={{textAlign: 'left', paddingTop: 10, fontFamily: '"Open Sans", sans-serif', lineHeight: '1.6'}}>Giúp
              chúng tôi giữ xe cho Quý khách vì không phải chiếc xe giống như yêu cầu của Quý khách nào cũng
              có sẵn.</p>
          </div>
          <div style={{maxWidth: 320, margin: 10}}>
            <img
              width="200" height="83"
              src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thanh-toan-min.png"
              data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/thanh-toan-min.png"
              className="attachment-medium size-medium lazy-load-active" alt=""/>
            <p style={{textAlign: 'left', paddingTop: 10, fontFamily: '"Open Sans", sans-serif', lineHeight: '1.6'}}>
              Giúp tư vấn viên chủ động làm trước toàn bộ các thủ tục giấy tờ như: hóa đơn, giấy tờ bàn giao,
              phiếu xuất xưởng.</p>
          </div>
          <div style={{maxWidth: 320, margin: 10}}>
            <img
              width="200" height="83"
              src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/ban-giao-xe-min.png"
              data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/ban-giao-xe-min.png"
              className="attachment-medium size-medium lazy-load-active" alt=""/>
            <p style={{
              textAlign: 'left',
              paddingTop: 10,
              fontFamily: '"Open Sans", sans-serif',
              lineHeight: '1.6'
            }}>Mitsu KLHN sẽ tiến hành làm lễ bàn giao xe cho Quý khách hàng bất cứ khi nào quý khách thấy phù hợp
              nhất.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p style={{textAlign: 'center', paddingBottom: 10}}>
        <img
          src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-san-pham-danh-cho-min.png"
          data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-san-pham-danh-cho-min.png"
          alt="" width="428" height="50"/>
      </p>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {listProduct.map(item => {
          return <div style={{maxWidth: 320, margin: 10}}>
            <img
              width="320" height="145"
              src={item.photoURL}
              data-src={item.photoURL}
              alt=""/>
            <h2 className='text-center'>
              <strong>{item.name}</strong>
            </h2>
            <p>{item.description}</p>
          </div>
        })}
      </div>
    </div>
    <div className='prize'>
      <p className='text-center'>
        <img
          className="aligncenter size-full wp-image-2753 lazy-load-active"
          src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-giai-thuong-min.png"
          data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/mitsu-giai-thuong-min.png"
          alt="" width="362" height="50"/>
      </p>
      <div className='text-center'>
        <img
          style={{border: '1px solid #f1f1f1'}}
          width="800" height="1040"
          src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/chung-nhan-dai-ly-mitsu-pvd-min.jpg"
          data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/09/chung-nhan-dai-ly-mitsu-pvd-min.jpg"
          className="attachment-original size-original lazy-load-active" alt=""
          sizes="(max-width: 800px) 100vw, 800px"/>
      </div>
    </div>
    <div className="support">
      <h2 className='text-center'>
        <strong>Thông tin hỗ trợ</strong>
      </h2>
      <p className='text-center'>
        <strong>Gọi để được tư vấn về sản phẩm</strong>
      </p>
      <div>
        <div className="contact">
          <div className='content'>
            <p>
              <img
                src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/07/support-icon-2.png"
                data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/07/support-icon-2.png"
                alt="" width="47" height="45"/>
            </p>
            <h2 className='text-center'>
              <a href="tel:0966745555">
                <span style={{color: '#e11428'}}>
                  <strong>097 364 5596</strong>
                </span>
              </a>
            </h2>
          </div>
          <div className='content'>
            <p>
              <img
                src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/07/support-icon-3.png"
                data-src="https://mitsubishikimlienphamvandong.com.vn/wp-content/uploads/2019/07/support-icon-3.png"
                alt="" width="47" height="45"/>
            </p>
            <h2 className='text-center'>
              <span style={{color: '#e11428'}}>
                <strong>vuduynam@gmail.com</strong>
              </span>
            </h2>
          </div>
        </div>
        <div className="text-center">
          <p>
            <strong>Showroom mở cửa từ Thứ Hai đến Chủ Nhật – Từ 8h Đến 17h30</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
};

export default HomePage;