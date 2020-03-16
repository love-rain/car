import React, {useCallback, useEffect, useState} from 'react';
import {BackTop, Button, Input, Select} from 'antd';
import {useRouter} from 'next/router'
import {
  Layout, List,
  Menu
} from 'antd';
import Link from "next/link";
import DropdownCustom from "../../components/Dropdown";
import "./layout.less"
import useProduct from "../../hook/useProduct";
import ModalCustom from "../../components/Modal";

const {Option} = Select;
const {Header, Content, Footer} = Layout;
const items = (
  <Menu>
    <Menu.Item>
      <Link href="/dichvu/baohanh">Chính sách bảo hành</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/dichvu/baoduong">Bảo dưỡng định kỳ</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/dichvu/phutung"> Phụ tùng chính hiệu</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/dichvu/suachua"> Sửa chữa</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/dichvu/datlichbaoduong">Đặt lịch bảo dưỡng</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/dichvu/cuuhogiaothong"> Cứu hộ giao thông</Link>
    </Menu.Item>
  </Menu>
);
const MainLayOut = (props) => {
  const router = useRouter();
  const {getAllProduct} = useProduct();
  const pathName = router.pathname.slice(1);
  const [listProduct, setListProduct] = useState([]);
  const [optionsService] = useState([
    {label: 'Chính sách bảo hành', link: '/dichvu/baohanh'},
    {label: 'Bảo dưỡng định kỳ', link: '/dichvu/baoduong'},
    {label: 'Phụ tùng chính hiệu', link: '/dichvu/phutung'},
    {label: 'Sửa chữa', link: '/dichvu/suachua'},
    {label: 'Đặt lịch bảo dưỡng', link: '/dichvu/datlichbaoduong'},
    {label: 'Cứu hộ giao thông', link: '/dichvu/cuuhogiaothong'},
  ]);
  const [optionsIntroduce] = useState([
    {label: 'Giới thiệu về Mitsubishi', link: '/gioithieu'},
    {label: 'Chính sách bảo mật', link: '/gioithieu/chinhsachbaomat'},
    {label: 'Điều khoản sử dụng', link: '/gioithieu/dieukhoansudung'},
  ]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [carSelect, setCarSelect] = useState('');
  const onSelectTab = useCallback((tab) => {
    if (tab.link === 'dichvu') {
      return;
    }
    if (tab.link === 'dangkylaithu') {
      setVisible(true);
      return;
    }
    router.push(`/${tab.link}`)
  }, []);
  const [listMenu] = useState([
    {link: 'trangchu', label: 'Trang chủ'},
    {link: 'sanpham', label: 'Sản phẩm',},
    {link: 'dichvu', label: 'Dịch vụ', component: <DropdownCustom items={items} name={'Dịch vụ'}/>},
    {link: 'gioithieu', label: 'Giới thiệu'},
    {link: 'dangkylaithu', label: 'Đăng ký lái thử'},
  ]);
  const [currentTab] = useState(pathName || 'trangchu');
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProduct();
      setListProduct(result)
    }

    fetchData()
  }, []);
  const handleOk = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const handleCancel = useCallback(() => {
    setVisible(false)
  }, []);
  const handleChangeCar = useCallback((value) => {
    setCarSelect(value)
  }, []);
  return <Layout className='layout'>
    <Header style={{position: 'fixed', zIndex: 1, width: '100%', background: '#fff'}}>
      <Menu
        theme='light'
        mode="horizontal"
        defaultSelectedKeys={[currentTab]}
        style={{lineHeight: '64px', display: 'flex', justifyContent: 'space-between'}}
      >
        {listMenu.map(item => {
          return <Menu.Item
            onClick={() => onSelectTab(item)}
            key={item.link}>
            {item.component ? item.component : item.label}
          </Menu.Item>
        })}
      </Menu>
    </Header>
    <Content style={{marginTop: 64, padding: '20px 50px'}}>
      <div style={{background: '#fff', padding: 24, minHeight: 655}}>
        {props.children}
      </div>
    </Content>
    <BackTop/>
    <Footer style={{display: 'flex', backgroundColor: '#000000'}}>
      <List
        header={<span style={{fontSize: '20px', color: '#fff', borderBottom: '2px solid'}}>Sản phẩm</span>}
        size="small"
        dataSource={listProduct}
        renderItem={item => <List.Item
          onClick={() => router.push(`/sanpham/${item.id}`)}
          style={{color: '#fff', cursor: 'pointer'}}>{item.name}</List.Item>}
      />
      <div style={{paddingLeft: 100}}>
        <List
          header={<span style={{fontSize: '20px', color: '#fff', borderBottom: '2px solid'}}>Dịch vụ</span>}
          size="small"
          dataSource={optionsService}
          renderItem={item => <List.Item
            onClick={() => {
              router.push(`${item.link}`)
            }}
            style={{color: '#fff', cursor: 'pointer'}}>{item.label}</List.Item>}
        />
      </div>
      <div style={{paddingLeft: 100}}>
        <List
          header={<span style={{fontSize: '20px', color: '#fff', borderBottom: '2px solid'}}>Giới thiệu</span>}
          size="small"
          dataSource={optionsIntroduce}
          renderItem={item => <List.Item
            onClick={() => {
              router.push(`${item.link}`)
            }}
            style={{color: '#fff', cursor: 'pointer'}}>{item.label}</List.Item>}
        />
      </div>
    </Footer>
    {visible && <ModalCustom
      title={<div style={{textAlign: 'center'}}>Đăng ký lái thử</div>}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={<div>
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          OK
        </Button>
      </div>}
    >
      <div style={{paddingBottom: 10}}>
        <strong>
          <span style={{color: '#ed1c24', fontSize: '16px'}}>Chú ý: Liên hệ để có giá ưu đãi nhất</span>
        </strong>
      </div>
      <span>
        <a href="tel:0973645596" target="_self"
           className="hotline">
            <span style={{fontWeight: 800}}>HOTLINE BÁO GIÁ: 097 364 5596</span>
          </a> 
      </span>
      {/*<Input style={{marginBottom: 15}} placeholder="Họ và tên*"/>*/}
      {/*<Input style={{marginBottom: 15}} placeholder="Số điện thoại*"/>*/}
      {/*<Input style={{marginBottom: 15}} placeholder="Email*"/>*/}
      {/*<Select placeholder="Chọn xe muốn lái thử" style={{width: '50%'}} onChange={handleChangeCar}>*/}
      {/*  {listProduct.map((product, index) => {*/}
      {/*    return <Option key={index} value={product.name}>{product.name}</Option>*/}
      {/*  })}*/}
      {/*</Select>*/}
    </ModalCustom>
    }
  </Layout>
};
export default MainLayOut;