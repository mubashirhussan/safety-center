import Image from "next/image";

interface HeaderProps {
  Name_en: string;
  description_en: string;
  imageUrl: string;
  imageAlt: string;
  backgroundColor?: string;
}

export default function Header({
  Name_en,
  description_en,
  imageUrl,
  imageAlt,
  backgroundColor = "bg-slate-600",
}: HeaderProps) {
  return (
    <header className={`${backgroundColor} text-white py-16`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAlt}
              width={400}
              height={150}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold">{Name_en}</h1>
            <p className="text-sm lg:text-base leading-relaxed opacity-90">
              {description_en}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
