import Footer from "@/components/footer";
import PublicNavbar from "@/components/public-navbar";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="bg-[#F1F5F8] ">
      <PublicNavbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
}
