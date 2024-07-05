import ReferForm from "./ReferForm";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center mb-8 font-serif">
      <div className="hero-content container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <img
          src="../../customers-earning-money-by-giving-likes.png"
          className="max-w-full lg:max-w-2xl rounded-lg shadow-2xl mb-5 lg:mb-0"
          alt="Hero"
        />
        <div className="lg:ml-8">
          <h1 className="text-5xl lg:text-6xl font-bold ">
            Let us learn and earn
          </h1>
          <p className="py-6 text-2xl font-semibold">
            Get a chance to win upto{" "}
            <p className="text-4xl font-bold">Rs.15000 </p>
          </p>
          <button
            className="btn btn-active btn-accent btn-lg lg:text-2xl font-serif"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Refer
          </button>
          <dialog
            id="my_modal_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <ReferForm />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Hero;
