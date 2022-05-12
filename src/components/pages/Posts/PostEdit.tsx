import { useEffect } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { getPostByID, editPost } from "../../../services/users";
import { useContext } from "react";
import context from "../../../context/app-context";
import { Form, Input, Textarea, DatePicker, Button, useForm } from "ebs-design";

const PostEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useContext(context);

  const [form] = useForm();

  useEffect(() => {
    if (id) {
      getPostByID(id).then((res) => form.setFieldsValue(res));
    }
  }, [id, form]);

  const handleSubmitPost = () => {
    if (id) {
      editPost(id, form.getFieldsValue());

      navigate("/posts");
    }
  };

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
            label="Title"
            name="title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input size="small" />
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
            <Textarea />
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
            <Input size="small" />
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
            Post
          </Button>
        </Form>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default PostEdit;
