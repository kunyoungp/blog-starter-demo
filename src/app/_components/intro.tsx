import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {SITE_DESCRIPTION}
        <br />
        <a
          href="https://mindlogic.ai/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Learn more about our AI solutions
        </a>
      </h4>
    </section>
  );
}
