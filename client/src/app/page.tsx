import Navbar from '@/components/Navbar';
import { ArrowRight, BookOpen, Users, Compass, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-mesh opacity-40 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accelerate your career with expert guidance
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Find Your Path with <br />
            <span className="text-gradient">Career Guidance Mentors</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Connect with industry experts, get personalized career roadmaps, and master the skills needed to land your dream job.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-600/20">
              Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 rounded-xl font-bold transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-16">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Expert Mentors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">10k+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CareerCoach?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We provide a comprehensive ecosystem for career growth and professional development.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-6 h-6 text-blue-500" />}
              title="1-on-1 Mentorship"
              description="Direct access to professionals from top companies like Google, Meta, and Amazon."
            />
            <FeatureCard
              icon={<Compass className="w-6 h-6 text-purple-500" />}
              title="Career Roadmaps"
              description="Step-by-step guidance tailored to your specific goals and background."
            />
            <FeatureCard
              icon={<BookOpen className="w-6 h-6 text-pink-500" />}
              title="Skill Mastery"
              description="Curated resources and certifications to help you stay ahead in the industry."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; 2026 CareerCoach LMS. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl glass hover:border-white/20 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
