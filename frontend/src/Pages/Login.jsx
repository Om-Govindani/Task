// App.jsx
import React, { useState } from 'react';
import {FaRegEye ,FaRegEyeSlash} from "react-icons/fa6"
import axiosInstance from "../Utils/axiosInstance";
import Footer from '../Utils/Footer';
import Header from '../Utils/Header';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [error,setError] = useState(null)
  const [isShowPassword ,setIsShowPassword] = useState(false);
  const toggleShowPassword = ()=>{
      setIsShowPassword(!isShowPassword)
  }
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\@s]+$/;
    return regex.test(email);
  };
  const handleLogin = async (e)=>{
    e.preventDefault();
    if(!password){
        setError("Please Enter Password")
        return
    }
    setError("");
    try {
      console.log("Email : ",email);
      console.log("Password :",password)
      const response = await axiosInstance.post("/login", {
          email: email,
          password: password,
      });
      console.log(email+' '+password);
      if (response.data && response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
          alert("Login Successful");
      }
    }catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
      } else {
          setError("An unexpected error occurred. Please try again.");
          console.log(error);
      }
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow flex justify-center items-center bg-gray-100 py-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              
              <div className="flex items-center shadow border rounded px-3 focus:outline-none focus:shadow-outline">
                <input
                  className="appearance-none w-full py-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={isShowPassword?"text":"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
                {isShowPassword ? <FaRegEye
                  size={22}
                  className="text-primary cursor-pointer"
                  onClick={()=>toggleShowPassword()}
                /> : <FaRegEyeSlash size={22} className="text-slate-400 cursor-pointer"onClick={()=>toggleShowPassword()}/> }
              </div>
            </div>
            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-green-600 hover:text-green-800">Forgot Password?</a>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white text-md py-2 px-4 rounded-full w-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link to="/Signup" className="text-green-600 hover:text-green-800">Register</Link>
          </p>
        </div>
      </div>
      <div className="h-[150px] py-5">
        <div className="container mx-auto text-center flex flex-row items-center ">
            <div className='w-1/2'>
                <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-6 justify-center items-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum molestias laudantium quia perspiciatis est pariatur consectetur ab reprehenderit libero magnam a eaque quam aperiam voluptatem natus, sed consequatur debitis!
                </p>
            </div>
            <div className="flex justify-center w-1/2 rounded-full border-[2.5px] bg-transparent">
                <input
                type="email"
                placeholder="Your email address"
                className="h-10 py-2 px-4 w-full outline-none bg-transparent"
                />
                <button className="bg-green-600 text-white h-10 font-bold py-2 px-6 rounded-full hover:bg-green-700">
                Subscribe
                </button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
