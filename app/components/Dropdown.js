import React, {useCallback} from "react";
import {
  Dropdown,
} from "antd";

import "./styles.less"

const DropdownCustom = (props) => {
  return <Dropdown overlay={props.items}>
    <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {props.name}
    </span>
  </Dropdown>
};

export default DropdownCustom;