import { LoginForm } from "@/components/auth/login-form";
import { Header } from "@/components/ui/auth-header-section";

export default function LoginPage() {
  return (
    <div className=" bg-[#F1F5F8]">
      <Header
        title="Login"
        description="Please login to access the safety courses and tests."
      />

      {/* Main Content */}
      <main className="py-16 bg  max-w-7xl mx-auto">
        <div className="max-w-md">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
