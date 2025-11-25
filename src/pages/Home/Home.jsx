import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        AI Resume Builder
      </h1>
      <p className="mb-6 text-gray-600">
        Create job-winning resumes with AI 🚀
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Login
        </Link>
        <Link
          to="/dashboard"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Home;
