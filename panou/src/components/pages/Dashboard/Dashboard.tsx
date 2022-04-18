import { Navigate } from "react-router-dom";

function Dashboard() {
  const getLocal = window.localStorage.length > 0;

  return (
    <>
      {getLocal ? (
        <div>
          <h4>Dashboard</h4>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Dashboard;
