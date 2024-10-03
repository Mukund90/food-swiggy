import 'bootstrap-icons/font/bootstrap-icons.css';
export const Loginpage = ()=>
{
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-100">
      <form className="flex flex-col justify-start items-center w-full max-w-md bg-white p-10 shadow-lg rounded-lg">
        <h3 className="text-4xl font-kuchbhi text-center tracking-wider p-5 font-bold text-gray-800">Login!</h3>
  
        <div className="w-full mb-4">
          <label htmlFor="username" className="text-lg  font-kuchbhi font-semibold text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Please Enter your Username"
            className="w-full mt-2 p-2  font-kuchbhi border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            required
          />
        </div>
  
        <div className="w-full mb-4">
          <label htmlFor="name" className="text-lg font-kuchbhi font-semibold text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Please Enter your Name"
            className="w-full mt-2 p-2 border font-kuchbhi border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            required
          />
        </div>
  
        <div className="w-full mb-4">
          <label htmlFor="email" className="text-lg  font-kuchbhi font-semibold text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Please Enter your Email"
            className="w-full mt-2 p-2 border font-kuchbhi border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            required
          />
        </div>
  
        <div className="w-full mb-4">
          <label htmlFor="password" className="text-lg font-kuchbhi font-semibold text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Please Enter your Password"
            className="w-full font-kuchbhi mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            required
          />
        </div>
  
        <button
          type="submit"
          className="w-full font-kuchbhi text-xl font-bold p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          id="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
  
}

