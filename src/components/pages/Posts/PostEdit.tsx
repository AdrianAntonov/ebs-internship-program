import { useEffect, useState } from "react";
import {
  useNavigate,
  // useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
import { getPostByID, editPost } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
// import styles from "./Posts.module.css";
import { Form, Input, Textarea, DatePicker, Button, useForm } from "ebs-design";

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
  // const location = useLocation();
  // console.log(location);
  const { id } = useParams();
  console.log(typeof id);
  // console.log(params);

  // const { state } = useLocation();
  // console.log(typeof state);

  const navigate = useNavigate();

  const { user } = useContext(context);

  const [form] = useForm();
  console.log(form);
  console.log(form.getFieldsValue());

  useEffect(() => {
    if (id) {
      getPostByID(id).then((res) => setPostState(res));
    }
  }, [id]);

  form.setFieldsValue(postState);

  // const checkInputs =
  //   !postState.title || !postState.area || !postState.link || !postState.date;

  // const handleChange = (
  //   e:
  //     | React.ChangeEvent<HTMLTextAreaElement>
  //     | React.ChangeEvent<HTMLInputElement>
  //   // | React.SyntheticEvent<HTMLDivElement, Event>
  // ) => {
  //   const { name, value } = e.target;

  //   e.preventDefault();

  //   setPostState((prev) => ({ ...prev, [name]: value }));
  // };

  const reset = () => {
    setPostState({ title: "", area: "", link: "", date: "" });
    // console.log("reset");
  };

  const handleSubmitPost = () => {
    // editPost(state, postState);
    // Number(id);
    if (id) {
      editPost(id, form.getFieldsValue());
      reset();
      // console.log(postState);
      navigate("/posts");
    }
  };

  console.log(postState);

  return (
    <>
      {user.agreement ? (
        <Form
          form={form}
          controlOptions={{
            col: {
              size: 2,
            },
          }}
          labelOptions={{
            col: {
              size: 1,
            },
          }}
          type="vertical"
          onFinish={handleSubmitPost}
        >
          <Form.Field
            initialValue={postState.title}
            label="Title"
            name="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              size="small"
              // onChange={() => setValue()}
              // placeholder={postState.title}
              // value={postState.title}
            />
          </Form.Field>
          <Form.Field
            initialValue="blue"
            label="Content"
            name="area"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Textarea />
          </Form.Field>
          <Form.Field
            initialValue="blue"
            label="Link"
            name="link"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="small" />
          </Form.Field>
          <Form.Field
            // initialValue="blue"
            label="Date"
            name="date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              showTimeSelect
              small
              size="small"
              placeholderText="Date field"
              // value={postState.date}
              // onChange={handleChange}
              // dropdownMode="scroll"
            />
          </Form.Field>
          <Button
            onClick={() => handleSubmitPost()}
            buttonClass="ebs-button--medium ebs-button butt"
            type="ghost"
          >
            Post
          </Button>
        </Form>
      ) : (
        // <form className={styles.formular} onSubmit={handleSubmitPost}>
        //   <div>
        //     <label htmlFor="title">Title</label>
        //     <input
        //       name="title"
        //       type="text"
        //       required
        //       id="title"
        //       value={postState.title}
        //       onChange={handleChange}
        //     />
        //   </div>
        //   <div>
        //     <label htmlFor="text">Post here</label>
        //     <textarea
        //       name="area"
        //       id="text"
        //       placeholder="Post here..."
        //       required
        //       value={postState.area}
        //       onChange={handleChange}
        //     />
        //   </div>
        //   <div>
        //     <label htmlFor="Photo link">Photo link</label>
        //     <input
        //       type="text"
        //       name="link"
        //       value={postState.link}
        //       onChange={handleChange}
        //     />
        //   </div>
        //   <div>
        //     <label htmlFor="date">Date</label>
        //     <input
        //       type="date"
        //       id="date"
        //       name="date"
        //       value={postState.date}
        //       onChange={handleChange}
        //     />
        //   </div>
        //   <button disabled={checkInputs}>Post</button>
        // </form>
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default PostEdit;
