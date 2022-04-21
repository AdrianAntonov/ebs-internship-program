import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import context from "../../../context/app-context";
// import styles from "./Posts.module.css";
import PostForm from "./PostForm";
import { getPosts, deletePost } from "../../../services/users";
import PostItem from "./PostItem";
import Modal from "../../Modal/Modal";
import Warning from "./Warning";

const Posts: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);

  const [posts, setPosts] = useState([]);
  const [refreshPosts, setRefreshPosts] = useState(false);
  const [modal, setModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, [refreshPosts]);

  // console.log(posts);

  // include modalul t|f, refresh lista
  const onClose = () => {
    setModal(!modal); // toggle la modal
    handlePostsList();
  };

  const handleWarning = () => {
    setWarningModal(!warningModal);
  };
  // refresh la lista userilor

  const handlePostsList = () => {
    setRefreshPosts(!refreshPosts);
  };

  // pentru click pe butonul Submit la AddingForm
  // const handleAddUserButton = () => {
  //   onClose();
  // };
  const confirmPostDelete = () => {
    setConfirmDelete(!confirmDelete);
  };

  const deletePostItem = (id: number) => {
    if (confirmDelete) {
      deletePost(id);
    }
    handleWarning();
    handlePostsList();
  };

  // primeste id-ul item-ului si ilseteaza in state
  const handleEditPost = (id: number) => {
    console.log("handleEditUser");
    // setEditId(id);
    // setModalAdd(!modalAdd);
  };

  const postList = posts.map(({ id, title, area, link, date }) => (
    <PostItem
      id={id}
      title={title}
      area={area}
      link={link}
      date={date}
      // handlePostsList={handlePostsList}
      handleWarning={handleWarning}
      handleEditPost={handleEditPost}
      deletePostItem={deletePostItem}
    />
  ));

  return (
    <>
      {agreement || window.localStorage.length > 0 ? (
        <>
          <button onClick={() => setModal(!modal)}>Add a post</button>
          {modal && (
            <Modal onClose={onClose}>
              <PostForm onClose={onClose} />
            </Modal>
          )}
          {warningModal && (
            <Modal onClose={handleWarning}>
              <Warning
                onClose={handleWarning}
                confirmPostDelete={confirmPostDelete}
              />
            </Modal>
          )}
          {posts && postList}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Posts;
