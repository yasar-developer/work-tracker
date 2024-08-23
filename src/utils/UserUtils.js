const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const fetchUserWithCurrentWork = async () => {
  try {
      const response = await fetch(`${apiBaseUrl}/users`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      });
      const data = await response.json();
    //   console.log("Data:", data);
      return data;
  } catch (error) {
      console.error("Error fetching users:", error);
      return []; // Return an empty array or handle as needed
  }
};

  export default fetchUserWithCurrentWork;