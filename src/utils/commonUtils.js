// utils.js
import { useContext } from "react";
import MyContext from "../context/UserContext";

export const useSnackbar = () => {
  const { setOpen, setSnackbarDescription, setSeverity } = useContext(MyContext);

  const showSnackbar = (message, severity) => {
    setSnackbarDescription(message);
    setSeverity(severity);
    setOpen(true);
  };

  return showSnackbar;
};
