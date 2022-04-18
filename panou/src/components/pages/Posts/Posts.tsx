// import { useContext } from "react";
import { Navigate } from "react-router-dom";
// import context from "../../../context/app-context";

function Posts() {
  // const {
  //   user: { agreement },
  // } = useContext(context);

  const getLocal = window.localStorage.length > 0;

  return (
    <>
      {getLocal ? (
        <div>
          <h4>Posts</h4>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Posts;
