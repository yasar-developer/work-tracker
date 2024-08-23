const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const createWork = async (title, description, userId, showSnackbar,fetchUserWorkById,test) => {
  // console.log("User ID:", userId);
  try {
    const newWork = {
      userId: userId,
      title: title || "",
      description: description || ""
    };

    const response = await fetch(`${apiBaseUrl}/work`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWork),
    });

    if (!response.ok) {
      throw new Error("Failed to create work");
    }

    await response.json();
    showSnackbar("Work Created successfully", "success");
    fetchUserWorkById();
    test();
    // fetchUser(); // Uncomment if needed
  } catch (error) {
    console.error("Error:", error);
    showSnackbar("Failed to create work", "failure");
  }
};

const ResumeStart = async (task, showSnackbar) => {
  if (!task._id) return;
  try {
    const response = await fetch(`${apiBaseUrl}/work/play-work/${task._id}`, {
      method: "PUT",
    });

    if (!response.ok) {
      const errorText = await response.text();
      showSnackbar("Error resuming work", "failure");
      throw new Error(errorText);
    }

    const updatedWork = await response.json();
    // console.log("Work resumed:", updatedWork);
    showSnackbar("Work resumed successfully", "success");
  } catch (error) {
    showSnackbar("Error resuming work", "failure");
    console.error("Error resuming work:", error);
  }
};

const handleStop = async (task, showSnackbar) => {

  const stopTime = new Date().toISOString();
  const updatedWork = {
    stopTime: stopTime,
  };

  try {
    const response = await fetch(`${apiBaseUrl}/work/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWork),
    });

    if (!response.ok) {
      throw new Error("Failed to update work");
    }

    await response.json();
    showSnackbar("Work updated successfully", "success");
    // fetchUser(); // Fetch the updated list of cards
  } catch (error) {
    console.error("Error:", error);
    showSnackbar("Failed to update work", "failure");
  }
};

const handleStart = async (task, showSnackbar) => {
  // console.log("Task:", task);
  const startTime = new Date().toISOString();
  const updatedWork = {
    startTime: startTime,
  };

  try {
    const response = await fetch(`${apiBaseUrl}/work/start/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWork),
    });

    if (!response.ok) {
      throw new Error("Failed to update work");
    }

    await response.json();
    showSnackbar("Work started successfully", "success");
    // fetchUser(); // Fetch the updated list of cards if needed
  } catch (error) {
    console.error("Error:", error);
    showSnackbar("Failed to update work", "failure");
  }
};



const handlePause = async (task, showSnackbar) => {
  // console.log("Task:", task);
  if (!task._id) return;
  try {
    const response = await fetch(`${apiBaseUrl}/work/pause-work/${task._id}`, {
      method: "PUT",
    });

    if (!response.ok) {
      const errorText = await response.text();
      showSnackbar("Error pausing work", "failure");
      throw new Error(errorText);
    }

    const updatedWork = await response.json();
    // console.log("Work paused:", updatedWork);
    showSnackbar("Work paused successfully", "success");
  } catch (error) {
    console.error("Error pausing work:", error);
    showSnackbar("Error pausing work", "failure");
  }
};

export { createWork, ResumeStart, handleStop, handlePause, handleStart };
