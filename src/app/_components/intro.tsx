import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export function Intro() {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mindlogic-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
        <div className="inline-block px-4 py-2 bg-mindlogic-100 dark:bg-mindlogic-900/30 rounded-full border border-mindlogic-200 dark:border-mindlogic-800">
          <span className="text-sm font-semibold text-mindlogic-700 dark:text-mindlogic-300">
            AI Innovation from Seoul 🇰🇷
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
          <span className="gradient-text">{SITE_NAME}</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          {SITE_DESCRIPTION}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="https://mindlogic.ai/"
            className="btn-primary"
          >
            Explore Our Solutions
          </a>
          <a
            href="#posts"
            className="btn-secondary dark:border-mindlogic-400 dark:text-mindlogic-400 dark:hover:bg-mindlogic-600"
          >
            Read Our Blog
          </a>
        </div>

        {/* Products showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-mindlogic-100 dark:border-slate-700 card-hover">
            <div className="text-3xl mb-3">🎭</div>
            <h3 className="font-bold text-lg mb-2 text-mindlogic-700 dark:text-mindlogic-300">Bliss</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Persona-based AI chatbots</p>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-mindlogic-100 dark:border-slate-700 card-hover">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold text-lg mb-2 text-mindlogic-700 dark:text-mindlogic-300">FactChat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise multi-LLM platform</p>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-mindlogic-100 dark:border-slate-700 card-hover">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="font-bold text-lg mb-2 text-mindlogic-700 dark:text-mindlogic-300">Informe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">24/7 multilingual chatbot</p>
          </div>
        </div>
      </div>
    </section>
  );
}
