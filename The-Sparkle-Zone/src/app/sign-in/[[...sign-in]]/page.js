import { SignIn } from "@clerk/nextjs";
import "tailwindcss/tailwind.css";

const CustomSignInPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
      <p className="mb-6">Please sign in to continue</p>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
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

export default CustomSignInPage;
