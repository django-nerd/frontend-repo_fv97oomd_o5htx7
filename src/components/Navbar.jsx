import { motion } from 'framer-motion';
import { Rocket, Settings, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white text-lg">NexxWorks</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white shadow-sm hover:bg-white/10 transition-colors">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-3 py-1.5 text-sm font-medium shadow hover:shadow-lg transition-shadow">
            <Settings className="h-4 w-4" />
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
