import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, Play, Users, Shield, MessageSquare, 
  Cpu, Zap, Globe, Hexagon, Network, Disc, Target, 
  Radio, Layers, Activity, Smartphone, Monitor, Database
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const MEETINGS = [
  { id: "LWq4lIP3Oek", title: "11 Meeting", time: "11:00 AM", desc: "Digital Strategy Hub", color: "from-blue-600 to-indigo-600" },
  { id: "D_NV8qU7ZUo", title: "3 Meeting", time: "03:00 PM", desc: "Corporate Insights Hub", color: "from-indigo-600 to-purple-600" },
  { id: "bmo39684cyE", title: "6:30 meeting", time: "06:30 PM", desc: "Evening Tech Insights", color: "from-cyan-600 to-blue-600" },
  { id: "KWhhOZd5RYU", title: "7 meeting", time: "07:00 PM", desc: "Evening Townhall Session", color: "from-blue-700 to-blue-500" },
  { id: "vn2-RcxKWoo", title: "7:30 meeting", time: "07:30 PM", desc: "Night Strategy Sync", color: "from-indigo-700 to-purple-700" },
  { id: "b41w006Dwkw", title: "7 Modify", time: "07:00 PM", desc: "Live Modification Session", color: "from-emerald-600 to-teal-600" },
  { id: "zxwKZtPX96o", title: "3 Modify", time: "03:00 PM", desc: "Afternoon Update & Refinements", color: "from-rose-600 to-orange-600" }
];

const THEMES = [
  { 
    id: 'cosmic', 
    name: 'Cosmic Slate', 
    bg: 'bg-[#02040a]', 
    text: 'text-white', 
    border: 'border-white/5', 
    accent: 'text-blue-500',
    accentBg: 'bg-blue-600',
    glowColor: 'rgba(37,99,235,0.3)',
    glowClass: 'bg-blue-500/5',
    gradFrom: 'from-blue-500',
    gradTo: 'to-indigo-600',
    sidebarBg: 'bg-[#02040a]/40',
    cardBg: 'bg-slate-800/40',
    cardBorder: 'border-white/5',
    cardHoverBg: 'hover:bg-slate-800/60',
    cardHoverBorder: 'hover:border-white/10',
    frameBorder: 'border-[#131b2d]',
    iframeBorder: 'border-[#131b2d]',
    frameRing: 'ring-white/10',
    badgeBg: 'bg-blue-600/10',
    badgeBorder: 'border-blue-500/20',
    badgeText: 'text-blue-400',
    commentUser: 'text-blue-400',
    gridDotColor: 'bg-blue-500/40',
    textDecoration: 'decoration-blue-500/50'
  },
  { 
    id: 'cyber', 
    name: 'Cyber Neon', 
    bg: 'bg-[#06020f]', 
    text: 'text-pink-100', 
    border: 'border-pink-500/20', 
    accent: 'text-pink-500',
    accentBg: 'bg-pink-600',
    glowColor: 'rgba(236,72,153,0.35)',
    glowClass: 'bg-pink-500/5',
    gradFrom: 'from-pink-500',
    gradTo: 'to-purple-600',
    sidebarBg: 'bg-[#06020f]/60',
    cardBg: 'bg-pink-950/10',
    cardBorder: 'border-pink-500/10',
    cardHoverBg: 'hover:bg-pink-950/20',
    cardHoverBorder: 'hover:border-pink-400/30',
    frameBorder: 'border-[#1b0824]',
    iframeBorder: 'border-[#1b0824]',
    frameRing: 'ring-pink-500/20',
    badgeBg: 'bg-pink-600/10',
    badgeBorder: 'border-pink-500/20',
    badgeText: 'text-pink-400',
    commentUser: 'text-pink-400',
    gridDotColor: 'bg-pink-500/40',
    textDecoration: 'decoration-pink-500/50'
  },
  { 
    id: 'minimal', 
    name: 'Dark Minimal', 
    bg: 'bg-[#07080a]', 
    text: 'text-slate-200', 
    border: 'border-slate-800', 
    accent: 'text-slate-400',
    accentBg: 'bg-slate-800',
    glowColor: 'rgba(148,163,184,0.08)',
    glowClass: 'bg-slate-500/2',
    gradFrom: 'from-slate-700',
    gradTo: 'to-slate-900',
    sidebarBg: 'bg-[#07080a]',
    cardBg: 'bg-[#0d0e12]',
    cardBorder: 'border-slate-800/80',
    cardHoverBg: 'hover:bg-[#12131a]',
    cardHoverBorder: 'hover:border-slate-700',
    frameBorder: 'border-[#0f1115]',
    iframeBorder: 'border-[#0f1115]',
    frameRing: 'ring-white/5',
    badgeBg: 'bg-slate-800/20',
    badgeBorder: 'border-slate-800',
    badgeText: 'text-slate-400',
    commentUser: 'text-slate-400',
    gridDotColor: 'bg-slate-500/20',
    textDecoration: 'decoration-slate-500/50'
  },
  { 
    id: 'fullscreen', 
    name: 'Premium Cinema', 
    bg: 'bg-[#040405]', 
    text: 'text-white', 
    border: 'border-amber-500/10', 
    accent: 'text-amber-400',
    accentBg: 'bg-amber-600',
    glowColor: 'rgba(245,158,11,0.25)',
    glowClass: 'bg-amber-500/5',
    gradFrom: 'from-amber-500',
    gradTo: 'to-yellow-600',
    sidebarBg: 'bg-transparent',
    cardBg: 'bg-transparent',
    cardBorder: 'border-none',
    cardHoverBg: 'bg-transparent',
    cardHoverBorder: 'border-none',
    frameBorder: 'border-[#1c1810]',
    iframeBorder: 'border-[#1c1810]',
    frameRing: 'ring-amber-500/20',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/20',
    badgeText: 'text-amber-400',
    commentUser: 'text-amber-400',
    gridDotColor: 'bg-amber-500/40',
    textDecoration: 'decoration-amber-500/50'
  }
];

