import { Card, Space, Button } from "ebs-design";
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
        <Button
          onClick={() => handleEditPostItem(id)}
          buttonClass="ebs-button--medium ebs-button butt"
          type="primary"
        >
          Edit
        </Button>
        <Button
          onClick={() => handleDeletePostItem(id)}
          buttonClass="ebs-button--medium ebs-button butt"
          type="dark"
        >
          Delete
        </Button>
      </Space>
    </Card>
  );
};

export default PostItem;
