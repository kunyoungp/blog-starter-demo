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
          <div className="pt-8 border-t border-blue-800/50 text-center">
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} Mindlogic. All rights reserved. | Building AI you want to talk to more.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
