import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../services/users";
// import styles from "./Posts.module.css";
import { Button, Form, Input, Textarea, DatePicker, useForm } from "ebs-design";
// import { FormField } from "ebs-design/dist/components/organisms/Form/FormField";

// interface IPostAddingProp {
//   onClose: () => void;
//   // editId: number;
// }
// const RedirectPostForm = ({ onClose }: IPostAddingProp) => {
const PostAddForm = () => {
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

  const navigate = useNavigate();
  const [form] = useForm();
  form.setFieldsValue(postState);

  // const checkInputs =
  //   !postState.title || !postState.area || !postState.link || !postState.date;

  // const handleChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;

  //   e.preventDefault();

  //   setPostState((prev) => ({ ...prev, [name]: value }));
  // };

  const reset = () => {
    setPostState({ title: "", area: "", link: "", date: "" });
  };

  const handleSubmitPost = () => {
    console.log("posts");

    addPost(form.getFieldsValue());
    reset();
    navigate("/posts");
  };

  return (
    <>
      <h4>Add a post</h4>

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
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="small" placeholder="Title" />
        </Form.Field>
        <Form.Field
          label="Content"
          name="area"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Textarea placeholder="Type here..." />
        </Form.Field>
        <Form.Field
          label="Link"
          name="link"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="small" placeholder="Link" />
        </Form.Field>
        <Form.Field
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
          />
        </Form.Field>
        <Button
          onClick={() => handleSubmitPost()}
          buttonClass="ebs-button--medium ebs-button butt"
          type="ghost"
        >
          Submit
        </Button>
      </Form>

      {/* <form className={styles.formular} onSubmit={handleSubmitPost}>
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
      </form> */}
    </>
  );
};

export default PostAddForm;
