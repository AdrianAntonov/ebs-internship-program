import { useContext } from "react";
import { Navigate } from "react-router-dom";
import context from "../../../context/app-context";

const Posts: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);

  return (
    <>
      {agreement || window.localStorage.length > 0 ? (
        <div>
          <h4>Posts</h4>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Posts;
