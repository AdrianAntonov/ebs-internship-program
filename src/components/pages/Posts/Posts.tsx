import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import context from "../../../context/app-context";
import { usePostsData } from "../../../hooks/useData";
import ConfirmModal from "../Users/ConfirmModal/ConfirmModal";
import ConfirmModalHeader from "../Users/ConfirmModal/ConfirmModalHeader";
import ConfirmModalContent from "../Users/ConfirmModal/ConfirmModalContent";
import PostItem from "./PostItem";
import { Row, Col, Container, Button } from "ebs-design";
import "./PostTest.scss";

const Posts: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);

  const navigate = useNavigate();

  const [warningModal, setWarningModal] = useState(false);
  const [warningId, setWarningId] = useState(0);

  const onSuccess = (data: []) => {
    console.log("SUCCESS!!!", data);
  };
  const onError = (error: string) => {
    console.log("ERROR!!!", error);
  };

  const { data } = usePostsData(onSuccess, onError);
  console.log(data);

  const redirectToFormPage = () => {
    navigate("/create");
  };

  const handleWarning = () => {
    setWarningModal(!warningModal);
  };

  const deletePostItem = (id: number) => {
    setWarningId(id);
    handleWarning();
  };

  // primeste id-ul item-ului si il seteaza in state
  const handleEditPost = (id: number) => {
    navigate(`/posts/${id}/edit`);
  };

  const modalHeader = (
    <div>
      <h3>WARNING!</h3>
    </div>
  );

  const modalContent = (
    <div>
      <h3>You are going to DELETE a post!</h3>
      <hr />
      <h4>Are you sure?</h4>
    </div>
  );

  const postList = data?.map(({ id, title, area, link, date }) => (
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
            <ConfirmModal
              info="posts"
              confirmID={warningId}
              cancellation="Cancel"
              acceptance="Delete"
              header={ConfirmModalHeader(modalHeader)}
              content={ConfirmModalContent(modalContent)}
              onClose={handleWarning}
            />
          )}
          {data && (
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
