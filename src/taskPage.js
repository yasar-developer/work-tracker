import React, { useState, useEffect, useContext } from 'react';
import fetchUserWithCurrentWork from './utils/UserUtils';
import MyContext from './context/UserContext';
import TaskCard from './components/TaskCard';

function TaskPage() {
    const { setIsLoading } = useContext(MyContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);
          try {
              const user_data = await fetchUserWithCurrentWork(); // Remove setIsLoading from here
              console.log('Fetched user data:', user_data);
              if (Array.isArray(user_data)) {
                  setUsers(user_data);
              } else {
                  console.error('Fetched data is not an array:', user_data);
              }
          } catch (error) {
              console.error('Error fetching user data:', error);
          } finally {
              setIsLoading(false);
          }
      };
  
      fetchData();
  }, []);

    return (
        <div>
            {users.length > 0 ? (
                users.map(user => (
                    <TaskCard
                        key={user._id}
                        name={user.name}
                        work={user.allWork}
                    />
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
}

export default TaskPage;
