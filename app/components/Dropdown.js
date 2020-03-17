import React from "react";
import {
  Dropdown,
} from "antd";

import "./styles.less"

const DropdownCustom = (props) => {
  return <Dropdown overlay={props.items} className="ant-dropdown-link">
    <span onClick={e => e.preventDefault()} className="ant-dropdown-link">
      {props.name}
    </span>
  </Dropdown>
};

export default DropdownCustom;