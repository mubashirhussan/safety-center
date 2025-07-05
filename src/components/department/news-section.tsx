interface NewsItem {
  title: string;
  date: string;
  summary: string;
}

interface NewsSectionProps {
  title?: string;
  newsItems?: NewsItem[];
  emptyMessage?: string;
}

export default function NewsSection({
  title = "News",
  newsItems = [],
  emptyMessage = "No news available.",
}: NewsSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        {newsItems.length === 0 ? (
          <p className="text-gray-500 text-sm">{emptyMessage}</p>
        ) : (
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-3 last:border-b-0"
              >
                <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                <p className="text-sm text-gray-600">{item.summary}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
