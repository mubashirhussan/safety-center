import Footer from "@/components/footer";
import PublicNavbar from "@/components/public-navbar";
// import { PublicNavbar } from "@/components/public-navbar";

interface PublicLayoutProps {
  children: React.ReactNode;
}
export default async function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="bg-[#F1F5F8]">
      <PublicNavbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
}
