import { CreateIssueAlert } from "~/customComponents/CreateIssueAlert";
import { useForm } from "react-hook-form";

const CreateIssue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
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
              Bug Title
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Brief title of the bug"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">Title is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              {...register("description", { required: true })}
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
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
              Steps to Reproduce
            </label>
            <textarea
              {...register("steps", { required: true })}
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="List the steps to reproduce the bug"
              rows={4}
            />
            {errors.steps && (
              <span className="text-red-500 text-sm">Steps are required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Severity Level
            </label>
            <select
              {...register("severity", { required: true })}
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select severity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
            {errors.severity && (
              <span className="text-red-500 text-sm">Severity is required</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Browser/Environment
            </label>
            <input
              type="text"
              {...register("environment", { required: true })}
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="E.g., Chrome, Firefox, or environment details"
            />
            {errors.environment && (
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
              {...register("technologies", { required: true })}
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="List technologies and languages used"
            />
            {errors.technologies && (
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
              className="mt-1 block w-4/5 md:w-3/4 p-2 border border-white bg-black text-white rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
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
              Submit Bug
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIssue;
