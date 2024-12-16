import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-[#24272D]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Empower Your Education Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33FEA8] to-emerald-400">
                  Digital Skills
                </span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Balance your studies and earn income with flexible opportunities. Join Earn4Edu to unlock your potential while supporting your education.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#join"
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#24272D] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
              >
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#238c5c]"></span>
                <span className="absolute inset-0 bg-[#33FEA8]"></span>
                <span className="relative flex items-center">
                  Start Earning
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#services"
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#33FEA8] transition-all duration-200 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] group"
              >
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-[#33FEA8]/10"></span>
                <span className="absolute inset-0 border-2 border-[#33FEA8]"></span>
                <span className="relative">Explore Skills</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {[
                ['500+', 'Active Students'],
                ['$100+', 'Min. Monthly Income'],
                ['25-30', 'Hours/Month'],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat}</div>
                  <div className="text-gray-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#33FEA8]/20 to-emerald-400/20 blur-3xl -z-10" />
            <img
              src=""
              alt="Students collaborating"
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}