import React, {useState} from 'react';
import {
  Layout,
  Menu,
} from 'antd';
import HomePage from "../trangchu";
import Product from "../sanpham";
import Information from "../thongtin";
import DropdownCustom from "../../components/Dropdown";
import Link from "next/link";

const {Header, Content, Footer} = Layout;

const MainLayOut = (props) => {
  const [listMenu]                  = useState([
    {key: 'trangchu', label: 'Trang chủ'},
    {key: 'sanpham', label: 'Sản phẩm',},
    {key: 'thongtin', label: 'Thông tin'},
    {key: 'dichvu', label: 'Dịch vụ', component: <DropdownCustom name={'Dịch vụ'}/>}
  ]);
  const [currentTab, setCurrentTab] = useState('home');
  return <Layout>
    <Header style={{position: 'fixed', zIndex: 1, width: '100%', background: '#fff'}}>
      <Menu
        theme='light'
        mode="horizontal"
        defaultSelectedKeys={[currentTab]}
        style={{lineHeight: '64px', display: 'flex', justifyContent: 'space-between'}}
      >
        {listMenu.map(item => {
          return <Menu.Item
            onClick={() => setCurrentTab(item.key)}
            key={item.key}>
            <Link href={`/${item.key}`}>
              {item.component ? item.component : item.label}
            </Link>
          </Menu.Item>
        })}
      </Menu>
    </Header>
    <Content style={{marginTop: 64, padding: '20px 50px'}}>
      <div style={{background: '#fff', padding: 24, minHeight: 655}}>
        {props.children}
      </div>
    </Content>
    <Footer style={{textAlign: 'center'}}>Car @2020</Footer>
  </Layout>
};
export default MainLayOut;