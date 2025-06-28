// import Footer from '@/components/footer';
// import { Navbar } from '@/components/navbar1';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto">{children}</div>;
}
