// // app/Courses/[course]/page.tsx
// import MarkdownContent from "@/components/ui/markdown-content";
// import { markdownContent } from "@/components/ui/test-markdown";
// // import { notFound } from "next/navigation";
// // import MarkdownViewer from '@/components/MarkdownViewer'

// interface Props {
//   params: Promise<{ course: string }>;
// }
// // interface CourseData {
// //   title: string;
// //   description: string; // Markdown content
// // }

// // async function getCourseBySlug(slug: string): Promise<CourseData> {
// //   const res = await fetch(
// //     `https://your-strapi-url.com/api/courses?filters[slug][$eq]=${slug}`
// //   );
// //   const json = await res.json();
// //   const data = json.data?.[0]?.attributes;

// //   return {
// //     title: data.title,
// //     description: data.description,
// //   };
// // }
// export default async function CoursePage({ params }: Props) {
//   const { course } = await params;

//   //   const course = await getCourseBySlug(params.course);

//   //   if (!course) return notFound();

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">{course}</h1>
//       <MarkdownContent content={markdownContent} />
//     </div>
//   );
// }
'use client';

import { useState, useEffect, useRef } from 'react';

const outlineItems = [
  { id: 1, title: 'General rules of conduct', sectionId: 'section-1' },
  { id: 2, title: 'Security in the office', sectionId: 'section-2' },
  { id: 3, title: 'Ergonomics in the workplace', sectionId: 'section-3' },
  {
    id: 4,
    title: 'First aid organisations and facilities',
    sectionId: 'section-4',
  },
  {
    id: 5,
    title: 'Definition of occupational accident / commuting accident',
    sectionId: 'section-5',
  },
  { id: 6, title: 'Emergency Management', sectionId: 'section-6' },
  {
    id: 7,
    title: 'Hazardous substances, safety and health markings',
    sectionId: 'section-7',
  },
  { id: 8, title: 'Nonconforming electrical devices', sectionId: 'section-8' },
  { id: 9, title: 'Fire protection - basics', sectionId: 'section-9' },
  { id: 10, title: 'Fire outbreak', sectionId: 'section-10' },
  { id: 11, title: 'Causes of fire', sectionId: 'section-11' },
  { id: 12, title: 'Fire classes', sectionId: 'section-12' },
  { id: 13, title: 'Extinguishing process', sectionId: 'section-13' },
  {
    id: 14,
    title: 'Fire extinguishers and fire protection equipment',
    sectionId: 'section-14',
  },
  { id: 15, title: 'Amount of Smoke', sectionId: 'section-15' },
  { id: 16, title: 'Fire protection assistant', sectionId: 'section-16' },
  { id: 17, title: 'Escape and rescue plan', sectionId: 'section-17' },
  { id: 18, title: 'Assembly Point', sectionId: 'section-18' },
  { id: 19, title: 'Behaviour in case of fire', sectionId: 'section-19' },
  { id: 20, title: 'Safety rules', sectionId: 'section-20' },
  { id: 21, title: 'Fire fighting of initial fires', sectionId: 'section-21' },
  { id: 22, title: 'Fire protection regulations', sectionId: 'section-22' },
  { id: 23, title: 'Industrial trucks', sectionId: 'section-23' },
];

