// CreateAccount.jsx
import React from 'react';
import Header from '../Utils/Header';
import Footer from '../Utils/Footer';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />
      
      <div className="flex-grow flex justify-center items-center bg-gray-100 py-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <form>
            <div className="mb-4">
              
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
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
            <a href="#" className="text-green-600 hover:text-green-800">Login</a>
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
