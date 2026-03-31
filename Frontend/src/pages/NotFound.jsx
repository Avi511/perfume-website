import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
