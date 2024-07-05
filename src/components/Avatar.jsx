const Avatar = ({ onLogout }) => {
    const handleLogout = () => {
      // Remove the token from local storage
      localStorage.removeItem("authToken");
  
      // Call the onLogout callback to update the parent component's state
      onLogout();
  
      // Optionally, you can reload the page if needed
      window.location.reload();
    };
  
    return (
      <div className="dropdown dropdown-end font-serif">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-16 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-2xl"
        >
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Avatar;
  