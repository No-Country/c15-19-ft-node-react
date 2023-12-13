import React from "react";
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Card, Space, Avatar, Image } from "antd";
import "./CardUser.css";

const { Meta } = Card;

function CardUser(data) {
  const { avatar, title, banner, description, socialNetwork } = data;

  return (
    <div className="flex flex-col m-4">
      <Space direction="vertical" size={16}>
        <Card
          size="small"
          bordered={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <>
            <div className="flex justify-between">
              <Avatar src={avatar} />
              <MoreOutlined />
            </div>

            <div className="items-start cardUserDescription">
              <Meta title={title} description={description} />
            </div>

            <div className="cardUserImageContainer">
              <Image
                alt="example"
                src={banner}
                className="object-cover	w-full h-full"
              />
            </div>
            <div className="flex justify-start cardUserSocial">
              <div>
                <LikeOutlined size={10} className="cardUserIcon" />
                {socialNetwork.likes}
              </div>

              <div>
                <CommentOutlined className="cardUserIcon" size={10} />
                {socialNetwork.comments}
              </div>
              <ShareAltOutlined size={10} />
            </div>
          </>
        </Card>
      </Space>
    </div>
  );
}

export default CardUser;
