import { Card } from "antd";
import React from "react";
import "./comments.css";

const { Meta } = Card;

function Comments({ Comments, media, description }) {
  return (
    <div className=" comments">
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}

export default Comments;
