import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            NexxWorks
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            A futuristic, animated workspace for chat, calls, huddles, files, and meetings — crafted with motion.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-white text-black px-5 py-3 font-medium shadow hover:shadow-lg transition-shadow">
              Launch Demo
            </button>
            <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors">
              Explore Features
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-2 gap-4 content-start"
        >
          {[
            { title: '1:1 & Group Chats', desc: 'Realtime chat with reactions and threads' },
            { title: 'Calls & Huddles', desc: 'WebRTC audio, video, and screen share' },
            { title: 'Files', desc: 'Upload, preview, and share securely' },
            { title: 'Presence', desc: 'Online, typing, and read receipts' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 * i }}
              className="rounded-2xl p-4 border border-white/10 bg-black/30 backdrop-blur-md"
            >
              <h3 className="text-white font-semibold">{card.title}</h3>
              <p className="text-white/70 text-sm mt-1">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  );
}
