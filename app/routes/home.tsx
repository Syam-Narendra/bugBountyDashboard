import { Link } from "@remix-run/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Progress } from "~/components/ui/progress";

const data = [
  {
    id: 1,
    title: "XSS Vulnerability",
    description: "Stored XSS vulnerability found in the user profile page.",
    reporter: "Aarav",
  },
  {
    id: 2,
    title: "SQL Injection",
    description: "SQL injection vulnerability detected in the login form.",
    reporter: "Vihaan",
  },
  {
    id: 3,
    title: "Insecure Direct Object Reference",
    description: "Insecure access to user data without proper authorization.",
    reporter: "Reyansh",
  },
  {
    id: 4,
    title: "Sensitive Data Exposure",
    description: "Sensitive information is exposed in the error messages.",
    reporter: "Anaya",
  },
  {
    id: 5,
    title: "Cross-Site Request Forgery (CSRF)",
    description: "CSRF vulnerability in the account settings update form.",
    reporter: "Aisha",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:p-8">
      <div className="text-center mt-5 flex justify-evenly w-full">
        <div>
          <div className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full inline-block mb-6 text-sm sm:text-base">
            <span>Open-access issue tracker for everyone!</span>
          </div>
          <div className="flex items-start mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              iHunt: Your Bug Hunting Adventure Begins
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Sigma Prime is a leading blockchain security and research firm with
            an extensive history in decentralized technology.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
            <button className="bg-white hover:bg-gray-500 px-6 py-3 text-black rounded-md transition">
              Create Issue <span>&#8594;</span>
            </button>
            <Link
              to="/explore"
              className="bg-transparent border border-gray-600 px-6 py-3 text-gray-200 rounded-md hover:bg-gray-600 hover:text-white transition"
            >
              View Open Issues
            </Link>
          </div>
        </div>
        <div className="bg-black border border-white p-6 rounded-lg w-2/5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">
              Solved Problems
            </h2>
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-700 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>
                <circle
                  className="text-orange-500 progress-ring stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset="50"
                  transform="rotate(-90 50 50)"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2223</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Easy</span>
                <span className="text-white">583 /719</span>
                <span className="text-gray-400">Beats 99.97%</span>
              </div>
              <Progress
                value={81}
                className="h-2 bg-emerald-950"
                //   indicatorClassName="bg-emerald-500"
              />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Medium</span>
                <span className="text-white">1145 /1517</span>
                <span className="text-gray-400">Beats 99.98%</span>
              </div>
              <Progress
                value={75}
                className="h-2 bg-[#67baa4]"
                // indicatorClassName="bg-yellow-500"
              />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white">Hard</span>
                <span className="text-white">495 /631</span>
                <span className="text-gray-400">Beats 99.98%</span>
              </div>
              <Progress
                value={78}
                className="h-2 bg-red-950 bg-red"
                //   indicatorClassName="bg-red-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-1/2  max-w-lg mt-12">
        <input
          type="text"
          placeholder="Search for a Open Issues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 pl-10 pr-4 rounded-full border text-white border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-200 shadow-md"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaSearch />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-12 w-full max-w-6xl">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="col-span-full bg-[#272726] flex justify-between text-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105 w-full"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">Reporter : {item.reporter}</p>
                <p>{item.description}</p>
              </div>
              {/* <div className="mt-4 flex justify-end"> */}
              <button className="bg-blue-600 text-white px-4 py-2 self-end rounded-lg hover:bg-blue-700 transition">
                View Issue
              </button>
              {/* </div> */}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-200">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
