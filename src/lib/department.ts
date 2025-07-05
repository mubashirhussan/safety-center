import { Shield, Zap } from "lucide-react";

export interface DepartmentData {
  slug: string;
  name: string;
  description: string;
  icon: unknown;
  header: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    backgroundColor?: string;
  };
  courses:
    | {
        title: string;
        subtitle: string;
        iconType: "warning" | "book" | "play";
        buttons: Array<{
          text: string;
          variant: "primary" | "secondary";
        }>;
      }
    | {
        title: string;
        items: Array<{
          title: string;
          subtitle: string;
          iconType: "warning" | "book" | "play";
          buttons: Array<{
            text: string;
            variant: "primary" | "secondary";
          }>;
        }>;
      };
  news: {
    title: string;
    newsItems: Array<{
      title: string;
      date: string;
      summary: string;
    }>;
    emptyMessage: string;
  };
  legalBackground: string;
}

const departmentsData: Record<string, DepartmentData> = {
  spectroscopy: {
    slug: "spectroscopy",
    name: "Spectroscopy Department",
    description:
      "Laser safety, optical equipment training, and spectroscopy protocols",
    icon: Zap,
    header: {
      title: "Welcome to the Spectroscopy Safety Centre",
      description:
        "Welcome to the Safety Centre of the Spectroscopy Department - the online training tool for laser safety, optical equipment handling, and spectroscopy protocols. The laser protection training courses and various other specific training courses can now be completed as e-learning. Please ask your direct supervisor which training courses you need to complete.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      imageAlt: "Spectroscopy Laboratory Building",
      backgroundColor: "bg-[#28485D]",
    },
    courses: {
      title: "Courses",
      items: [
        {
          title: "Safety In The Laboratory",
          subtitle: "Laser Beam Safety",
          iconType: "warning",
          buttons: [
            { text: "Start course", variant: "primary" },
            { text: "Start test", variant: "secondary" },
          ],
        },
        {
          title: "Occupational Safety",
          subtitle: "General And Fire",
          iconType: "warning",
          buttons: [
            { text: "Start course", variant: "primary" },
            { text: "Start test", variant: "secondary" },
          ],
        },
      ],
    },
    news: {
      title: "News",
      newsItems: [
        {
          title: "New Laser Safety Equipment Available",
          date: "2024-01-15",
          summary:
            "Updated laser safety goggles and protective equipment now available in the lab.",
        },
        {
          title: "Spectroscopy Training Update",
          date: "2024-01-10",
          summary:
            "New training modules for advanced spectroscopy techniques have been added.",
        },
      ],
      emptyMessage: "No news available.",
    },
    legalBackground:
      "The spectroscopy department's duty to train its employees in laser safety is enshrined in the German Constitution. Every person has the right to life and physical integrity (Article 2 of the German Constitution). As soon as a worker, employee or third party worker enters the premises of the Spectroscopy Department, the institute fulfils the duty to ensure that these persons are not harmed in the execution of their duties involving laser equipment and optical instruments.",
  },

  administration: {
    slug: "administration",
    name: "Administration Department",
    description:
      "General safety, office protocols, and administrative procedures training",
    icon: Shield,
    header: {
      title: "Welcome to the Administration Safety Centre",
      description:
        "Welcome to the Safety Centre of the Administration Department - the online training tool for general office safety, administrative protocols, and workplace procedures. The occupational safety, fire protection and general workplace safety training courses can now be completed as e-learning. Please ask your direct supervisor which training courses you need to complete.",
      imageUrl: "/placeholder.svg?height=300&width=400",
      imageAlt: "Administration Building",
      backgroundColor: "bg-[#28485D]",
    },
    courses: {
      title: "Courses",
      items: [
        {
          title: "Safety In The Laboratory",
          subtitle: "Laser Beam Safety",
          iconType: "warning",
          buttons: [
            { text: "Start course", variant: "primary" },
            { text: "Start test", variant: "secondary" },
          ],
        },
        {
          title: "Occupational Safety",
          subtitle: "General And Fire",
          iconType: "warning",
          buttons: [
            { text: "Start course", variant: "primary" },
            { text: "Start test", variant: "secondary" },
          ],
        },
      ],
    },
    news: {
      title: "News",
      newsItems: [
        {
          title: "Updated Office Safety Guidelines",
          date: "2024-01-20",
          summary:
            "New guidelines for ergonomic workstation setup and office safety protocols.",
        },
      ],
      emptyMessage: "No news available.",
    },
    legalBackground:
      "The administration department's duty to train its employees in workplace safety is enshrined in the German Constitution. Every person has the right to life and physical integrity (Article 2 of the German Constitution). As soon as a worker, employee or third party worker enters the premises of the Administration Department, the institute fulfils the duty to ensure that these persons are not harmed in the execution of their administrative duties or otherwise.",
  },
};

export async function getDepartmentData(
  departmentSlug: string
): Promise<DepartmentData | null> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return departmentsData[departmentSlug] || null;
}

export async function getAllDepartments(): Promise<
  Array<{
    slug: string;
    name: string;
    description: string;
    icon: unknown;
  }>
> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return Object.values(departmentsData).map((dept) => ({
    slug: dept.slug,
    name: dept.name,
    description: dept.description,
    icon: dept.icon,
  }));
}
