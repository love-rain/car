import React from 'react'
import {Button, Modal} from "antd";

const ModalCustom = (props) => {
  return <div>
    <span>{props.title}</span>
    <Modal
      visible={props.visible}
      title={props.title}
      onOk={props.onOk}
      onCancel={props.onCancel}
      footer={[
        props.footer
      ]}
    >
      {props.children}
    </Modal>
  </div>
};

export default ModalCustom;