import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";

function App() {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex gap-10">
          <button
            className="bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors p-4 cursor-pointer"
            onClick={() => setSignUpModalOpen(true)}
          >
            Open Sign Up Modal
          </button>
          <button
            className="bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors p-4 cursor-pointer"
            onClick={() => setSignInModalOpen(true)}
          >
            Open Sign In Modal
          </button>
        </div>
        {isSignUpModalOpen ? (
          <SignUpModal
            isOpen={isSignUpModalOpen}
            onClose={() => setSignUpModalOpen(false)}
          />
        ) : null}
        {isSignInModalOpen ? (
          <SignInModal
            isOpen={isSignInModalOpen}
            onClose={() => setSignInModalOpen(false)}
          />
        ) : null}
      </main>
    </>
  );
}

export default App;
