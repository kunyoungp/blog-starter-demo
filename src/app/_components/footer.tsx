import Container from "@/app/_components/container";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-mindlogic-900 via-mindlogic-800 to-mindlogic-950 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <Container>
        <div className="relative py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {SITE_NAME}
              </h3>
              <p className="text-blue-200 text-lg leading-relaxed">
                People who create AI you want to talk to more
              </p>
              <div className="flex gap-4">
                <a
                  href="https://mindlogic.ai/"
                  className="btn-primary"
                >
                  Visit Website
                </a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-blue-200 uppercase tracking-wide">
                Our Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://mindlogic.ai/" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                    <span>🎭</span> Bliss - Persona AI
                  </a>
                </li>
                <li>
                  <a href="https://factchat.bot" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                    <span>💼</span> FactChat - Enterprise LLM
                  </a>
                </li>
                <li>
                  <a href="https://informe.bot" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                    <span>🌐</span> Informe - Website Chatbot
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-blue-200 uppercase tracking-wide">
                Contact Us
              </h4>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300">📍</span>
                  <span>331 Bongeunsa-ro, Gangnam-gu<br />Seoul, South Korea</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✉️</span>
                  <a href="mailto:contact@mindlogic.ai" className="hover:text-blue-300 transition-colors">
                    contact@mindlogic.ai
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">🏢</span>
                  <span className="text-sm">Business Registration: 331-81-01353</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-blue-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-blue-300 text-sm">
                © {new Date().getFullYear()} Mindlogic. All rights reserved. | Building AI you want to talk to more.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="/feed.xml"
                  className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm"
                  aria-label="RSS Feed"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
                  </svg>
                  RSS Feed
                </a>
                <a
                  href="/sitemap.xml"
                  className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
                  aria-label="Sitemap"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
