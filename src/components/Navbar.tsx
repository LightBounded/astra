import SignOut from "./SignOut";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="navbar mx-auto my-1.5 px-4 md:container">
        <div className="flex-1">
          <div className="btn btn-ghost text-xl font-semibold normal-case">
            Astra
          </div>
        </div>
        <div>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