const COMMENTS_DATA = [
  { name: "Rakib Hasan", text: "Unity Best Platform" }, { name: "Sumaiya Aktar", text: "Kivabe kaj korbo?" },
  { name: "Arif Ahmed", text: "Kivabe join korbo?" }, { name: "Nusrat Jahan", text: "Vai ekhane kaj kore." },
  { name: "Md. Sakib", text: "আমি কাজ করতে চাই" }, { name: "Farhana Islam", text: "এটা কি কাজ?" },
  { name: "Tanvir Hossain", text: "আমি জয়েন হতে চাই" }, { name: "Riya Sultana", text: "মিটিং কখন শুরু হবে?" },
  { name: "Alif Rahman", text: "মিটিংয়ে কি কাজ দেওয়া হবে?" }, { name: "Shamim Reza", text: "💖💖 Great project!" },
  { name: "Mehedi Hasan", text: "কিভাবে কাজ করবো 💖" }, { name: "Jannat Ferdous", text: "Working perfectly!" },
  { name: "Kabir Hossain", text: "Unity real meta." }, { name: "Mitu Khandakar", text: "Amio join hobo." },
  { name: "Taskin Ahmed", text: "Professional UI." }, { name: "Sadiya Afrin", text: "Payment method?" },
  { name: "Mustafizur", text: "Good initiative." }, { name: "Ananya Roy", text: "Support fast." },
  { name: "Saidul Islam", text: "Best in BD." }, { name: "Lubna Ahmed", text: "Thanks for meeting." },
  { name: "Rayhan Kabir", text: "Process ta ki?" }, { name: "Khadija Nasrin", text: "Is it mobile based?" },
  { name: "Shafiqul Alam", text: "Great future." }, { name: "Nabila Tabassum", text: "Thanks for guide." },
  { name: "Mahfuz Ahmed", text: "Ami ajke join hobo." }, { name: "Shahidul Islam", text: "মিটিং ভাল লাগছে" },
  { name: "Tasrif Khan", text: "Students best hub." }, { name: "Firoza Begum", text: "Help me start." },
  { name: "Sabir Rahman", text: "Unity zindabad!" }, { name: "Rima Akter", text: "Good luck all." },
  { name: "Belal Hossain", text: "Transparent project." }, { name: "Tamim Iqbal", text: "Count me in!" },
  { name: "Morshed Alam", text: "Professional setup." }, { name: "Priya Sarker", text: "I want work." },
  { name: "Sufia Kamal", text: "Great initiative." }, { name: "Zayed Hossain", text: "Joining now." },
  { name: "Munni Begum", text: "Profile help." }, { name: "Sohel Rana", text: "Best way." },
  { name: "Lipu Khan", text: "Already started." }, { name: "Shikha Rani", text: "Love from Sylhet." },
  { name: "Hasan Mahmud", text: "Kajta khub sohoj." }, { name: "Faruk Ahmed", text: "Excellent training." },
  { name: "Beauty Akter", text: "মিটিং এ জয়েন হবো" }, { name: "Joynal Abedin", text: "Time needed?" },
  { name: "Rashedul Islam", text: "Unity talk." }, { name: "Fatema Zohra", text: "Ready big." },
  { name: "Rubel Rana", text: "Earned 10$!" }, { name: "Mim Akter", text: "Clear process." },
  { name: "Shahadat", text: "Trustable." }, { name: "Nilima Akter", text: "Khulna." },
  { name: "Bashir Ahmed", text: "Global hub." }, { name: "Sumi Khatun", text: "শিখলাম অনেক" },
  { name: "Imran Khan", text: "Unity life!" }, { name: "Toma Begum", text: "Part time." },
  { name: "Apu Biswas", text: "Impressive." }, { name: "Shanta Islam", text: "Helpful." },
  { name: "Fahim Shahriar", text: "Starting today!" }, { name: "Pinky Roy", text: "মিটিং খুব ভালো" },
  { name: "Zulekha Bibi", text: "Join hobo." }, { name: "Azizul Haque", text: "Best earning." },
  { name: "Nasima Akter", text: "Registration." }, { name: "Badrul Alam", text: "Member." },
  { name: "Shofiqul Islam", text: "Great future." }, { name: "Salma Khatun", text: "Unity best." },
  { name: "Rony Ahmed", text: "Now joining." }, { name: "Moni Akter", text: "Luck to all." },
  { name: "Biplob", text: "Agrohi ami." }, { name: "Lima Akter", text: "Next sync?" },
  { name: "Hridoy", text: "Love Unity." }, { name: "Labonno", text: "Easy way." },
  { name: "Tuma", text: "Dhaka city." }, { name: "Shimul", text: "Thanks session." },
  { name: "Bristi Akter", text: "Amio hobo." }, { name: "Rakibul Islam", text: "Best policy." },
  { name: "Dalia Nasrin", text: "Professional." }, { name: "Sayed Ahmed", text: "Ready work." },
  { name: "Urmila Roy", text: "মিটিং অনেক ভাল" }, { name: "Pinky", text: "Chittagong." },
  { name: "Opurbo", text: "Simple and clear." }, { name: "Sathi Akter", text: "Great guide." },
  { name: "Shimul", text: "I join now." }, { name: "Dipa Roy", text: "Life goal." },
  { name: "Sojib", text: "Process?" }, { name: "Toma", text: "জয়েন হলাম" },
  { name: "Dalia", text: "Opportunity." }, { name: "Nahar", text: "Good info." },
  { name: "Faysal", text: "Success here." }, { name: "Moni", text: "Notun ami." },
  { name: "Mithun", text: "Best hub." }, { name: "Bristi", text: "Started earning." },
  { name: "Lima", text: "জয়েন করতে চাই" }, { name: "Shohel", text: "Unity rocks." },
  { name: "Nasim", text: "Already registered." }, { name: "Hamid", text: "Best training." },
  { name: "Julekha", text: "Help me hobe." }, { name: "Rana", text: "Love eita." },
  { name: "Sumona", text: "Good work team." }, { name: "Jahid", text: "Earn from home." },
  { name: "Lata", text: "Excited join." }, { name: "Bijoy", text: "Just joined." },
  { name: "Omi", text: "Unity earning #1" }, { name: "Tarik", text: "Real source." }
];

