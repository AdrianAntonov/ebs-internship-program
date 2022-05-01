import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import context from "../../../context/app-context";
import { getPosts } from "../../../services/users";
import PostItem from "./PostItem";
// import Modal from "../../Modal/Modal";
import Warning from "./Warning";
import { Row, Col, Container, Label, Modal } from "ebs-design";
import "./PostTest.scss";

const Posts: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [refreshPosts, setRefreshPosts] = useState(false);
  // const [modal, setModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [warningId, setWarningId] = useState(0);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, [refreshPosts]);

  // console.log(posts);

  const redirectToFormPage = () => {
    navigate("/create");
  };

  // const redirectToEditPage = (id: number) => {
  //   navigate("/`/posts/{id}/edit`");
  // };

  // include modalul t|f, refresh lista
  // const onClose = () => {
  //   setModal(!modal); // toggle la modal
  //   handlePostsList();
  // };

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
    navigate(`/posts/${id}/edit`, { state: id });
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
          <Label
            type="fill"
            status="success"
            text="Add a post"
            className="addButton"
            onClick={redirectToFormPage}
          ></Label>
          {warningModal && (
            // <Modal onClose={handleWarning}>
            //   <Warning
            //     onClose={handleWarning}
            //     warningId={warningId}
            //     handlePostsList={handlePostsList}
            //   />
            // </Modal>
            <Modal
              closeOnClickOutside
              header=""
              mask
              open
              size="small"
              title="Do rou really want to delete the post?"
              onClose={handleWarning}
              className="modal"
            >
              <Warning
                onClose={handleWarning}
                warningId={warningId}
                handlePostsList={handlePostsList}
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
