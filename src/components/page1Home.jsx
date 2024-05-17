import React from "react";
import { useNavigate } from "react-router-dom";

const Page1Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/exercise`);
  };
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center object-contain"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl font-bold mb-8">FASTER, STRONGER</h1>
        <h2 className="text-2xl mb-8">FIGHT TO THE END</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Page1Home;
