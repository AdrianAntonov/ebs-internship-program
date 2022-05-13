import { useNavigate } from "react-router-dom";
import { addPost } from "../../../services/users";
import { useUniversalListMutation } from "../../../hooks/useData";
import { Button, Form, Input, Textarea, DatePicker, useForm } from "ebs-design";

const PostAddForm = () => {
  const navigate = useNavigate();
  const [form] = useForm();

  const { mutate } = useUniversalListMutation(addPost);

  const handleSubmitPost = () => {
    console.log("posts");

    mutate(form.getFieldsValue());

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
