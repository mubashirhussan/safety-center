// app/(dashboard)/layout.tsx or app/dashboard/layout.tsx
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";
import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar1';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  //   const session = await getServerSession(authOptions);

  //   if (!session?.user) {
  //     redirect("/auth/login");
  //   }

  return (
    <div className="bg-[#F1F5F8]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
