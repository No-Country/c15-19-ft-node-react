import React, { useState } from "react";
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
  MoreOutlined,
  UserOutlined,
  LikeTwoTone,
} from "@ant-design/icons";
import { Card, Space, Avatar, Image } from "antd";
import "./CardUser.css";
import { useNavigate } from "react-router-dom";

function CardUser(data) {
  const { avatar, title, media, description, user } = data;

  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const [likes, setLike] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleShowMenu = () => {
    setMenu(!menu);
    console.log("soy otro botoncito que no hace nada", !menu);
  };

  const handleCardLike = () => {
    setLike(!likes);
  };

  const handleShowComments = () => {
    setShowComments(!showComments);
    navigate("/home/comments");
  };

  const handleShowShare = () => {
    setShowShare(!showShare);
    console.log("pulsame y te comparto algo", !showShare);
  };

  const handleProfile = () => {
    setProfile(!profile);
    navigate(`/profile/${user}`);
  };

  const imagePlaceholder =
    "https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg";

  const medias = media[0]?.url;

  return (
    <div className="flex flex-col m-4 z-0 relative card-user__container">
      <Space direction="vertical" size={16}>
        <Card
          bordered={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <>
            <div className="flex justify-between min-w-full">
              <Avatar
                className="card-user__avatar"
                src={avatar}
                icon={<UserOutlined className="card-user__avatar-icon " />}
                style={{ backgroundColor: "#87d068" }}
                onClick={handleProfile}
              />
              <MoreOutlined
                className="card-user__icon-lined"
                onClick={handleShowMenu}
              />
            </div>

            <div className="items-start card-user__description">
              <h2 className="card-user__title"> {title} </h2>
              <p className="card-user__subtitle"> {description} </p>
            </div>

            <div className="card-user__image-container">
              <Image
                alt={title}
                src={medias || imagePlaceholder}
                className="object-cover	w-full h-full"
              />
            </div>
            <div className="flex justify-start card-user__social">
              <button onClick={handleCardLike}>
                {likes ? (
                  <LikeTwoTone size={15} className="card-user__icon" />
                ) : (
                  <LikeOutlined className="card-user__icon" />
                )}
                <span className="card-user__number">{likes ? "1" : "0"}</span>
              </button>

              <button type="button" onClick={handleShowComments}>
                <CommentOutlined className="card-user__icon card-user__icon_margin" />
              </button>

              <button type="button" onClick={handleShowShare}>
                <ShareAltOutlined className="card-user__icon card-user__icon_margin" />
              </button>
            </div>
          </>
        </Card>
      </Space>
    </div>
  );
}

export default CardUser;
