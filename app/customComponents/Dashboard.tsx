import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useLocation, useNavigation } from "@remix-run/react";

const links = [
  {
    link: "/home",
    text: "Home",
  },
  {
    link: "/explore",
    text: "Explore",
  },
  {
    link: "/dashboard",
    text: "Dashboard",
  },
  {
    link: "/profile",
    text: "Profile",
  },
];

const Dashboard = () => {
  const currentPath = useLocation().pathname;

  return (
    <nav className="w-full flex justify-between items-center px-4 py-4 bg-black shadow-md">
      <div className="text-xl font-semibold flex items-center">
        <div className="bg-black p-2 rounded-full">
          <span className="fas fa-bug" aria-label="bug bounty icon"></span>
        </div>
        <span className="ml-2">iHunt</span>
      </div>
      <div className="hidden md:flex space-x-6">
        {links.map((each) => (
          <Link
            to={each.link}
            key={each.link}
            className={currentPath === each.link ? "text-blue-500" : ""}
          >
            {each.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Dashboard;
