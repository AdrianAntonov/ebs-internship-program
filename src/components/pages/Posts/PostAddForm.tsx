import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../services/users";
import { Button, Form, Input, Textarea, DatePicker, useForm } from "ebs-design";

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
    </>
  );
};

export default PostAddForm;
