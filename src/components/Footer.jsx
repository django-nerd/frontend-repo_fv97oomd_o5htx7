import { Github, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3 items-center">
        <div>
          <h4 className="text-white font-semibold">NexxWorks</h4>
          <p className="text-white/70 text-sm mt-1">
            A modern, animated workspace for teams who move fast.
          </p>
        </div>
        <div className="text-white/70 text-sm">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <span className="mx-3">•</span>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <span className="mx-3">•</span>
          <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
        </div>
        <div className="flex justify-start md:justify-end gap-3">
          <a aria-label="Website" href="#" className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors"><Globe className="h-4 w-4" /></a>
          <a aria-label="GitHub" href="#" className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors"><Github className="h-4 w-4" /></a>
          <a aria-label="Twitter" href="#" className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
