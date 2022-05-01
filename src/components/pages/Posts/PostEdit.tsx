import { useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { getPostByID, editPost } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
import styles from "./Posts.module.css";

// interface IPostAddingProp {
//   onClose: () => void;
//   // editId: number;
// }
// const RedirectPostForm = ({ onClose }: IPostAddingProp) => {
const PostEdit = () => {
  const [date] = useState("");
  const [title] = useState("");
  const [link] = useState("");
  const [area] = useState("");
  const [postState, setPostState] = useState({
    title,
    area,
    link,
    date,
  });

  const { state } = useLocation();
  console.log(typeof state);

  const navigate = useNavigate();

  const { user } = useContext(context);

  useEffect(() => {
    getPostByID(state).then((res) => setPostState(res));
    console.log("PostEdit useEffect");
  }, [state]);

  const checkInputs =
    !postState.title || !postState.area || !postState.link || !postState.date;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    e.preventDefault();

    setPostState((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setPostState({ title: "", area: "", link: "", date: "" });
    console.log("reset");
  };

  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("posts");

    editPost(state, postState);
    reset();
    console.log(postState);
    navigate("/posts");
  };

  return (
    <>
      {user.agreement ? (
        <form className={styles.formular} onSubmit={handleSubmitPost}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              required
              id="title"
              value={postState.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="text">Post here</label>
            <textarea
              name="area"
              id="text"
              placeholder="Post here..."
              required
              value={postState.area}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Photo link">Photo link</label>
            <input
              type="text"
              name="link"
              value={postState.link}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={postState.date}
              onChange={handleChange}
            />
          </div>
          <button disabled={checkInputs}>Post</button>
        </form>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default PostEdit;