const contentSections = [
  {
    id: 'section-1',
    title: 'GENERAL RULES OF CONDUCT',
    content: [
      {
        type: 'subtitle',
        text: "DGUV Regulation § 15 (1,2) 'General support obligations and behaviour'",
      },
      {
        type: 'bullet',
        text: "Insured persons (employees) are obliged to ensure their safety and health at work and the safety and health of those affected by their actions or omissions within the limits of their capabilities and in accordance with the instructions and directives of the employer (director, supervisor). The insured persons shall support measures to prevent occupational accidents, occupational diseases and work-related health hazards and to provide effective first aid. Insured persons shall follow the employer's instructions in this respect. Insured persons shall not follow instructions that are manifestly contrary to safety and health.",
      },
      {
        type: 'bullet',
        text: 'Insured persons shall not use alcohol, drugs or other intoxicating substances to the extent that they endanger themselves or others.',
      },
      {
        type: 'bullet',
        text: 'Employees must report any defect or threat to health and safety to the employer / responsible superior.',
      },
      {
        type: 'bullet',
        text: 'Defects can be, for example:',
        subItems: [
          'defective electrical equipment, machines, tools',
          'work procedures or defective work processes that constitute hazards',
        ],
      },
      {
        type: 'bullet',
        text: 'The equipment provided by the employer is intended exclusively for operational use within the work-place. Machines, devices, tools, working materials, means of transport, other work equipment, protective devices and personal protective equipment provided by the employer may only be used for operational purposes.',
      },
      {
        type: 'bullet',
        text: 'The personal protective equipment provided must be worn.',
      },
      {
        type: 'bullet',
        text: "Employees may only work with machines, working materials and work equipment if they have been trained in the proper use of them, and if these tasks fit the employee's job description.",
      },
      {
        type: 'bullet',
        text: 'Electrical systems and equipment must comply with the safety requirements as determined by law as well as those set by trade associations, the company and local safety requirements.',
      },
      {
        type: 'bullet',
        text: 'Ensure that electrical equipment is in a workable condition! If there are coffee machines, kettles etc. in the offices, these must be placed on a fireproof base. This can be ordered from the workshop. However, it can also be a tile, for example.',
      },
      {
        type: 'bullet',
        text: 'Power supply units of a PC or similar devices must not be placed on easily flammable objects, e.g. paper.',
      },
      {
        type: 'bullet',
        text: 'Each employee must personally be instructed by his supervisor in job-related work safety issues before starting work.',
      },
    ],
  },
  {
    id: 'section-2',
    title: 'SECURITY IN THE OFFICE',
    content: [
      {
        type: 'subtitle',
        text: 'Office security protocols and procedures',
      },
      {
        type: 'bullet',
        text: 'All employees must be aware of security protocols and emergency procedures.',
      },
      {
        type: 'bullet',
        text: 'Access control systems should be properly maintained and monitored.',
      },
      {
        type: 'bullet',
        text: 'Visitors must be properly registered and escorted when necessary.',
      },
    ],
  },
  {
    id: 'section-3',
    title: 'ERGONOMICS IN THE WORKPLACE',
    content: [
      {
        type: 'subtitle',
        text: 'Workplace ergonomics and employee health',
      },
      {
        type: 'bullet',
        text: 'Workstations should be adjusted to individual employee needs.',
      },
      {
        type: 'bullet',
        text: 'Regular breaks and stretching exercises are recommended.',
      },
      {
        type: 'bullet',
        text: 'Proper lighting and ventilation must be maintained.',
      },
    ],
  },
];

export default function DocumentLayout() {
  const [activeSection, setActiveSection] = useState('section-1');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 max-w-6xl mx-auto">
      {/* Sidebar - Outline */}
      <div className="w-80 bg-gray-100 flex mt-4 flex-col fixed h-full">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Outline</h2>

          <ol className="space-y-2 text-sm text-gray-600">
            {outlineItems.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <span className="text-gray-500 font-medium min-w-[20px]">
                  {item.id}.
                </span>
                <button
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`text-left hover:text-gray-900 transition-colors ${
                    activeSection === item.sectionId
                      ? 'text-gray-900 font-medium'
                      : ''
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-80 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {contentSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              data-section
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 mb-8 scroll-mt-20"
            >
              <h1 className="text-2xl font-bold text-gray-800 mb-8 tracking-wide">
                {section.title}
              </h1>

              <div className="space-y-6">
                {section.content.map((item, index) => (
                  <div key={index}>
                    {item.type === 'subtitle' && (
                      <p className="text-gray-600 font-medium mb-6">
                        {item.text}
                      </p>
                    )}

                    {item.type === 'bullet' && (
                      <div className="mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">
                            {item.text}
                          </p>
                        </div>

                        {item.subItems && (
                          <div className="ml-6 mt-3 space-y-2">
                            {item.subItems.map((subItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1 h-1 bg-gray-500 rounded-full mt-3 flex-shrink-0"></div>
                                <p className="text-gray-600 leading-relaxed">
                                  {subItem}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Additional sections for demonstration */}
          <div className="space-y-8">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={`section-${i + 4}`}
                id={`section-${i + 4}`}
                data-section
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-12"
              >
                <h1 className="text-2xl font-bold text-gray-800 mb-8 tracking-wide">
                  {outlineItems[i + 3]?.title.toUpperCase() ||
                    `SECTION ${i + 4}`}
                </h1>
                <div className="space-y-6">
                  <p className="text-gray-600 font-medium mb-6">
                    Guidelines and procedures for{' '}
                    {outlineItems[i + 3]?.title || `Section ${i + 4}`}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        Important safety guidelines and procedures must be
                        followed at all times to ensure workplace safety and
                        compliance.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        Regular training and updates ensure compliance with
                        current regulations and best practices.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        Documentation and reporting procedures are essential for
                        maintaining safety standards and regulatory compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
