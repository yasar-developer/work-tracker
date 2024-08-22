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


// Create the Home component here
function Home() {
  const { setIsLoading, setIsAuthenticated, showSnackbar, isLoading, IsAuthenticated } = useContext(MyContext);
  useEffect(() => {
    checkToken(setIsLoading, setIsAuthenticated, showSnackbar);
  }, []);

  return (
    <div>
      {/* {isLoading && <Loading />} */}
      <Navbar />
      {!IsAuthenticated ? (
        <div className="flex justify-center items-center h-screen">
        <AuthForm />
      </div>
      ) : (
        <>
        <TaskCard />
        <TaskPage/>
        <CreateCard />
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
