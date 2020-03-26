import React from "react";
import {Row, Col} from 'antd';

const style = {background: '#0092ff', padding: '8px 0'};

const Test = () => {
  return <div>
    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
      <Col className="gutter-row" span={6}>
        <div style={style}>Test responsive Test responsive Test responsive Test responsive Test responsive</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <div>Hozi</div>
    <Row gutter={{xs: 1, sm: 1, md: 2, lg: 4, xl: 4, xxl: 4}}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </div>
};

export default Test;