// import { useState } from "react";
// import Modal from "../../Modal/Modal";
import { Card, Space, Label } from "ebs-design";
import "./PostTest.scss";

interface IpostItemProps {
  id: number;
  title: string;
  area: string;
  link: string;
  date: string;
  handleEditPost: (id: number) => void;
  handleWarning: () => void;
  deletePostItem: (id: number) => void;
}

const PostItem: React.FC<IpostItemProps> = ({
  id,
  title,
  area,
  link,
  date,
  handleWarning,
  handleEditPost,
  deletePostItem,
}) => {
  const handleDeletePostItem = (id: number) => {
    handleWarning();

    deletePostItem(id);
  };

  const handleEditPostItem = (id: number) => {
    handleEditPost(id);
    console.log("editUser, edit button");
  };

  return (
    <Card className="card">
      <div className="information">
        <p className="paragraph">{id}</p>
        <span className="info">Title</span>
        <p className="paragraph" id="title">
          {title}
        </p>
        <span className="info">Post content</span>
        <p className="paragraph">{area}</p>
        <span className="info">Link</span>
        <p className="paragraph">{link}</p>
        <span className="info">Date</span>
        <p className="paragraph">{date}</p>
      </div>

      <Space
        align="center"
        justify="center"
        size="medium"
        className="buttonsSpace"
      >
        <Label
          status="info"
          text="Edit"
          type="fill"
          onClick={() => handleEditPostItem(id)}
          className="label"
        ></Label>
        <Label
          status="danger"
          text="Delete"
          type="fill"
          onClick={() => handleDeletePostItem(id)}
          className="label"
        ></Label>
      </Space>
    </Card>
  );
};

export default PostItem;
