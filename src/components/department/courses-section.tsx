import { AlertTriangle, BookOpen, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseButton {
  text: string;
  variant: 'primary' | 'secondary' | 'outline';
}

interface CoursesSectionProps {
  title: string;
  subtitle: string;
  iconType: 'warning' | 'book' | 'play';
  buttons: CourseButton[];
}

const iconMap = {
  warning: AlertTriangle,
  book: BookOpen,
  play: Play,
};

export default function CoursesSection({
  subtitle,
  iconType,
}: CoursesSectionProps) {
  const IconComponent = iconMap[iconType];

  return (
    <div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-6">
          <p className="text-sm text-gray-600">{subtitle}</p>

          <div className="flex justify-center py-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-[#28485D] text-white font-medium  cursor-pointer"
            >
              Start course
            </Button>

            <Button
              type="submit"
              variant="outline"
              className="w-full bg-white text-[#28485D] border border-[#28485D] font-medium hover:bg-[#28485D] hover:text-white cursor-pointer"
            >
              Start test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
