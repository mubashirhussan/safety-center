// app/Courses/[course]/page.tsx
import MarkdownContent from "@/components/ui/markdown-content";
import { markdownContent } from "@/components/ui/test-markdown";
// import { notFound } from "next/navigation";
// import MarkdownViewer from '@/components/MarkdownViewer'

interface Props {
  params: { course: string };
}
// interface CourseData {
//   title: string;
//   description: string; // Markdown content
// }

// async function getCourseBySlug(slug: string): Promise<CourseData> {
//   const res = await fetch(
//     `https://your-strapi-url.com/api/courses?filters[slug][$eq]=${slug}`
//   );
//   const json = await res.json();
//   const data = json.data?.[0]?.attributes;

//   return {
//     title: data.title,
//     description: data.description,
//   };
// }
export default async function CoursePage({ params }: Props) {
  //   const course = await getCourseBySlug(params.course);

  //   if (!course) return notFound();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{params.course}</h1>
      <MarkdownContent content={markdownContent} />
    </div>
  );
}
