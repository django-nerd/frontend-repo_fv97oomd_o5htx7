import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b10] via-[#0e0e18] to-[#0b0b10] text-white">
      <Navbar />
      <Hero />
      <Features />
      <section id="demo" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-8">
          <h2 className="text-xl md:text-2xl font-semibold">Live demo preview</h2>
          <p className="text-white/70 mt-2">This sandbox shows the aesthetic and motion direction for NexxWorks. Realtime chat, calls, and storage would connect to the backend and WebRTC services.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <h3 className="font-medium">Chat</h3>
              <p className="text-white/70 text-sm mt-1">Threads, reactions, typing indicators.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <h3 className="font-medium">Calls & Huddles</h3>
              <p className="text-white/70 text-sm mt-1">Audio/video, screen share with WebRTC.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
