import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from 'lucide-react';

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full bg-red-600 h-screen flex flex-col-reverse lg:flex-row items-center justify-center overflow-y-auto"> 
      <div className="w-full lg:w-1/2 text-white flex flex-col justify-center items-center p-10">
        <Link to="/">
          <h1 className="cursor-pointer text-4xl font-bold mb-4 flex items-center gap-2">
            Welcome to ReelUp !
          </h1>
        </Link>
        <p className="text-lg max-w-md text-center">
          "Seamless ticket booking at your fingertips quick, easy, and just a click away."
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
