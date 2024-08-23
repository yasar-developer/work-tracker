const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const createWork = async (title, description, userId, showSnackbar) => {

  console.log("User ID:", userId);
    try {
    const newWork = {
      userId: userId,
      title: title || "",
      description: description || "",
      startTime: new Date().toISOString(),
    };

    fetch(`${apiBaseUrl}/work`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWork),
    }).then((res) => {
      res.json();
      showSnackbar("Work Created successfully", "success");
      // fetchUser();
    });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export default createWork