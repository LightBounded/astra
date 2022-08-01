import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="hero flex-1">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Astra</h1>
          <p className="py-6">A simple chat app made with React and Firebase</p>
          <button onClick={signInWithGoogle} className="btn btn-primary">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
