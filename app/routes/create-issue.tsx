import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "~/components/ui/alert-dialog";
import { CreateIssueAlert } from "~/customComponents/CreateIssueAlert";

export interface BugReport {
  ID: number;
  roleName: string;
  bugTitle: string;
  description: string;
  severityLevel: string;
  browserEnv: string;
  technologyUsed: string;
  email: string;
  name: string;
  projectName: string;
}

const CreateIssue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BugReport>();
  const onSubmit = async (data: BugReport) => {
    setIsLoading(true);
    const res = await fetch("http://127.0.0.1:3000/api/create-bug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setIsLoading(false);
    setIsSuccessOpen(true);

    console.log(json);
  };

  return (
    <div className="bg-black">
      <CreateIssueAlert />
      <div className="max-w-lg mx-auto p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Bug Bounty Submission
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="mt-1 block w-4/5  p-2 border border-white text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Brief title of the bug"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Bug Title
            </label>
            <input
              type="text"
              {...register("bugTitle", { required: true })}
              className="mt-1 block w-4/5  p-2 border border-white text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Brief title of the bug"
            />
            {errors.bugTitle && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="mt-1 block w-4/5  p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Detailed description of the bug"
              rows={4}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                Description is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Severity Level
            </label>
            <select
              {...register("severityLevel", { required: true })}
              className="mt-1 block w-4/5  p-2 border border-white bg-black text-white rounded-md focus:outline-none"
            >
              <option value="">Select severity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
            {errors.severityLevel && (
              <span className="text-red-500 text-sm">Severity is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Browser/Environment
            </label>
            <input
              type="text"
              {...register("browserEnv", { required: true })}
              className="mt-1 block w-4/5 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="E.g., Chrome, Firefox, or environment details"
            />
            {errors.browserEnv && (
              <span className="text-red-500 text-sm">
                Environment is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Technology and Languages Used
            </label>
            <input
              type="text"
              {...register("technologyUsed", { required: true })}
              className="mt-1 block w-4/5  p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="List technologies and languages used"
            />
            {errors.technologyUsed && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 block w-4/5  p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Valid email is required
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>

      <AlertDialog open={isSuccessOpen}>
        <AlertDialogContent className="min-w-fit m-8">
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div className="p-6 text-white rounded-lg shadow-lg mx-auto">
                <h1 className="text-3xl font-bold mb-4">Issue Created</h1>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsSuccessOpen(false)}>
              Ok
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CreateIssue;
