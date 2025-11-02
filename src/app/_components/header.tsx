import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800 mb-12">
      <nav className="container mx-auto px-5">
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-105 transition-transform">
              {SITE_NAME}
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/#posts"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-mindlogic-600 dark:hover:text-mindlogic-400 transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://mindlogic.ai/"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-mindlogic-600 text-white text-sm font-semibold rounded-lg hover:bg-mindlogic-700 transition-colors"
            >
              Visit Website
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
