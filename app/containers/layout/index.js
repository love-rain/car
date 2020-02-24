import React, {useState} from 'react';
import {
  Layout,
  Menu,
} from 'antd';
import HomePage from "../trangchu";
import Product from "../sanpham";
import Information from "../thongtin";
import Service from "../dichvu";
import DropdownCustom from "../../components/Dropdown";

const {Header, Content, Footer} = Layout;

const MainLayOut = () => {
  const [listMenu]                  = useState([
    {key: 'home', label: 'Trang chủ'},
    {key: 'product', label: 'Sản phẩm',},
    {key: 'info', label: 'Thông tin'},
    {key: 'service', label: 'Dịch vụ', component: <DropdownCustom name={'Dịch vụ'} />}
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
            key={item.key}>{item.component ? item.component : item.label}</Menu.Item>
        })}
      </Menu>
    </Header>
    <Content style={{marginTop: 64, padding: '20px 50px'}}>
      <div style={{background: '#fff', padding: 24, minHeight: 655}}>
        {currentTab === 'home' && <HomePage/>}
        {currentTab === 'product' && <Product/>}
        {currentTab === 'info' && <Information/>}
        {currentTab === 'contact' && <Service/>}
      </div>
    </Content>
    <Footer style={{textAlign: 'center'}}>Car @2020</Footer>
  </Layout>
};
export default MainLayOut;