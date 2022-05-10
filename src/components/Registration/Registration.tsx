import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { addingUser, checkUser } from "../../services/users";
import context from "../../context/app-context";
import "./Registration.module.css";
import {
  Form,
  Button,
  Checkbox,
  Select,
  Input,
  useForm,
  Icon,
  Modal,
} from "ebs-design";

function Registration() {
  const [modal, setModal] = useState(true);

  const { setUser } = useContext(context);
  const [form] = useForm();

  const onClose = () => {
    setModal(!modal);
  };

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
    const [password, confirmation, email] = [
      form.getFieldValue("password"),
      form.getFieldValue("confirmation"),
      form.getFieldValue("email"),
    ];

    if (password !== confirmation) {
      alert("Password not confirmed");
      return;
    }
    const check =
      form.getFieldValue("firstName") &&
      form.getFieldValue("lastName") &&
      form.getFieldValue("email") &&
      form.getFieldValue("password") &&
      form.getFieldValue("confirmation") &&
      form.getFieldValue("gender") &&
      form.getFieldValue("role") &&
      form.getFieldValue("agreement");

    if (!check) {
      alert("Fill all fields!");
      return;
    }

    addingUser(form.getFieldsValue()).then((res) => setUser(res));

    checkUser(email, password).then((res) => {
      window.localStorage.setItem("userID", JSON.stringify(res[0].id));
    });

    onClose();
  };

  return (
    <>
      {modal ? (
        <Modal
          closeOnClickOutside
          mask
          open
          size="small"
          className="modal"
          title="Registraion"
          onClose={onClose}
        >
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
              <Input
                size="small"
                placeholder="Email"
                autoComplete="off"
                type="email"
              />
            </Form.Field>
            <Form.Field
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="small"
                placeholder="Password"
                autoComplete="off"
                type="password"
              />
            </Form.Field>
            <Form.Field
              label="Confirm password"
              name="confirmation"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                size="small"
                placeholder="Confirm password"
                autoComplete="off"
                type="password"
              />
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
        </Modal>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Registration;
