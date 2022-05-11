import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import context from "../../../context/app-context";
import { getPosts, deletePost } from "../../../services/users";

import PostItem from "./PostItem";
import Warning from "../Warning";
import { Row, Col, Container, Modal, Button } from "ebs-design";
import "./PostTest.scss";

const Posts: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [refreshPosts, setRefreshPosts] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [warningId, setWarningId] = useState(0);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, [refreshPosts]);

  const redirectToFormPage = () => {
    navigate("/create");
  };

  const handleWarning = () => {
    setWarningModal(!warningModal);
  };
  // refresh la lista userilor

  const handlePostsList = () => {
    setRefreshPosts(!refreshPosts);
  };

  const deletePostItem = (id: number) => {
    setWarningId(id);
    handleWarning();
    handlePostsList();
  };

  // primeste id-ul item-ului si il seteaza in state
  const handleEditPost = (id: number) => {
    navigate(`/posts/${id}/edit`);
  };

  const postList = posts.map(({ id, title, area, link, date }) => (
    <Col size={3} key={id}>
      <PostItem
        key={id}
        id={id}
        title={title}
        area={area}
        link={link}
        date={date}
        handleWarning={handleWarning}
        handleEditPost={handleEditPost}
        deletePostItem={deletePostItem}
      />
    </Col>
  ));

  return (
    <div>
      {agreement || window.localStorage.length > 0 ? (
        <div className="post-container">
          <Button
            type="ghost"
            buttonClass="ebs-button--medium ebs-button butt"
            onClick={redirectToFormPage}
          >
            Add a post
          </Button>
          {warningModal && (
            <Modal
              closeOnClickOutside
              header=""
              mask
              open
              size="small"
              title="Do rou really want to delete the item?"
              onClose={handleWarning}
              className="modal"
            >
              <Warning
                warningId={warningId}
                onClose={handleWarning}
                handleDelete={deletePost}
                handleList={handlePostsList}
              />
            </Modal>
          )}
          {posts && (
            <Container>
              <Row>{postList}</Row>
            </Container>
          )}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default Posts;
