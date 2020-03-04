import React, {useCallback, useState} from 'react';
import {useRouter} from 'next/router'
import {
  Layout,
  Menu,
} from 'antd';
import Link from "next/link";

import DropdownCustom from "../../components/Dropdown";

const {Header, Content, Footer} = Layout;
const items                     = (
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
const MainLayOut                = (props) => {
  const router       = useRouter();
  const pathName     = router.pathname.slice(1);
  const [listMenu]   = useState([
    {key: 'trangchu', label: 'Trang chủ'},
    {key: 'sanpham', label: 'Sản phẩm',},
    {key: 'thongtin', label: 'Thông tin'},
    // {key: 'banggia', label: 'Bảng giá'},
    {key: 'dichvu', label: 'Dịch vụ', component: <DropdownCustom items={items} name={'Dịch vụ'}/>}
  ]);
  const [currentTab] = useState(pathName || 'trangchu');
  const onSelectTab  = useCallback((tab) => {
    if (tab.key === 'dichvu') {
      return;
    }
    router.push(`/${tab.key}`)
  }, []);
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
            onClick={() => onSelectTab(item)}
            key={item.key}>
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
    <Footer style={{textAlign: 'center'}}>Car @2020</Footer>
  </Layout>
};
export default MainLayOut;