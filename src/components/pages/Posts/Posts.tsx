import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import context from "../../../context/app-context";
// import styles from "./Posts.module.css";
import PostForm from "./PostForm";

const Posts: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);
  // const [title, setTitle] = useState("");
  // const [post, setPost] = useState("");
  // const [title, setTitle] = useState("");

  return (
    <>
      {agreement || window.localStorage.length > 0 ? (
        <>
          <PostForm />
          {/* <h4>Posts Form</h4>
          <form className={styles.formular} onSubmit={handleSubmitPost}>
            <input type="text" required />
            <textarea name="post" placeholder="Post here..." required />
            <input type="text" />
            <input type="date" className={styles.date} />
            <button>Post</button>
          </form> */}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Posts;
