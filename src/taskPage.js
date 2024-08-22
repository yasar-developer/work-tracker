import React, { useState, useEffect, useContext } from 'react';
import fetchUserWithCurrentWork from './utils/UserUtils';
import MyContext from './context/UserContext';

function TaskPage() {
    const { setIsLoading } = useContext(MyContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUserWithCurrentWork(setIsLoading)
    }, []);
  return (
    <>
      test
    </>
  );
}

export default TaskPage;
