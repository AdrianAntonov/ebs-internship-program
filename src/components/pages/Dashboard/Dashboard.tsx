import { useContext } from "react";
import { Navigate } from "react-router-dom";
import context from "../../../context/app-context";

const Dashboard: React.FC = () => {
  const {
    user: { agreement },
  } = useContext(context);
  return (
    <>
      {agreement || window.localStorage.length > 0 ? (
        <div>
          <h4>Dashboard</h4>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Dashboard;
