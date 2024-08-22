const createWork = async () => {
    try {
    setIsRunning(true);

    const newWork = {
      userId: task._id,
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
      fetchUser(); // Fetch the updated list of cards
    });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export default createWork