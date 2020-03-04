import React from "react";
import {Spin} from 'antd';

const Spinner = (props) => {
  return <div style={{textAlign: 'center'}}>
    <Spin size={props.size || 'small'}/>
  </div>
};

export default Spinner;