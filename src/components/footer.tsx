import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 lg:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/safety-center-logo.jpg"
              alt="Max Planck Institute of Quantum Optics"
              width={800}
              height={400}
              className="h-16 md:h-24 w-auto max-w-full"
            />
          </div>

          {/* Address */}
          <div className="text-sm text-gray-600 text-left">
            <div className="font-semibold text-gray-700 mb-1">Address</div>
            <div>Max-Planck-Institut für</div>
            <div>Quantenoptik</div>
            <div>Hans-Kopfermann-Str. 1</div>
            <div>85748 Garching,</div>
            <div>Germany</div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1 text-sm text-left">
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/imprint"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Imprint
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Last Built Info */}
        <div className="text-xs text-gray-500 text-center">
          Last built on: September 18, 2024, 17:20:24
        </div>
      </div>
    </footer>
  );
}
