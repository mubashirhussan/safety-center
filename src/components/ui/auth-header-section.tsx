interface HeaderProps {
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "large" | "compact";
}

export function Header({
  title,
  description,
  className = "",
  variant = "default",
}: HeaderProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "large":
        return "py-24";
      case "compact":
        return "py-8";
      default:
        return "py-16";
    }
  };

  const getTitleStyles = () => {
    switch (variant) {
      case "large":
        return "text-5xl md:text-6xl";
      case "compact":
        return "text-2xl md:text-3xl";
      default:
        return "text-4xl";
    }
  };

  return (
    <header
      className={`bg-[#28485D] text-white px-4 ${getVariantStyles()} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className={`font-bold mb-4 ${getTitleStyles()}`}>{title}</h1>
        {description && (
          <p className="text-lg text-slate-200 ">{description}</p>
        )}
      </div>
    </header>
  );
}
