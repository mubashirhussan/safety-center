import CoursesSection from "@/components/department/courses-section";
import LegalBackground from "@/components/department/legal-background";
import NewsSection from "@/components/department/news-section";
import Header from "@/components/ui/department-header-section";
import { getDepartmentData } from "@/lib/department";
import { notFound } from "next/navigation";

interface DepartmentPageProps {
  params: Promise<{ department: string }>;
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { department } = await params;
  const departmentData = await getDepartmentData(department);

  if (!departmentData) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header {...departmentData.header} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {departmentData.courses.title}
            </h2>
            {"items" in departmentData.courses ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {departmentData.courses.items.map((course, index) => (
                  <CoursesSection key={index} {...course} />
                ))}
              </div>
            ) : (
              <CoursesSection {...departmentData.courses} />
            )}
          </div>
          <NewsSection {...departmentData.news} />
        </div>
      </div>
      <LegalBackground content={departmentData.legalBackground} />
    </div>
  );
}
