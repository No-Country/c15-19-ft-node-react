import React from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, List, Avatar } from "antd";
import "./comments.css";

const onFinish = (values) => {
  console.log("Received values of form:", values);
};

function Comments() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <div className="comments">
      <div className="comments__container">
        <Form
          name="comments"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item className="tester">
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
          <div className="commenst__message-container">
            <Input.TextArea
              className=" comments__input"
              size="large"
              placeholder="Agrega tu comentario aquí"
            />
            <Form.Item className="comments__button">
              <Button
                htmlType="submit"
                type="primary"
                icon={<SendOutlined />}
                size="large"
                ghost={true}
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Comments;
