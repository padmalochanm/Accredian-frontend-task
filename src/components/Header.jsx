import Sign from "./Sign";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <div className="navbar bg-base-400 mb-8">
      <div className="flex-1">
        <p className="text-5xl font-bold font-serif">accredian</p>
      </div>
      <div className="flex-none space-x-8">
        <Sign />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
