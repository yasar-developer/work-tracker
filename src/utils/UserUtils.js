const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const fetchUserWithCurrentWork = (setIsLoading) => {
    setIsLoading(true);
    fetch(`${apiBaseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Sending the token in the header
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
       return data;
      })
      .catch((error) => {
        console.error("Error fetching users:", error)
        return null;
      })
      .finally(() => setIsLoading(false));
  };

  export default fetchUserWithCurrentWork;