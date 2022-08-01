import { auth } from "../firebase";

const SignOut = () => {
  return (
    <button className="btn" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
};

export default SignOut;
