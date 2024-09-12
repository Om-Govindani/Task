// CreateAccount.jsx
import React, { useState } from 'react';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import {FaRegEye ,FaRegEyeSlash} from "react-icons/fa6"
import axiosInstance from "../Utils/axiosInstance";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [isShowPassword ,setIsShowPassword] = useState(false);
  const toggleShowPassword = ()=>{
      setIsShowPassword(!isShowPassword)
  }
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\@s]+$/;
    return regex.test(email);
  };
    const [error,setError] = useState(null)
    const handleSignup = async (e)=>{
        e.preventDefault();
        if(!name){
            setError("Please Enter you name");
            return;
        }
        if(!validateEmail(email)){
            setError("Please Enter a Valid Email")
            return
        }
        if(!password){
            setError("Please Enter Password")
            return
        }
        setError("");

        try {
            console.log("Name : ",name);
            console.log("Email : ",email)
            console.log("Password : ",password)
            const response = await axiosInstance.post("/register", {
                name : name,
                email: email,
                password: password,
            });
            // Handle successful register response
            if (response.data && response.data.error) {
                setError(response.data.message)
                return;
            }
            if(response.data && response.data.accessToken)
            {
                localStorage.setItem("token",response.data.accessToken)
                alert("User Registered Sucessfully")
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
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span className="ml-2 text-gray-700">Accept all terms & conditions</span>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-4 rounded w-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/" className="text-green-600 hover:text-green-800">Login</Link>
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

export default Signup;
