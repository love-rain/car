import React from "react";
import {List} from 'antd';
import "./styles.less"
import Link from "next/link";

const TabNews = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={props.news}
        footer={null}
        renderItem={item => {
          return <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src={`${item.photoURL}`}
              />
            }
          >
            <List.Item.Meta
              title={<Link href={`/tintuc/${item.id}`}>{item.name}</Link>}
              description={item.subDescription}
            />
            {item.content}
          </List.Item>
        }}/>
    </div>)
};

export default TabNews;
