import React from "react";

function Register(){
  return(
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 box-border">
        <p className="text-amber-400">Register</p>
        <form action="/register" method="POST">
            <input type="text" placeholder="Username" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</button>
        </form>
        </div>
    </div>
  );
}
export default Register;