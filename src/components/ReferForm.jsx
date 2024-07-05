import { useState } from "react";
import axios from "axios";
const ReferForm = () => {
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://accredian-backend-task-64sk.onrender.com";
      const data = {
        refereeName,
        refereeEmail,
        message,
      };
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No token available");
      }
      await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error appropriately
    } finally {
      setRefereeName("");
      setRefereeEmail("");
      setMessage("");
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-serif">
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
          type="text"
          className="grow"
          placeholder="Referee's Name"
          value={refereeName}
          onChange={(e) => setRefereeName(e.target.value)}
          required
        />
      </label>
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
          type="email"
          className="grow"
          placeholder="Referee's Email"
          value={refereeEmail}
          onChange={(e) => setRefereeEmail(e.target.value)}
          required
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <input
          className="grow"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-accent text-xl">
        Send referral
      </button>
    </form>
  );
};

export default ReferForm;
