import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BugReport } from "./create-issue";
import { Badge } from "@radix-ui/themes";

export const loader = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/get-all-bugs");
  const data = await res.json();
  return data;
};

const Explore = () => {
  const data = useLoaderData<typeof loader>() as BugReport[];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const programmingLanguages: string[] = [
    "Freemarker",
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "Ruby",
    "PHP",
    "TypeScript",
    "Rust",
  ];

  const projects: string[] = [
    "Power Platform",
    "ICICI",
    "Aurora Studio",
    "Arx-cli",
    "Khoros",
  ];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const handleProjectChange = (project: string) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(project)
        ? prevSelected.filter((proj) => proj !== project)
        : [...prevSelected, project]
    );
  };

  const filteredData = data.filter(
    (item) =>
      item.bugTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLanguages.length === 0 ||
        selectedLanguages.includes(item.technologyUsed)) &&
      (selectedProjects.length === 0 ||
        selectedProjects.includes(item.projectName))
  );

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col sm:flex-row px-4 sm:px-6 lg:p-8">
      <div className="w-full sm:w-1/4 lg:w-1/5 h-full p-4 bg-[#131213] rounded-lg shadow-lg mb-8 sm:mb-0 sm:mr-8 flex-shrink-0">
        <h2 className="text-xl font-semibold mb-4">Filter by Language</h2>
        <div className="space-y-2">
          {programmingLanguages.map((language) => (
            <div key={language} className="flex items-center">
              <input
                type="checkbox"
                id={language}
                checked={selectedLanguages.includes(language)}
                onChange={() => handleLanguageChange(language)}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor={language}
                className="ml-2 text-sm font-medium text-gray-300"
              >
                {language}
              </label>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8">Filter by Projects</h2>
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project} className="flex items-center">
              <input
                type="checkbox"
                id={project}
                checked={selectedProjects.includes(project)}
                onChange={() => handleProjectChange(project)}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label
                htmlFor={project}
                className="ml-2 text-sm font-medium text-gray-300"
              >
                {project}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="relative w-full sm:w-3/4 lg:w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search for Open Issues..."
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
                key={item.ID}
                className="col-span-full bg-[#272726] flex justify-between text-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105 w-full"
              >
                <Badge color="blue">In progress</Badge>

                <div>
                  <h3 className="text-xl font-bold mb-2">{item.bugTitle}</h3>
                  <p className="text-gray-400 mb-4">Reporter: {item.name}</p>
                  <p>{item.description}</p>
                </div>
                <Link
                  to={`/issue/${item.ID}`}
                  className="bg-blue-600 text-white px-4 py-2 self-end rounded-lg hover:bg-blue-700 transition"
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
    </div>
  );
};

export default Explore;
