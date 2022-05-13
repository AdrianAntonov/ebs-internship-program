// import { useMutateUsersList } from "../../../../hooks/useData";
import { useUniversalListMutation } from "../../../../hooks/useData";
import { addingUser } from "../../../../services/users";
import "../../Posts/PostTest.scss";
import {
  Form,
  Button,
  Input,
  Select,
  Icon,
  Checkbox,
  useForm,
} from "ebs-design";

interface UserAddingProp {
  onClose: () => void;
}

const UserAddingForm = ({ onClose }: UserAddingProp) => {
  const [form] = useForm();

  // const { mutate } = useMutateUsersList();

  const { mutate } = useUniversalListMutation(addingUser);

  const handleSubmitUser = () => {
    const check =
      form.getFieldValue("firstName") &&
      form.getFieldValue("lastName") &&
      form.getFieldValue("email") &&
      form.getFieldValue("gender") &&
      form.getFieldValue("role") &&
      form.getFieldValue("agreement");

    console.log(check);
    if (!check) {
      alert("Fill all fields!");
      return;
    }
    mutate(form.getFieldsValue());
    onClose();
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

  return (
    <div className="userForm">
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
        onFinish={handleSubmitUser}
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
          onClick={() => handleSubmitUser()}
          buttonClass="ebs-button--medium ebs-button butt"
          type="ghost"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserAddingForm;
