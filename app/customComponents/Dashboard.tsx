import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "@remix-run/react";

const Dashboard = () => (
  <nav className="w-full flex justify-between items-center px-4 py-4 bg-black shadow-md">
    <div className="text-xl font-semibold flex items-center">
      <div className="bg-black p-2 rounded-full">
        <span className="fas fa-bug" aria-label="bug bounty icon"></span>
      </div>
      <span className="ml-2">iHunt</span>
    </div>
    <div className="hidden md:flex space-x-6">
      <Link to={"/home"} className="text-gray-300 hover:text-white">
        Home
      </Link>
      <Link to={"/explore"} className="text-gray-300 hover:text-white">
        Explore
      </Link>
      <Link to="/dashboard" className="text-gray-300 hover:text-white">
        Dashboard
      </Link>
      <Link to="/profile" className="text-gray-300 hover:text-white">
        Profile
      </Link>
    </div>
  </nav>
);

export default Dashboard;
