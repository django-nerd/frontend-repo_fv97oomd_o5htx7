import { motion } from 'framer-motion';
import { MessageSquare, Phone, Video, Mic, Folder, Calendar, Search, Shield } from 'lucide-react';

const features = [
  { icon: MessageSquare, title: 'Chats & Channels', desc: 'Organize conversations with threads, reactions, and mentions.' },
  { icon: Phone, title: 'Audio Huddles', desc: 'Jump into quick 1-minute meetings or long-form calls.' },
  { icon: Video, title: 'Video Calls', desc: 'WebRTC-powered video with screen sharing and grid view.' },
  { icon: Mic, title: 'Voice Notes', desc: 'Record and drop quick updates directly in chat.' },
  { icon: Folder, title: 'Shared Files', desc: 'Upload to S3/R2, preview securely with access control.' },
  { icon: Calendar, title: 'Meetings & Tasks', desc: 'Plan, track, and align work in one place.' },
  { icon: Search, title: 'Universal Search', desc: 'Find people, messages, and files instantly.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'SSO, RBAC, audit logs, and end-to-end controls.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-white"
        >
          Everything your team needs — with motion
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl border border-white/10 bg-black/30 backdrop-blur p-5 hover:border-white/20 transition-colors"
            >
              <f.icon className="h-6 w-6 text-white/90" />
              <h3 className="mt-3 text-white font-semibold">{f.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
