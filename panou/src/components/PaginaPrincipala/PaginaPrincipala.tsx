import { useContext, useEffect } from "react";
import context from "../../context/app-context";
import { getUserByID } from "../../services/users";

function PaginaPrincipala() {
  const { user, setUser } = useContext(context);
  useEffect(() => {
    const storageResult = window.localStorage.getItem("userID");

    storageResult &&
      getUserByID(Number(storageResult))
        .then((result) => {
          setUser(result);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [setUser]);

  return <h2>Pagina Principala</h2>;
}

export default PaginaPrincipala;
