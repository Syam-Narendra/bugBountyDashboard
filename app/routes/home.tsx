import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Progress } from "~/components/ui/progress";
import { BugReport } from "./create-issue";

export const loader = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/get-all-bugs");
  const data = await res.json();
  return data;
};

const Home = () => {
  const data = useLoaderData() as BugReport[];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.bugTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col items-center px-4 sm:px-6 lg:p-8">
      <div className="text-center mt-5 flex flex-col gap-3 items-center w-full">
        <div>
          <div className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full inline-block mb-6 text-sm sm:text-base">
            <span>Open-access issue tracker for everyone!</span>
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

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <Link
            to="/create-issue"
            className="bg-white hover:bg-gray-500 hover:text-white px-6 py-3 text-black rounded-md transition"
          >
            Create Issue <span>&#8594;</span>
          </Link>
          <Link
            to="/explore"
            className="bg-transparent border border-gray-600 px-6 py-3 text-gray-200 rounded-md hover:bg-gray-600 hover:text-white transition"
          >
            View All Open Issues
          </Link>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.ID}
              className="bg-[#272726] text-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{item.bugTitle}</h3>
                <p className="text-gray-400 mb-4">Reporter: {item.name}</p>
                <p className="mb-4">{item.description}</p>
              </div>
              <Link
                to={`/issue/${item.ID}`}
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
              >
                View Issue
              </Link>
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
