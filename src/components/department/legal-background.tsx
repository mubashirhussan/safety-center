interface LegalBackgroundProps {
  content: string;
}

export default function LegalBackground({ content }: LegalBackgroundProps) {
  return (
    <section className="bg-gray-50 py-8 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Legal background
        </h2>
        <div className="prose prose-sm max-w-none text-gray-600">
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
}
