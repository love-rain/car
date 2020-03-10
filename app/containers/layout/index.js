import React, {useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import {
  Col,
  Layout, List,
  Menu, Row,
} from 'antd';
import Link from "next/link";

import DropdownCustom from "../../components/Dropdown";
import "./layout.less"
import useProduct from "../../hook/useProduct";

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
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProduct();
      setListProduct(result)
    }

    fetchData()
  }, []);
  const [listMenu] = useState([
    {link: 'trangchu', label: 'Trang chủ'},
    {link: 'sanpham', label: 'Sản phẩm',},
    {link: 'thongtin', label: 'Thông tin'},
    // {key: 'banggia', label: 'Bảng giá'},
    {link: 'dichvu', label: 'Dịch vụ', component: <DropdownCustom items={items} name={'Dịch vụ'}/>}
  ]);
  const [currentTab] = useState(pathName || 'trangchu');
  const onSelectTab = useCallback((tab) => {
    if (tab.link === 'dichvu') {
      return;
    }
    router.push(`/${tab.link}`)
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
    <Footer style={{textAlign: 'center', backgroundColor: '#000000'}}>
      <Row>
        <Col span={6}>
          <List
            header={<span style={{fontSize: '20px', color: '#fff', borderBottom: '2px solid'}}>Sản phẩm</span>}
            size="small"
            dataSource={listProduct}
            renderItem={item => <List.Item
              onClick={() => router.push(`/sanpham/${item.id}`)}
              style={{color: '#fff', cursor: 'pointer'}}>{item.name}</List.Item>}
          />
        </Col>
        <Col span={6}>
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
        </Col>
      </Row>
    </Footer>
  </Layout>
};
export default MainLayOut;