import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar1";

interface PublicLayoutProps {
  children: React.ReactNode;
}
export default async function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
