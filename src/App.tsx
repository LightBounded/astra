import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";
import useAuth from "./hooks/useAuth";

function App() {
  const { user, isChanging } = useAuth();

  return (
    <div className="flex h-screen flex-col">
      {!isChanging && (
        <>
          <Navbar />
          {user ? <ChatRoom user={user} /> : <SignIn />}
        </>
      )}
    </div>
  );
}

export default App;
