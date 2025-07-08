import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar1';

interface PublicLayoutProps {
  children: React.ReactNode;
}
export default async function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="bg-[#F1F5F8]">
      <Navbar />
      <main className="mt-20">{children}</main>
      <Footer />
    </div>
  );
}
