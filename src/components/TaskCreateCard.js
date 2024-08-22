import React, { useState, useContext } from "react";
import MyContext from "../context/UserContext";

const CreateCard = ({ fetchUser }) => {
  const { setOpen, setSnackbarDescription, setSeverity } = useContext(MyContext);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
    if (titleValue.trim() !== "" && descriptionValue.trim() !== "") {
      setErrorMessage("");
    }
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
    if (descriptionValue.trim() !== "" && titleValue.trim() !== "") {
      setErrorMessage("");
    }
  };

  const handleCreateClick = async () => {
    if (titleValue.trim() === "" || descriptionValue.trim() === "") {
      setErrorMessage("Both title and description are required.");
      return;
    }

    try {
      const response = await fetch("https://tracker-server-dev.vercel.app/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: titleValue, description: descriptionValue }),
      });

      if (response.ok) {
        setTitleValue(""); // Clear title input after success
        setDescriptionValue(""); // Clear description input after success
        setOpen(true);
        setSnackbarDescription("User created successfully!");
        setSeverity("success");
        fetchUser();
      } else {
        setOpen(true);
        setSnackbarDescription("Failed to create user.");
        setSeverity("error");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full text-sm max-w-[500px] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full p-6 text-gray-800 relative">
        New Work
        <div className="p-4">
          <input
            type="text"
            value={titleValue}
            onChange={handleTitleChange}
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm font-medium mb-4 focus:border-gray-400 focus:outline-none"
          />
          <textarea
            value={descriptionValue}
            onChange={handleDescriptionChange}
            placeholder="Description"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm font-medium mb-4 focus:border-gray-400 focus:outline-none"
          />
          {errorMessage && (
            <div className="text-red-600 mb-4">{errorMessage}</div>
          )}
          <button
            onClick={handleCreateClick}
            className={`absolute bottom-4 right-4 px-4 py-2 bg-black text-white rounded-md transition-opacity duration-300 hover:bg-gray-800`}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
