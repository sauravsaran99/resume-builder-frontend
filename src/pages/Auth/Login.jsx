import React, { useState } from "react";
import { login, signup, googleLogin } from "../../services/authService";
import loginImage from "../../assets/images/login_side.png";
import PremiumBox from "../../components/PremiumBox";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activePage, setActivePage] = useState("login");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleLogin = async () => {
    // Clear previous errors
    setError("");

    // Basic validation
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      let data;
      if (activePage === "login") {
        data = await login(formData);
        console.log("✅ Logged in successfully:", data);
      } else {
        data = await signup(formData);
        console.log("✅ Signed up successfully:", data);
      }

      console.log("✅ Logged in successfully:", data);

      // Save token if returned
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* Left Section */}
      <div className="flex flex-col justify-center md:w-1/2 w-full h-full p-10 md:p-20 text-black dark:text-white">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">
          CareerBoost <span className="text-brandBlue">AI</span>
        </h1>

        {/* Tagline */}
        <h2 className="text-brandBlue text-2xl md:text-3xl font-bold text-left mb-10">
          Unlock Your Potential
        </h2>

        {/* Google Login */}
        <div className="flex flex-col justify-center items-center">
          <div
            onClick={googleLogin}
            className="w-full md:w-4/5 h-16 rounded-[45px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white dark:bg-gray-800 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition mb-5"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-8 h-8"
            />
            <span className="text-textGray text-lg md:text-xl font-medium dark:text-gray-300">
              Continue with Google
            </span>
          </div>

          <p className="text-textGray dark:text-gray-400 my-2">or</p>

          {/* Form */}
          <div className="w-full md:w-4/5">
            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:border-brandBlue placeholder-textGray dark:placeholder-gray-400 text-black dark:text-white"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:border-brandBlue placeholder-textGray dark:placeholder-gray-400 text-black dark:text-white"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center mb-2">{error}</p>
            )}

            {/* Bottom Row */}
            <div className="flex items-center justify-between text-textGray dark:text-gray-400 text-sm mt-6">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>

              <PremiumBox
                width={110}
                height={45}
                borderRadius={45}
                bgColor="#3b82f6"
                text={
                  loading
                    ? "Please wait..."
                    : activePage === "login"
                    ? "Log In"
                    : "Sign Up"
                }
                textColor="#ffffff"
                className="cursor-pointer transition hover:opacity-90"
                onClick={handleLogin}
              />

              <a
                href="#"
                className="hover:underline"
                onClick={() =>
                  setActivePage(activePage === "login" ? "signup" : "login")
                }
              >
                {activePage === "login" ? "Create account" : "Log In"}
              </a>
            </div>
          </div>
        </div>

        {/* Terms */}
        <p className="text-textGray dark:text-gray-400 text-xs text-left mt-10 leading-snug">
          By continuing, you agree to our{" "}
          <a href="#" className="text-brandBlue hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-brandBlue hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center justify-center md:w-1/2 h-full bg-white dark:bg-gray-900">
        <img
          src={loginImage}
          alt="Login illustration"
          className="w-full h-full object-cover rounded-tl-3xl md:rounded-none"
        />
      </div>
    </div>
  );
}

export default Login;
