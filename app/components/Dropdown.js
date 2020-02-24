import React                  from "react";
import {Dropdown, Menu} from "antd";
import "./styles.less"
const menu     = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
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