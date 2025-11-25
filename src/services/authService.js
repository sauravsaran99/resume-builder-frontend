import axios from "axios";

// Set your backend URL here (Vite will proxy or use absolute)
const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/auth";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed" };
  }
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

// Google OAuth Redirect
export const googleLogin = () => {
  window.open(`${API_URL}/google`, "_self");
};
