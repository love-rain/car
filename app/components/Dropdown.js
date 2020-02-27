import React from "react";
import {
  Dropdown,
  Menu
} from "antd";

import "./styles.less"
import Link from 'next/link'

const menu           = (
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
      <Link href="/dichvu/datlichbaoduong"> Đặt lịch bảo dưỡng</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/dichvu/cuuhogiaothong"> Cứu hộ giao thông</Link>
    </Menu.Item>
  </Menu>
);
const DropdownCustom = (props) => {
  return <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {props.name}
    </a>
  </Dropdown>
};

export default DropdownCustom;