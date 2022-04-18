import { getUserByID } from "../services/users";

function CheckUserLocal() {
  const getLocal = window.localStorage.getItem("userId");
  return getUserByID(Number(getLocal));
}

export default CheckUserLocal;