export default function App() {
  const [selectedMeeting, setSelectedMeeting] = useState<null | typeof MEETINGS[0]>(null);
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [activeComments, setActiveComments] = useState(COMMENTS_DATA.slice(0, 20));
  const commentIndexRef = useRef(20);

  useEffect(() => {
    if (!selectedMeeting) return;
    
    const commentsInterval = setInterval(() => {
      setActiveComments(prev => {
        const nextComment = COMMENTS_DATA[commentIndexRef.current % COMMENTS_DATA.length];
        commentIndexRef.current += 1;
        return [...prev.slice(1), nextComment];
      });
    }, 2500);
    
    return () => {
      clearInterval(commentsInterval);
    };
  }, [selectedMeeting]);

  if (!selectedMeeting) {
    return (
      <div className={`relative w-full min-h-screen ${selectedTheme.bg} flex flex-col items-center overflow-hidden font-sans select-none text-white selection:bg-blue-500/30`}>
        {/* Background Ambient Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
              rotate: [0, 90, 0]
            }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-1/4 -left-1/4 w-[100vw] h-[100vw] bg-gradient-to-br ${selectedTheme.gradFrom}/20 via-transparent to-transparent rounded-full blur-[120px]`} 
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col gap-16 py-20 px-6">
          <header className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl lg:text-[120px] font-display font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                UNITY <span className={selectedTheme.accent}>EARNING</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                {THEMES.map(theme => {
                  const isActive = selectedTheme.id === theme.id;
                  return (
                    <button 
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      className={`px-4 py-2 rounded-full border text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                        isActive 
                          ? `${theme.accentBg} border-transparent text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]` 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
                      }`}
                    >
                      {theme.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEETINGS.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedMeeting(m)} 
                className="group relative cursor-pointer"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${selectedTheme.gradFrom} ${selectedTheme.gradTo} rounded-[32px] opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />
                <div className={`relative ${selectedTheme.cardBg !== 'bg-transparent' ? selectedTheme.cardBg : 'bg-amber-950/5'} backdrop-blur-xl rounded-[32px] border ${selectedTheme.border} p-10 hover:border-current transition-all h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl ${selectedTheme.accent}`}>
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${m.color} opacity-[0.03] blur-3xl group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="space-y-8 relative z-10 text-white">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:${selectedTheme.accentBg}/20 group-hover:border-current/50 transition-all duration-500 ${selectedTheme.accent}`}>
                         <Play className="text-white fill-white/20 group-hover:fill-white transition-all" size={24} />
                      </div>
                      <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <span className="text-[10px] font-bold text-slate-400 font-mono">{m.time}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className={`text-4xl font-display font-bold tracking-tight group-hover:text-current transition-colors line-clamp-2 leading-tight ${selectedTheme.commentUser}`}>{m.title}</h3>
                      <p className="text-[13px] text-slate-400/60 font-medium tracking-wide leading-relaxed line-clamp-2">{m.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between relative z-10 text-white">
                    <div className="flex items-center gap-2">
                       <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border border-[#02040a]" />
                          ))}
                       </div>
                       <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">120+ Active</span>
                    </div>
                    <div className={`flex items-center gap-2 ${selectedTheme.commentUser} font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                      Join Stream
                      <Zap size={12} className="fill-current text-current" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen ${selectedTheme.bg} flex flex-col items-center justify-center overflow-hidden font-sans select-none ${selectedTheme.text} selection:bg-blue-500/30`}>
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* SMALL COMPACT HEADER - TOP LEFT BRANDING */}
        {selectedTheme.id !== 'fullscreen' && (
          <div className={`h-16 px-8 flex items-center justify-between border-b ${selectedTheme.border} ${selectedTheme.bg} backdrop-blur-3xl shrink-0`}>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setSelectedMeeting(null)} 
              className={`group p-2 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-current transition-all duration-300 ${selectedTheme.accent}`}
            >
              <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_10px_#ef4444]"></span>
                </div>
                <h1 className="text-white text-xs font-display font-bold tracking-[0.2em] uppercase leading-none">{selectedMeeting.title} <span className="text-red-500 animate-pulse">LIVE</span></h1>
              </div>
              <p className={`font-bold text-[8px] tracking-[0.4em] uppercase mt-1.5 leading-none font-mono ${selectedTheme.accent} opacity-50`}>Internal Protocol // Hub Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-12">
             <div className="hidden sm:flex items-center gap-3">
                <div className="flex -space-x-2">
                   {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-slate-800 border border-black shadow-lg" />
                   ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400"><span className="text-white">2.4K</span> Watching</span>
             </div>
             <div className="h-8 w-px bg-white/5" />
             <div className={`flex items-center gap-3 px-4 py-1.5 ${selectedTheme.badgeBg} rounded-xl border ${selectedTheme.badgeBorder} shadow-[0_0_20px_rgba(255,255,255,0.02)]`}>
                <Shield size={14} className={selectedTheme.accent} />
                <span className={`text-[10px] font-bold font-mono tracking-wider ${selectedTheme.badgeText}`}>NODE_9X_SECURE</span>
             </div>
          </div>
        </div>
        )}
        
        <div className="flex-1 flex flex-row relative overflow-hidden">
          
          {/* VERTICAL STREAMING COMMENTS - PROFESSIONAL TICKER */}
          {selectedTheme.id !== 'fullscreen' && (
            <div className={`hidden lg:flex w-[22%] h-full flex-col py-6 px-8 border-r ${selectedTheme.border} ${selectedTheme.sidebarBg} backdrop-blur-3xl relative shrink-0`}>
               <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
               <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
   
               <div className="mb-6 flex items-center justify-between relative z-20">
                 <div className="flex items-center gap-2">
                   <MessageSquare size={14} className={selectedTheme.accent} />
                   <h2 className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white/80">Live Discussion</h2>
                 </div>
                 <div className={`w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor] ${selectedTheme.accent}`} />
               </div>
 
               <div className="flex-1 overflow-hidden relative">
                  <div className="flex flex-col gap-4 h-full relative"> 
                    <AnimatePresence mode="popLayout" initial={false}>
                    {activeComments.map((comment, i) => (
                      <motion.div
                        key={`comment-${commentIndexRef.current - activeComments.length + i}`}
                        layout
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, x: 20, filter: "blur(8px)" }}
                        transition={{ 
                          opacity: { duration: 0.4 },
                          layout: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
                        }}
                      >
                        <div className={`${selectedTheme.cardBg} border ${selectedTheme.border} p-4 rounded-2xl backdrop-blur-2xl hover:border-current/20 transition-all duration-300 group`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-[10px] font-bold capitalize tracking-wide ${selectedTheme.commentUser}`}>{comment.name}</span>
                            <span className="text-[8px] text-white/10 font-mono italic">0.4s</span>
                          </div>
                          <p className="text-[13px] text-slate-300 font-medium leading-relaxed tracking-tight">{comment.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}

          {/* CINEMATIC VIDEO CENTER - MAXIMIZED FOCUS */}
          <div className="flex-1 flex flex-col justify-center py-10 px-12 relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]">
            
            {/* FLOATING PREMIUM HEADER IN FULLSCREEN */}
            {selectedTheme.id === 'fullscreen' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-6 inset-x-8 z-30 flex items-center justify-between px-6 py-4 bg-[#0a0a0d]/60 border border-amber-500/15 rounded-3xl backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center gap-5">
                  <button 
                    onClick={() => setSelectedMeeting(null)} 
                    className="group p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl hover:bg-amber-500/20 hover:border-amber-400 transition-all duration-300 text-amber-400 flex items-center justify-center"
                  >
                    <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]" />
                      <h1 className="text-white text-xs font-display font-bold tracking-[0.2em] uppercase leading-none">{selectedMeeting.title}</h1>
                      <span className="text-[8px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">PREMIUM MODE</span>
                    </div>
                    <p className="font-bold text-[7px] tracking-[0.4em] uppercase mt-1.5 leading-none font-mono text-amber-500/50">Internal Protocol // Hub Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="hidden sm:flex items-center gap-3">
                     <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                           <div key={i} className="w-5.5 h-5.5 rounded-full bg-slate-900 border border-amber-500/20 shadow-md" />
                        ))}
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                       <span className="text-amber-400 font-mono">2.4K</span> Watching
                     </span>
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-[9px] uppercase tracking-[0.15em]">
                    <Disc size={12} className="animate-spin text-amber-500" />
                    <span>HQ_STREAM_ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <motion.div 
                 animate={{ opacity: [0.1, 0.2, 0.1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] ${selectedTheme.accent} opacity-[0.03] blur-[120px] rounded-full`} 
               />
            </div>

            <div className={`relative w-full h-full ${selectedTheme.id === 'fullscreen' ? 'max-w-5xl pt-16' : 'max-w-4xl'} mx-auto flex flex-col justify-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group h-full flex flex-col justify-center"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${selectedTheme.gradFrom} to-transparent rounded-[56px] opacity-10 group-hover:opacity-20 blur-xl transition-opacity duration-700`} />
                <div 
                  className="relative transition-transform duration-1000 hover:scale-[1.005] rounded-[56px] overflow-hidden"
                  style={{ boxShadow: `0 80px 200px -40px ${selectedTheme.glowColor}` }}
                >
                  <iframe
                    className={`w-full aspect-video bg-black rounded-[56px] border-[14px] ${selectedTheme.iframeBorder} ring-1 ring-white/10`}
                    src={`https://www.youtube.com/embed/${selectedMeeting.id}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
                    allowFullScreen
                  />
                  
                  {/* Floating Tech Corners */}
                  <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${selectedTheme.accent}`}>REC // {selectedMeeting.time}</span>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center gap-12 opacity-20 pointer-events-none">
                 <div className={`flex items-center gap-6 text-[9px] font-mono tracking-[1.5em] uppercase ${selectedTheme.accent}`}>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-current" />
                    <span>ENCRYPTION_LINK_ACTIVE</span>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-current" />
                 </div>
              </div>
            </div>
          </div>

          {/* ADVANCED TECH VISUALS */}
          {selectedTheme.id !== 'fullscreen' && (
            <div className={`hidden lg:flex w-[16%] h-full flex-col items-center justify-between py-12 px-6 border-l ${selectedTheme.border} ${selectedTheme.sidebarBg} backdrop-blur-3xl shrink-0 relative overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-b ${selectedTheme.gradFrom} to-transparent opacity-20`} />
              
              <div className="w-full space-y-12 relative z-10">
                 {/* Core Tech Spinner */}
                 <div className="flex flex-col items-center gap-8 text-center pt-4">
                    <div className="relative">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className={`w-32 h-32 border border-dashed rounded-full flex items-center justify-center ${selectedTheme.badgeBorder} opacity-40`}>
                          <motion.div animate={{ rotate: -720 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                             className={`w-24 h-24 border rounded-full flex items-center justify-center ${selectedTheme.badgeBorder} opacity-30`}>
                             <Hexagon size={24} className={`${selectedTheme.accent} opacity-20`} />
                          </motion.div>
                      </motion.div>
                      <motion.div 
                        animate={{ 
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.1, 1],
                          filter: [`drop-shadow(0 0 5px ${selectedTheme.glowColor})`, `drop-shadow(0 0 20px ${selectedTheme.glowColor})`, `drop-shadow(0 0 5px ${selectedTheme.glowColor})`]
                        }} 
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                          <Cpu size={32} className={`${selectedTheme.accent} fill-current/10`} />
                      </motion.div>
                    </div>
                    <div className="space-y-1">
                      <p className={`text-[10px] text-white font-bold tracking-[0.3em] uppercase underline underline-offset-4 ${selectedTheme.textDecoration}`}>Unity_Core</p>
                      <p className={`text-[7px] font-mono tracking-widest uppercase ${selectedTheme.accent}`}>System Stabilized</p>
                    </div>
                 </div>

                 {/* Live Scanners */}
                 <div className="space-y-8">
                   {[...Array(3)].map((_, i) => (
                      <div key={`tech-${i}`} className="space-y-4 opacity-50">
                         <div className="flex justify-between text-[7px] font-bold uppercase tracking-widest">
                            <span className="text-slate-500">Flux_{i+1}</span>
                            <span className={`font-mono ${selectedTheme.accent}`}>{(89.2 + Math.random() * 10).toFixed(1)}%</span>
                         </div>
                         <div className="h-1 bg-white/[0.03] w-full relative overflow-hidden rounded-full border border-white/5">
                            <motion.div 
                              animate={{ x: ["-100%", "100%"] }} 
                              transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                              className={`h-full w-1/3 bg-gradient-to-r from-transparent via-current to-transparent ${selectedTheme.accent}`} 
                            />
                         </div>
                      </div>
                   ))}
                 </div>

                 {/* Waveform Design */}
                 <div className="space-y-8">
                   <div className="flex items-end justify-center gap-1.5 h-16 opacity-20">
                      {[...Array(12)].map((_, i) => (
                         <motion.div key={i}
                           animate={{ height: [8, 48, 12, 56, 8] }}
                           transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                           className={`w-[3px] rounded-full ${selectedTheme.accent} bg-current`} />
                      ))}
                   </div>
                   
                   <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 opacity-40 hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-3">
                        <Network size={14} className={selectedTheme.accent} />
                        <div className="flex-1 h-px bg-white/5" />
                        <span className="text-[8px] font-bold text-white tracking-widest">GLOBAL_HUB</span>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        {[...Array(15)].map((_, i) => (
                          <motion.div key={i}
                            animate={{ opacity: [0.1, 1, 0.1] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            className={`w-full aspect-square rounded-sm ${selectedTheme.gridDotColor}`} />
                        ))}
                      </div>
                   </div>
                 </div>
              </div>

              {/* Bottom Brand */}
              <div className="flex flex-col items-center gap-6 relative z-10 opacity-40">
                <div className={`w-12 h-12 rounded-2xl ${selectedTheme.badgeBg} border ${selectedTheme.badgeBorder} flex items-center justify-center`}>
                  <Globe size={20} className={selectedTheme.accent} />
                </div>
                <p className="text-[7.5px] text-white/50 font-bold tracking-[0.5em] uppercase text-center leading-relaxed font-mono">
                  Distributed Learning<br/>Network Phase 9
                </p>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER BAR */}
        {selectedTheme.id !== 'fullscreen' && (
          <div className="h-12 px-10 flex items-center justify-between border-t border-white/5 bg-black/60 backdrop-blur-3xl shrink-0">
            <div className="flex items-center gap-8 opacity-30">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                <span className="text-[9px] font-bold uppercase tracking-widest font-mono">Server Status: Optimal</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.25em] font-mono">
                <span>Latency: 28ms</span>
                <span className="text-white/10">//</span>
                <span>Uptime: 99.9%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
