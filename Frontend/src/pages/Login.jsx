import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-black outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-black outline-none transition" />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium mt-2">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don't have an account? <Link to="/register" className="text-black font-semibold hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
