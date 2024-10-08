import React, { useState } from "react";

const IssueView = () => {
  const [comments, setComments] = useState("");
  const issue = {
    id: 6,
    title: "Improper Error Handling in File Upload",
    description:
      "The Go file upload handler fails to check for file size limits and error responses, leading to potential denial-of-service attacks.",
    language: "Go",
    reporter: "Priya",
    status: "Open", // Added Status
    priority: "High", // Added Priority
    dateReported: "2024-10-01", // Added Date Reported
  };

  return (
    <div className="bg-gray-950 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{issue.title}</h2>
      <p className="mb-2">
        <span className="font-semibold">Reporter:</span> {issue.reporter}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Language:</span> {issue.language}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Status:</span> {issue.status}{" "}
        {/* New Field */}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Priority:</span> {issue.priority}{" "}
        {/* New Field */}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Date Reported:</span>{" "}
        {issue.dateReported} {/* New Field */}
      </p>
      <h3 className="text-lg font-semibold mt-4">Description:</h3>
      <p className="mt-2">{issue.description}</p>

      <button
        // onClick={handleSubmit}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Take This Task
      </button>
    </div>
  );
};

// Usage in the main component
const Issue = () => {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-black">
      <IssueView />
    </div>
  );
};

export default Issue;
