import SIgnUpForm from "./SIgnUpForm";
import { useState } from "react";
const Sign = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Initial state is signup mode
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp); // Toggle between signup and login mode
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-accent text-xl font-bold font-serif"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Login/Signup
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <SIgnUpForm isSignUp={isSignUp} onToggle={toggleSignUp} />
        </div>
      </dialog>
    </div>
  );
};

export default Sign;
