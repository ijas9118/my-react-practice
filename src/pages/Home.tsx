import React from "react";
import { Link } from "react-router-dom";
import { GithubIcon, ArrowRight, Code2, Zap, Layout } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New Challenges Added
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
            Master Frontend <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Machine Coding
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            A comprehensive collection of production-ready React challenges.
            Level up your skills with real-world interview problems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/challenges"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group"
            >
              Start Coding
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <a
              href="https://github.com/ijas9118/my-react-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <GithubIcon size={18} />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why ReactQuest?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Designed to help you crack frontend interviews by focusing on patterns, clarity, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="text-indigo-600" size={32} />,
                title: "Real-world Scenarios",
                desc: "Challenges based on actual interview questions from top tech companies.",
              },
              {
                icon: <Layout className="text-purple-600" size={32} />,
                title: "Production Standards",
                desc: "Solutions written with scalability, accessibility, and performance in mind.",
              },
              {
                icon: <Zap className="text-amber-500" size={32} />,
                title: "Modern Stack",
                desc: "Built with React 19, TypeScript, Vite, and Tailwind CSS v4.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 group"
              >
                <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-slate-900 text-white p-12 md:p-20 overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#4f46e5_0%,transparent_50%)] opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to challenge yourself?</h2>
              <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
                Dive into the collection designed to test your knowledge and improve your problem-solving skills.
              </p>
              <Link
                to="/challenges"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Explore Challenges
              </Link>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-30" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-30" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
