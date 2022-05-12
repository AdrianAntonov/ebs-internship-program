import { useEffect } from "react";
import { editUser, getUserByID } from "../../../services/users";
import "../Posts/PostTest.scss";
import {
  Form,
  useForm,
  Select,
  Button,
  Checkbox,
  Input,
  Icon,
} from "ebs-design";

interface UserAddingProp {
  onCloseEdit: () => void;
  editId: number;
}

const UserEditForm = ({ onCloseEdit, editId }: UserAddingProp) => {
  const [form] = useForm();

  useEffect(() => {
    console.log(editId);
    getUserByID(editId).then((res) => {
      form.setFieldsValue({ ...res, agreement: false });
    });
  }, [editId, form]);

  const genderOptions = [
    { text: "Male", value: "Male" },
    { text: "Female", value: "Female" },
    { text: "Another", value: "Another" },
  ];

  const roleOptions = [
    { text: "Administrator", value: "Administrator" },
    { text: "Moderator", value: "Moderator" },
  ];

  const handleSubmit = () => {
    const check =
      form.getFieldValue("firstName") &&
      form.getFieldValue("lastName") &&
      form.getFieldValue("email") &&
      form.getFieldValue("gender") &&
      form.getFieldValue("role") &&
      form.getFieldValue("agreement");

    if (!check) {
      alert("Fill all fields!");
      return;
    }

    editUser(editId, form.getFieldsValue());

    onCloseEdit();
  };

  return (
    <div>
      <Form
        form={form}
        controlOptions={{
          col: {
            size: 8,
          },
        }}
        labelOptions={{
          col: {
            size: 2,
          },
        }}
        type="vertical"
        onFinish={handleSubmit}
      >
        <Form.Field
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="small" placeholder="FirstName" autoComplete="off" />
        </Form.Field>
        <Form.Field
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="small" placeholder="Last Name" autoComplete="off" />
        </Form.Field>
        <Form.Field
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input size="small" placeholder="Email" autoComplete="off" />
        </Form.Field>
        <Form.Field
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            emptyLabel="No found"
            isClearable
            mode="single"
            newPlaceholder="Add new..."
            optionsMode="dropdown"
            placeholder="Select"
            prefix={<Icon type="eye" />}
            size="large"
            valueMode="regular"
          >
            <Select.Search onSearch={function noRefCheck() {}} value="" />
            <Select.Options options={genderOptions} />
            <Select.Pagination
              count={5}
              limit={20}
              page={1}
              mode="scroll"
              setPage={function noRefCheck() {}}
            />
          </Select>
        </Form.Field>
        <Form.Field
          label="Role"
          name="role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            emptyLabel="No found"
            isClearable
            mode="single"
            newPlaceholder="Add new..."
            optionsMode="dropdown"
            placeholder="Select"
            prefix={<Icon type="eye" />}
            size="large"
            valueMode="regular"
          >
            <Select.Search onSearch={function noRefCheck() {}} value="" />
            <Select.Options options={roleOptions} />
            <Select.Pagination
              count={5}
              limit={20}
              page={1}
              mode="scroll"
              setPage={function noRefCheck() {}}
            />
          </Select>
        </Form.Field>
        <Form.Field
          name="agreement"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Checkbox
            checkAlign="left"
            text="I agree with the processing of personal data"
          />
        </Form.Field>

        <Button
          onClick={() => handleSubmit()}
          buttonClass="ebs-button--medium ebs-button butt"
          type="ghost"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserEditForm;
