import { useState } from "react";
import axios from "axios";
const SignUpForm = ({ isSignUp, onToggle }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseURL = "https://accredian-backend-task-64sk.onrender.com";
      const path = isSignUp ? "/register" : "/login";
      const url = baseURL + path;
      const data = isSignUp ? { email, username, password } : { username, password };

      const response = await axios.post(url, data);

      // Handle the token in the response
      const { token } = response.data;
      if (token) {
        localStorage.setItem('authToken', token);
        //window.location.reload(); // Reload to update the authenticated state
      }

      // Additional logic after successful submission can be added here
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately
    } finally {
      setEmail("");
      setUsername("");
      setPassword("");
      //window.location.reload();
    }
  };

  return (
    <form className="flex flex-col gap-5 font-serif" onSubmit={handleSubmit}>
      {/* Username field */}
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      {/* Conditional rendering of email field */}
      {isSignUp && (
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      )}

      {/* Password field */}
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="password"
          className="grow"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      {/* Submit button */}
      <button type="submit" className="btn btn-accent text-xl font-serif">
        {isSignUp ? "Sign Up" : "Log In"}
      </button>

      {/* Toggle link */}
      <p className="text-center">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <button type="button" className="text-accent ml-1" onClick={onToggle}>
          {isSignUp ? "Log In" : "Sign Up"}
        </button>
      </p>
    </form>
  );
};

export default SignUpForm;
