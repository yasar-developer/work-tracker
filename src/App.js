import "./App.css";
import Navbar from "./components/Navbar";
import TaskCard from "./components/TaskCard";
import AuthForm from "./components/AuthForm";
import Loading from "./components/Loading";
import { useEffect,useContext } from "react";
import { checkToken } from "./utils/AuthUtils";
import MyProvider from "./context/UserProvider";
import  MyContext  from "./context/UserContext";
import TaskPage from "./taskPage";
import CreateCard from "./components/TaskCreateCard";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


// Create the Home component here
function Home() {
  const { open, setOpen, snackbarDescription, severity } = useContext(MyContext);
  const { setIsLoading, setIsAuthenticated, showSnackbar, isLoading, IsAuthenticated, setUserId } = useContext(MyContext);
  useEffect(() => {
    const fetchData = async () => {
      const userId = await checkToken(setIsLoading, setIsAuthenticated, showSnackbar);
      if (userId) {
        setUserId(userId);
      }
    };
  
    fetchData();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: "64px" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{
            width: "100%",
            bgcolor: severity === "success" ? "black" : "#ad1f10",
            color: severity === "success" ? "white" : undefined,
          }}
        >
          {snackbarDescription}
        </Alert>
      </Snackbar>
      {isLoading && <Loading />}
      <Navbar />
      {!IsAuthenticated ? (
        <div className="flex justify-center items-center h-screen">
        <AuthForm />
      </div>
      ) : (
        <>
        {/* <TaskCard /> */}
        <TaskPage/>
        {/* <CreateCard /> */}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
}

export default App;
