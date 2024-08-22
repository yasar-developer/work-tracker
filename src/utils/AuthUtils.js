//load env
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

const checkToken = async (setIsLoading, setIsAuthenticated, showSnackbar) => {
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  if (token) {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiBaseUrl}/auth/verifyToken`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response:", response);
      if (response.ok) {
        setIsLoading(false);
        setIsAuthenticated(true);
        showSnackbar("Signed in successfully", "success");
      } else {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        showSnackbar("Logout successful", "failure");
      }
    } catch (error) {
      showSnackbar("Sign-in failed", "failure");
      console.error("Token verification failed:", error);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }
};

const auth = async (
  isLogin,
  setIsLoading,
  setIsAuthenticated,
  showSnackbar,
  form
) => {

  const url = isLogin
    ? `${apiBaseUrl}/users/login`
    : `${apiBaseUrl}/users/signup`;

  try {
    setIsLoading(true);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();

    console.log(result);
    if (response.ok) {
      console.log("Token:", result.token);
      localStorage.setItem("token", result.token);
      setIsAuthenticated(true);
      showSnackbar("Signed in successfully", "success");
    } else {
      console.error("Error:", result.message);
      showSnackbar(result.message, "failure");
    }
  } catch (error) {
    showSnackbar("Sign-in failed", "failure");
    console.error("Network error:", error);
  } finally {
    setIsLoading(false);
  }
};

const signOut = (setIsAuthenticated) => {
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  // showSnackbar("Logout successful", "success");
};

export { checkToken, auth, signOut };
