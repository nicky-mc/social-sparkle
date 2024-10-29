import { SignUp } from "@clerk/nextjs";
import "tailwindcss/tailwind.css";

const CustomSignUpPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Join Us!</h1>
      <p className="mb-6">Create an account to get started</p>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      <div className="mt-4">
        <button className="btn btn-info" data-popover-target="popover-info">
          Need Help?
        </button>
        <div id="popover-info" role="tooltip" className="popover">
          <div className="popover-arrow"></div>
          <div className="popover-content">
            <p>Contact support at support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CustomSignUpPage;
