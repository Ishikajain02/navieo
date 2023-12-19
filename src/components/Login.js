import Form from "./Form";
/*const Login = () => {
  return (
    <div className="flex  ">
      <div className="flex flex-row w-1/3">
       <img src="../../img/logo.jpeg"></img>
        <div className="shadow-lg  mt-56 ml-28 w-80">
          <h1 className="font-bold  p-4 m-2 text-4xl">Welcome Back!</h1>
          <h1 className="overflow-hidden break-words p-3 m-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s</h1>
          
          
          <button className="bg-gray-300 hover:bg-white rounded m-2 p-2  mt-2 ml-12 w-48">
            Login with Google</button>
            <button className="bg-gray-300 hover:bg-white rounded m-2 p-2  mt-2 ml-12 w-48">Login with Facebook</button>
            </div>
        
      </div>
      <div className="flex flex-row w-2/3  h-screen bg-hero-pattern" >
         {/*   <img>
            </img>*
      
           
            <div className=" flex justify-center">
                <h1>enter</h1>
                <h1 className="text-3xl">hiiii</h1>
                <div className="shadow "></div>
    </div>}
      <div className="shadow ml-72 rounded-2xl mt-48 bg-white h-[32rem] w-[34rem] bg-opacity-50 ">

       <h1 className="font-bold p-4 m-4 ml-40 mt-8">Please Enter your details</h1>
       <h1 className="ml-16">Enter email address</h1>
       <input className="p-4 m-2 ml-16 rounded-3xl w-96"></input>
       <h1 className="ml-16">Password</h1>
       <input className="p-4 m-2 ml-16 rounded-3xl w-96"></input>
       <h1 className="ml-80 font-bold ">Forget Password?</h1>
       <button className="ml-16 bg-blue-950 w-96 rounded-3xl p-4 m-2 text-white">Login</button>
       <h1 className="ml-16 font-bold p-4">Don't have an account? Register</h1>{/* make register clickable
      </div>
        </div>
    </div>
  );
};
export default Login;*/


const Login = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/3">
        <div className="md:ml-28 mt-10 md:mt-40 md:w-80">
          <h1 className="font-bold  text-4xl p-4 m-2">Welcome Back!</h1>
          <p className="overflow-hidden break-words p-3 m-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className="bg-gray-300 hover:bg-white rounded m-2 p-2 font-bold mt-2 md:mt-0 md:ml-12 w-48">
           Login with Google
          </button>
          <button className="bg-gray-300 hover:bg-white rounded m-2 p-1 font-bold mt-2 md:mt-0 md:ml-12 w-48 h-12">
            Login with Facebook
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 h-screen bg-hero-pattern">
        <div className="shadow md:ml-64 rounded-2xl mt-10 md:mt-40 bg-white h-[32rem] w-[34rem] bg-opacity-50">
          <h1 className="font-bold p-4 m-4 ml-8 mt-8">Please Enter your details</h1>
          <label htmlFor="email" className="ml-8 font-semibold">
            Enter email address
          </label>
          <input
            id="email"
            type="email"
            className="p-4 m-2 ml-8 rounded-3xl w-96"
          />
          <label htmlFor="password" className="ml-8 font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="p-4 m-2 ml-8 rounded-3xl w-96"
          />
          <h1 className="ml-32 font-bold cursor-pointer hover:text-slate-200">
            Forget Password?
          </h1>
          <button className="ml-8 bg-blue-950 w-96 rounded-3xl p-4 m-2 text-white">
            Login
          </button>
          <h1 className="ml-8 font-bold p-4 cursor-pointer hover:text-slate-200">
            Don't have an account? Register
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;


