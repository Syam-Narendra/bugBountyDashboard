import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "~/components/ui/alert-dialog";
export const CreateIssueAlert = () => {
  const alertRef = useRef<HTMLButtonElement>(null);

  const onSubmit = () => {
    alertRef.current?.click();
  };

  return (
    <AlertDialog defaultOpen={true}>
      <AlertDialogContent className="min-w-fit m-8">
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="p-6 text-white rounded-lg shadow-lg mx-auto">
              <h1 className="text-3xl font-bold mb-4">
                Bug Bounty Program Submission
              </h1>
              <p className="mb-4">
                You're about to submit a report to{" "}
                <span className="text-blue-600">iHunt</span>. Please provide as
                much information as possible about the potential issue you have
                discovered. The more details you provide, the quicker iTalent
                team will be able to validate and resolve the issue.
              </p>

              <h2 className="text-2xl font-semibold mb-2">Program Rules</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Provide detailed reports with reproducible steps. If not
                  detailed enough, the issue will not be eligible for a reward.
                </li>
                <li>
                  Submit one vulnerability per report, unless chaining
                  vulnerabilities is required for impact.
                </li>
                <li>
                  Duplicates will only award the first fully reproducible
                  report.
                </li>
                <li>
                  Multiple vulnerabilities caused by one underlying issue will
                  result in one bounty.
                </li>
                <li>Social engineering (e.g., phishing) is prohibited.</li>
                <li>
                  Avoid privacy violations, data destruction, and service
                  interruption. Only interact with accounts you own or have
                  explicit permission to access.
                </li>
              </ul>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="mt-6">
            <button
              onClick={onSubmit}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              I Understand, Proceed to Report Submission
            </button>
            <AlertDialogAction ref={alertRef} className="hidden">
              Close
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
