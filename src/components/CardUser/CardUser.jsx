import React, { useState } from "react";
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
  MoreOutlined,
  UserAddOutlined,
  LikeTwoTone,
} from "@ant-design/icons";
import { Card, Space, Avatar, Image } from "antd";
import "./CardUser.css";

const { Meta } = Card;

function CardUser(data) {
  const { avatar, title, media, description, comments } = data;

  const [likes, setLike] = useState(false);

  const handleCardLike = () => {
    setLike(!likes);
  };

  const imagePlaceholder =
    "https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg";

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
              <Avatar
                src={avatar}
                icon={<UserAddOutlined />}
                style={{ backgroundColor: "#87d068" }}
              />
              <MoreOutlined />
            </div>

            <div className="items-start cardUserDescription">
              <Meta title={title} description={description} />
            </div>

            <div className="cardUserImageContainer">
              <Image
                alt="example"
                src={media[0]?.url || imagePlaceholder}
                className="object-cover	w-full h-full"
              />
            </div>
            <div className="flex justify-start cardUserSocial">
              <button onClick={handleCardLike}>
                {likes ? (
                  <LikeTwoTone size={15} className="cardUserIcon" />
                ) : (
                  <LikeOutlined className="cardUserIcon" size={10} />
                )}
                {likes ? "1" : "0"}
              </button>

              <div>
                <CommentOutlined className="cardUserIcon" size={10} />
                {comments}
              </div>
              <ShareAltOutlined size={25} />
            </div>
          </>
        </Card>
      </Space>
    </div>
  );
}

export default CardUser;
