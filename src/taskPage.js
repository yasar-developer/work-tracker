import React, { useState, useEffect, useContext } from "react";
import fetchUserWithCurrentWork from "./utils/UserUtils";
import MyContext from "./context/UserContext";
import TaskCard from "./components/TaskCard";
import { Divider } from "@mui/material";

function TaskPage() {
  const [filter, setFilter] = useState("");
  const { setIsLoading } = useContext(MyContext);
  const [users, setUsers] = useState([]);
  const sortedUsers = users
    .filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  const enabledUsers = sortedUsers.filter((user) => user.isEnabled);
  const disabledUsers = sortedUsers.filter((user) => !user.isEnabled);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const user_data = await fetchUserWithCurrentWork(); // Remove setIsLoading from here
        console.log("Fetched user data:", user_data);
        if (Array.isArray(user_data)) {
          setUsers(user_data);
        } else {
          console.error("Fetched data is not an array:", user_data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
 {/* Center the content horizontally */}
      <div className="grid">
        {enabledUsers.map((user, index) => (
          <TaskCard key={user._id} name={user.name} work={user.allWork} isUserEnabled={true} />
        ))}
      </div>

      {/* Add a horizontal line if both enabled and disabled users exist */}
      {enabledUsers.length > 0 && disabledUsers.length > 0 && (
        <>
          <Divider style={{ margin: "20px 0", borderColor: "#ccc" }} />
          <br /> {/* Add line break */}
        </>
      )}
      <div className="grid">
        {disabledUsers.map((user, index) => (
          <TaskCard key={user._id} name={user.name} work={user.allWork} isUserEnabled={false}/>
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
