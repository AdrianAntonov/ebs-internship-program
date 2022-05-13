import { checkUser } from "../../services/users";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import context from "../../context/app-context";
import { Form, Input, Button, Modal, useForm } from "ebs-design";

const Login: React.FC = () => {
  const [modal, setModal] = useState(true);
  const { setUser } = useContext(context);
  // console.log(user);

  const [form] = useForm();

  const navigate = useNavigate();

  const onClose = () => {
    setModal(!modal);
  };

  const logUser = () => {
    const [email, password] = [
      form.getFieldValue("email"),
      form.getFieldValue("password"),
    ];
    const check = email && password;

    checkUser(email, password).then((res) => {
      if (!check) {
        alert("Fill all fields!");
        return;
      }

      if (res.length === 0) {
        alert("Sign up, please!");
        navigate("/");
        return;
      }

      window.localStorage.setItem("userID", JSON.stringify(res[0].id));

      setUser(res[0]);
      onClose();
    });
  };
  return (
    <>
      {modal ? (
        <Modal
          closeOnClickOutside
          header=""
          mask
          open
          size="small"
          title="Log In"
          className="modal"
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
            onFinish={logUser}
          >
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
            <Button
              onClick={logUser}
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
};

export default Login;
