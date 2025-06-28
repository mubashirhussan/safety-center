import { RegisterForm } from "@/components/auth/register-form";
import { Header } from "@/components/ui/auth-header-section";

export default function LoginPage() {
  return (
    <div className=" bg-[#F1F5F8]">
      <Header
        title="Register"
        description="Please provide the following information to register."
      />

      {/* Main Content */}
      <main className="py-16 bg  max-w-7xl mx-auto">
        <div className="max-w-md">
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}
