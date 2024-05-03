import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg"

const LogIn = () => {

    const handleLogIn = (e) => {
        e.preventDefault();
    }
    return (
        <div className="mt-8">
             <div className="font-sans text-#333">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
        <div className="max-md:order-1 h-screen min-h-full">
          <img src={login} className="w-full h-full object-cover" alt="login-image" />
        </div>
        <form onSubmit={handleLogIn} className="max-w-xl w-full p-6 mx-auto">
          <div className="mb-12">
            <h3 className="text-4xl text-[#FF3811] font-extrabold">Sign in</h3>
            <p className="text-sm mt-6">Don't have an account <Link to="/register" className="text-[#FF3811] font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
          </div>
          <div>
            <label className="text-sm block mb-2">Email</label>
            <div className="relative flex items-center">
              <input name="email" type="text" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="mt-8">
            <label className="text-sm block mb-2">Password</label>
            <div className="relative flex items-center">
              <input name="password" type="password" required className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none" placeholder="Enter password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 mt-5">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-[#FF3811] focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                Remember me
              </label>
            </div>
            <div>
              <a href="jajvascript:void(0);" className="text-[#FF3811] text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="mt-12">
            <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#FF3811] hover:bg-blue-700 focus:outline-none">
              Sign in
            </button>
          </div>
          <p className="my-8 text-sm text-gray-400 text-center">or continue with</p>
          <div className="space-x-8 flex justify-center">
            <button type="button" className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" className="inline" viewBox="0 0 512 512">
                {/* Google icon path */}
              </svg>
            </button>
            <button type="button" className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#000" viewBox="0 0 22.773 22.773">
                {/* Facebook icon path */}
              </svg>
            </button>
            <button type="button" className="border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#007bff" viewBox="0 0 167.657 167.657">
                {/* Twitter icon path */}
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default LogIn;