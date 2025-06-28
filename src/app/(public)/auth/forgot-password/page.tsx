import { ForgotForm } from "@/components/auth/forgot-password";
import { Header } from "@/components/ui/auth-header-section";

export default function LoginPage() {
  return (
    <div className=" bg-[#F1F5F8]">
      <Header
        title="Forgot Password"
        description="Enter your email to reset your password."
      />

      {/* Main Content */}
      <main className="py-16 bg  max-w-7xl mx-auto">
        <div className="max-w-md px-4 md:px-6 lg:px-6 xl:p-0">
          <ForgotForm />
        </div>
      </main>
    </div>
  );
}
