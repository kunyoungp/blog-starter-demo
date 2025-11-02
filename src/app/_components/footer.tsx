import Container from "@/app/_components/container";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-lg mb-2">People who create AI you want to talk to more</p>
            <p className="text-sm">331 Bongeunsa-ro, Gangnam-gu, Seoul, South Korea</p>
            <p className="text-sm">Business Registration: 331-81-01353</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://mindlogic.ai/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Visit Our Website
            </a>
            <a
              href="mailto:contact@mindlogic.ai"
              className="mx-3 font-bold hover:underline"
            >
              contact@mindlogic.ai
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
