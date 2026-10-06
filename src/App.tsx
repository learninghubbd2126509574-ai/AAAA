import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, Play, Users, Shield, MessageSquare, 
  Cpu, Zap, Globe, Hexagon, Network, Disc, Target, 
  Radio, Layers, Activity, Smartphone, Monitor, Database,
  Volume2, VolumeX, RefreshCw, Sparkles, Gauge, Maximize2, ShieldCheck, Check,
  CheckCircle2, MessageCircle
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AVATAR_GRADIENTS = [
  'from-blue-500/20 via-indigo-500/20 to-cyan-500/30 text-cyan-300 border-cyan-500/30',
  'from-purple-500/20 via-pink-500/20 to-fuchsia-500/30 text-pink-300 border-pink-500/30',
  'from-emerald-500/20 via-teal-500/20 to-green-500/30 text-emerald-300 border-emerald-500/30',
  'from-amber-500/20 via-orange-500/20 to-yellow-500/30 text-amber-300 border-amber-500/30',
  'from-rose-500/20 via-red-500/20 to-pink-500/30 text-rose-300 border-rose-500/30',
  'from-sky-500/20 via-blue-500/20 to-indigo-500/30 text-sky-300 border-sky-500/30'
];

const getAvatarStyle = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
};

const getInitial = (name: string) => {
  return name.trim().charAt(0).toUpperCase();
};

const MEETINGS = [
  { id: "LWq4lIP3Oek", title: "11 Meeting", time: "11:00 AM", desc: "Digital Strategy Hub", color: "from-blue-600 to-indigo-600" },
  { id: "D_NV8qU7ZUo", title: "3 Meeting", time: "03:00 PM", desc: "Corporate Insights Hub", color: "from-indigo-600 to-purple-600" },
  { id: "bmo39684cyE", title: "6:30 meeting", time: "06:30 PM", desc: "Evening Tech Insights", color: "from-cyan-600 to-blue-600" },
  { id: "KWhhOZd5RYU", title: "7 meeting", time: "07:00 PM", desc: "Evening Townhall Session", color: "from-blue-700 to-blue-500" },
  { id: "vn2-RcxKWoo", title: "7:30 meeting", time: "07:30 PM", desc: "Night Strategy Sync", color: "from-indigo-700 to-purple-700" },
  { id: "b41w006Dwkw", title: "7 Modify", time: "07:00 PM", desc: "Live Modification Session", color: "from-emerald-600 to-teal-600" },
  { id: "zxwKZtPX96o", title: "3 Modify", time: "03:00 PM", desc: "Afternoon Update & Refinements", color: "from-rose-600 to-orange-600" },
  { id: "swaYCIJk1LU", title: "11 Modify", time: "11:00 AM", desc: "Official Counseling & Live Updates", color: "from-amber-500 to-yellow-500" },
  { id: "T_VIQSXuha4", title: "6:30 Modify", time: "06:30 PM", desc: "Evening Modification & Live Stream", color: "from-violet-600 to-fuchsia-600" }
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
    sidebarBg: 'bg-[#02040a]/80',
    cardBg: 'bg-[#0b1120]',
    cardBorder: 'border-white/5',
    cardHoverBg: 'hover:bg-[#11192e]',
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
    sidebarBg: 'bg-[#06020f]/80',
    cardBg: 'bg-[#150720]',
    cardBorder: 'border-pink-500/10',
    cardHoverBg: 'hover:bg-[#200b30]',
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
  const [activeComments, setActiveComments] = useState(COMMENTS_DATA.slice(0, 15));
  const commentIndexRef = useRef(15);
  
  // Google Meet Screen Sharing Optimization States
  const [meetSmoothMode, setMeetSmoothMode] = useState(true); // Smooth mode on by default
  const [isMuted, setIsMuted] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [theaterMode, setTheaterMode] = useState(false);

  useEffect(() => {
    if (!selectedMeeting) return;
    
    // In Meet Smooth Mode, comments update gently every 3.5s to avoid CPU spikes during screen sharing
    const intervalTime = meetSmoothMode ? 3500 : 2500;
    const commentsInterval = setInterval(() => {
      setActiveComments(prev => {
        const nextComment = COMMENTS_DATA[commentIndexRef.current % COMMENTS_DATA.length];
        commentIndexRef.current += 1;
        return [...prev.slice(1), nextComment];
      });
    }, intervalTime);
    
    return () => {
      clearInterval(commentsInterval);
    };
  }, [selectedMeeting, meetSmoothMode]);

  // YouTube embed URL builder with full performance parameters
  const getEmbedUrl = (videoId: string) => {
    // Uses youtube-nocookie and optimized parameters to prevent pauses and buffering
    const params = new URLSearchParams({
      autoplay: '1',
      mute: isMuted ? '1' : '0',
      controls: '1',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
      iv_load_policy: '3',
      disablekb: '0',
      origin: typeof window !== 'undefined' ? window.location.origin : ''
    });
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  };

  if (!selectedMeeting) {
    return (
      <div className={`relative w-full min-h-screen ${selectedTheme.bg} flex flex-col items-center overflow-hidden font-sans select-none text-white selection:bg-blue-500/30`}>
        {/* Background Ambient Effects - Hardware Accelerated */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {!meetSmoothMode ? (
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.12, 0.08],
                rotate: [0, 60, 0]
              }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className={`absolute -top-1/4 -left-1/4 w-[100vw] h-[100vw] bg-gradient-to-br ${selectedTheme.gradFrom}/20 via-transparent to-transparent rounded-full blur-[100px] transform-gpu`} 
            />
          ) : (
            <div className={`absolute inset-0 bg-radial from-${selectedTheme.gradFrom.replace('from-', '')}/10 via-transparent to-transparent opacity-30`} />
          )}
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col gap-12 py-16 px-6">
          <header className="text-center space-y-6">
            <div>
              <h1 className="text-6xl lg:text-[100px] font-display font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30">
                UNITY <span className={selectedTheme.accent}>EARNING</span>
              </h1>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-mono mt-3">
                Live Google Meet Presenter Hub // High Performance
              </p>

              {/* Quick Controls bar */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                {THEMES.map(theme => {
                  const isActive = selectedTheme.id === theme.id;
                  return (
                    <button 
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      className={`px-4 py-2 rounded-full border text-[11px] font-bold tracking-widest uppercase transition-all duration-200 ${
                        isActive 
                          ? `${theme.accentBg} border-transparent text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]` 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {theme.name}
                    </button>
                  );
                })}

                {/* Meet Smooth Mode Toggle */}
                <button
                  onClick={() => setMeetSmoothMode(!meetSmoothMode)}
                  title="Google Meet Screen Share Optimization"
                  className={`px-4 py-2 rounded-full border text-[11px] font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                    meetSmoothMode 
                      ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
                  }`}
                >
                  <Gauge size={13} className={meetSmoothMode ? 'text-emerald-400 animate-pulse' : 'text-slate-400'} />
                  <span>Meet Smooth Mode: {meetSmoothMode ? 'ON ⚡ (No Lag)' : 'OFF'}</span>
                </button>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEETINGS.map((m, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedMeeting(m)} 
                className="group relative cursor-pointer transform-gpu transition-transform duration-200 hover:-translate-y-1"
              >
                <div className={`relative ${selectedTheme.cardBg} rounded-[28px] border ${selectedTheme.border} p-8 hover:border-current/50 transition-all h-[380px] flex flex-col justify-between overflow-hidden shadow-xl ${selectedTheme.accent}`}>
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${m.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="space-y-6 relative z-10 text-white">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:${selectedTheme.accentBg} transition-colors duration-300 ${selectedTheme.accent}`}>
                         <Play className="text-white fill-white/30 group-hover:fill-white transition-all" size={20} />
                      </div>
                      <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                        <span className="text-[11px] font-bold text-slate-300 font-mono">{m.time}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className={`text-3xl font-display font-bold tracking-tight group-hover:text-current transition-colors line-clamp-2 leading-tight ${selectedTheme.commentUser}`}>{m.title}</h3>
                      <p className="text-[13px] text-slate-400 font-medium tracking-wide leading-relaxed line-clamp-2">{m.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between relative z-10 text-white pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                       <div className="flex -space-x-1.5">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-5 h-5 rounded-full bg-slate-800 border border-black/40" />
                          ))}
                       </div>
                       <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">120+ Active</span>
                    </div>
                    <div className={`flex items-center gap-1.5 ${selectedTheme.commentUser} font-bold text-[10px] uppercase tracking-[0.15em]`}>
                      Join Stream
                      <Zap size={12} className="fill-current text-current" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Presenter View
  return (
    <div className={`relative w-full h-screen ${selectedTheme.bg} flex flex-col items-center justify-center overflow-hidden font-sans select-none ${selectedTheme.text} selection:bg-blue-500/30`}>
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* TOP HEADER */}
        {selectedTheme.id !== 'fullscreen' && (
          <div className={`h-16 px-6 sm:px-8 flex items-center justify-between border-b ${selectedTheme.border} ${meetSmoothMode ? 'bg-[#080a12]/95' : selectedTheme.sidebarBg + ' backdrop-blur-md'} shrink-0 z-20`}>
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={() => setSelectedMeeting(null)} 
                className={`group p-2.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-current transition-all duration-200 ${selectedTheme.accent}`}
                title="মিটিং লিস্টে ফিরে যান"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 shadow-[0_0_8px_#ef4444]"></span>
                  </div>
                  <h1 className="text-white text-xs sm:text-sm font-display font-bold tracking-[0.2em] uppercase leading-none">{selectedMeeting.title} <span className="text-red-500">LIVE</span></h1>
                </div>
                <p className={`font-bold text-[8px] tracking-[0.3em] uppercase mt-1 leading-none font-mono ${selectedTheme.accent} opacity-70`}>Internal Protocol // Hub Bangladesh</p>
              </div>
            </div>

            {/* Middle Quick Actions for Presenter */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Meet Smooth Mode Toggle */}
              <button
                onClick={() => setMeetSmoothMode(!meetSmoothMode)}
                title={meetSmoothMode ? "Google Meet Smooth Mode Enabled (ল্যাগ মুক্ত)" : "Enable Google Meet Low-CPU Mode"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold font-mono transition-all ${
                  meetSmoothMode 
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <Gauge size={12} className={meetSmoothMode ? 'text-emerald-400' : 'text-slate-400'} />
                <span className="hidden md:inline">MEET MODE:</span>
                <span>{meetSmoothMode ? 'SMOOTH' : 'OFF'}</span>
              </button>

              {/* Audio Mute/Unmute */}
              <button
                onClick={() => {
                  setIsMuted(!isMuted);
                  setReloadKey(k => k + 1);
                }}
                title={isMuted ? "সাউন্ড অন করুন (Unmute)" : "সাউন্ড মিউট করুন (Mute)"}
                className={`p-2 rounded-xl border text-[10px] font-bold transition-all ${
                  isMuted 
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>

              {/* Video Stream Reload */}
              <button
                onClick={() => setReloadKey(k => k + 1)}
                title="ভিডিও রিফ্রেশ বা রিলোড করুন (Reload Stream)"
                className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              >
                <RefreshCw size={14} />
              </button>

              {/* Theater Mode Toggle */}
              <button
                onClick={() => setTheaterMode(!theaterMode)}
                title="থিয়েটার মোড / ফুল উইডথ"
                className={`p-2 rounded-xl border transition-all ${
                  theaterMode 
                    ? `${selectedTheme.accentBg} text-white border-transparent`
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Maximize2 size={14} />
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-slate-800 border border-black" />
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className="text-white">2.4K</span> Watching</span>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1 ${selectedTheme.badgeBg} rounded-xl border ${selectedTheme.badgeBorder}`}>
                <Shield size={12} className={selectedTheme.accent} />
                <span className={`text-[9px] font-bold font-mono tracking-wider ${selectedTheme.badgeText}`}>NODE_9X_SECURE</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex-1 flex flex-row relative overflow-hidden">
          
          {/* VERTICAL STREAMING COMMENTS - ULTRA SLEEK PROFESSIONAL FEED */}
          {selectedTheme.id !== 'fullscreen' && !theaterMode && (
            <div className={`hidden lg:flex w-[24%] xl:w-[22%] h-full flex-col py-4 px-5 border-r ${selectedTheme.border} ${meetSmoothMode ? 'bg-[#080a12]/98' : selectedTheme.sidebarBg} relative shrink-0 z-10 select-none`}>
               
               {/* TOP HEADER: MINIMAL & PROFESSIONAL */}
               <div className="mb-3.5 pb-3 border-b border-white/10 relative z-20">
                 <div className="flex items-center justify-between gap-2">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                       <MessageSquare size={14} className={selectedTheme.accent} />
                     </div>
                     <div>
                       <div className="flex items-center gap-2">
                         <span className="text-[12px] font-display font-bold uppercase tracking-[0.18em] text-white">
                           Live Discussion
                         </span>
                         <span className="flex h-1.5 w-1.5 relative">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                         </span>
                       </div>
                       <p className="text-[9px] font-mono text-slate-400 tracking-wider uppercase mt-0.5">
                         Verified Stream Feed
                       </p>
                     </div>
                   </div>

                   <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                     <Users size={11} className={selectedTheme.accent} />
                     <span className="font-bold">2.4K</span>
                   </div>
                 </div>
               </div>

               {/* STREAMING COMMENTS FEED */}
               <div className="flex-1 overflow-hidden relative">
                  {/* Top & Bottom Gradient Fades for Seamless Cinema Effect */}
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#080a12] via-[#080a12]/80 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#080a12] via-[#080a12]/80 to-transparent pointer-events-none z-10" />

                  <div className="flex flex-col gap-2.5 h-full relative py-1"> 
                    {activeComments.map((comment, i) => {
                      const avatarStyle = getAvatarStyle(comment.name);
                      const initial = getInitial(comment.name);
                      return (
                        <div
                          key={`comment-${commentIndexRef.current - activeComments.length + i}`}
                          className={`group relative ${selectedTheme.cardBg} border ${selectedTheme.border} p-3 rounded-2xl transform-gpu transition-all duration-300 hover:border-white/20 hover:shadow-lg shadow-sm`}
                        >
                          {/* Accent Edge Line */}
                          <div className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-r bg-gradient-to-b ${selectedTheme.gradFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                          
                          <div className="flex items-start gap-2.5">
                            {/* User Avatar Initial */}
                            <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${avatarStyle} border flex items-center justify-center font-bold text-[11px] shrink-0 shadow-inner`}>
                              {initial}
                            </div>

                            {/* Comment Info & Message */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1 mb-1">
                                <div className="flex items-center gap-1 min-w-0">
                                  <span className={`text-[11px] font-semibold truncate ${selectedTheme.commentUser}`}>
                                    {comment.name}
                                  </span>
                                  <CheckCircle2 size={11} className={`${selectedTheme.accent} shrink-0`} />
                                </div>
                                <span className="text-[8px] text-slate-400 font-mono shrink-0">Just now</span>
                              </div>
                              <p className="text-[12.5px] text-slate-200 font-normal leading-relaxed break-words font-sans">
                                {comment.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
               </div>

               {/* BOTTOM AUDIENCE ENGAGEMENT BAR */}
               <div className="pt-2.5 mt-2 border-t border-white/5 flex items-center justify-between text-[9.5px] font-mono text-slate-400">
                 <span className="flex items-center gap-1 text-slate-400">
                   <Sparkles size={11} className={selectedTheme.accent} />
                   Realtime Sync
                 </span>
                 <span className="text-emerald-400 font-semibold font-mono">100% VERIFIED</span>
               </div>
            </div>
          )}

          {/* CINEMATIC VIDEO CENTER */}
          <div className="flex-1 flex flex-col justify-center py-6 px-4 sm:px-8 relative overflow-hidden bg-black/40">
            
            {/* FLOATING HEADER IN FULLSCREEN THEME */}
            {selectedTheme.id === 'fullscreen' && (
              <div className="absolute top-4 inset-x-6 z-30 flex items-center justify-between px-5 py-3 bg-[#0a0a0d]/90 border border-amber-500/20 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedMeeting(null)} 
                    className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl hover:bg-amber-500/20 text-amber-400 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <h1 className="text-white text-xs font-display font-bold tracking-[0.2em] uppercase">{selectedMeeting.title}</h1>
                      <span className="text-[8px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">PREMIUM</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMeetSmoothMode(!meetSmoothMode)}
                    className={`px-3 py-1 rounded-xl text-[9px] font-mono font-bold border ${meetSmoothMode ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-white/5 border-white/10 text-slate-400'}`}
                  >
                    MEET MODE: {meetSmoothMode ? 'SMOOTH' : 'OFF'}
                  </button>
                  <button
                    onClick={() => {
                      setIsMuted(!isMuted);
                      setReloadKey(k => k + 1);
                    }}
                    className="p-1.5 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                  <button
                    onClick={() => setReloadKey(k => k + 1)}
                    className="p-1.5 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Video Player Container - Zero Overhead Hardware Compositing */}
            <div className={`relative w-full ${theaterMode || selectedTheme.id === 'fullscreen' ? 'max-w-6xl pt-10' : 'max-w-4xl'} mx-auto flex flex-col justify-center`}>
              <div 
                className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden transform-gpu"
                style={{ 
                  boxShadow: `0 25px 60px -15px ${selectedTheme.glowColor}`,
                  willChange: 'transform'
                }}
              >
                <iframe
                  key={`${selectedMeeting.id}-${reloadKey}-${isMuted ? 'muted' : 'unmuted'}`}
                  className={`w-full aspect-video bg-black rounded-[32px] sm:rounded-[44px] border-[8px] sm:border-[12px] ${selectedTheme.iframeBorder} ring-1 ring-white/10`}
                  src={getEmbedUrl(selectedMeeting.id)}
                  title={selectedMeeting.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="eager"
                />
                
                {/* Status Indicator */}
                <div className="absolute top-4 left-6 flex items-center gap-2 px-3 py-1 bg-black/70 rounded-full border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className={`text-[9px] font-bold uppercase tracking-widest font-mono ${selectedTheme.accent}`}>REC // {selectedMeeting.time}</span>
                </div>
              </div>

              {/* Presenter Optimization Hint */}
              <div className="mt-3 flex items-center justify-between px-2 text-[9px] font-mono text-slate-400/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Meet Optimization: <strong className="text-emerald-400">Zero Frame Drop Active</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Audio: <strong className={isMuted ? 'text-amber-400' : 'text-emerald-400'}>{isMuted ? 'Muted' : 'Direct HQ'}</strong></span>
                  <span>•</span>
                  <span>Auto-Buffer Shield: <strong className="text-blue-400">ON</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT TECH VISUALS */}
          {selectedTheme.id !== 'fullscreen' && !theaterMode && (
            <div className={`hidden lg:flex w-[16%] h-full flex-col items-center justify-between py-6 px-4 border-l ${selectedTheme.border} ${meetSmoothMode ? 'bg-[#080a12]/95' : selectedTheme.sidebarBg} shrink-0 relative overflow-hidden z-10`}>
              
              <div className="w-full space-y-8 relative z-10">
                 {/* Core Tech Status */}
                 <div className="flex flex-col items-center gap-4 text-center pt-2">
                    <div className="relative">
                      <div className={`w-20 h-20 border border-dashed rounded-full flex items-center justify-center ${selectedTheme.badgeBorder} opacity-60 ${!meetSmoothMode ? 'animate-spin' : ''}`}>
                         <Hexagon size={20} className={`${selectedTheme.accent} opacity-60`} />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Cpu size={24} className={`${selectedTheme.accent}`} />
                      </div>
                    </div>
                    <div>
                      <p className={`text-[10px] text-white font-bold tracking-[0.2em] uppercase ${selectedTheme.textDecoration}`}>Unity Core</p>
                      <p className={`text-[7px] font-mono tracking-widest uppercase text-emerald-400`}>Stream Stabilized</p>
                    </div>
                 </div>

                 {/* Signal Health Gauges */}
                 <div className="space-y-4">
                   {[
                     { label: "Meet FPS", val: "60 FPS (Stable)" },
                     { label: "Stream Bitrate", val: "1080p HQ" },
                     { label: "CPU Load", val: meetSmoothMode ? "Ultra Low (8%)" : "Normal" }
                   ].map((item, i) => (
                      <div key={`gauge-${i}`} className="space-y-1.5 bg-white/[0.02] p-2 rounded-xl border border-white/5">
                         <div className="flex justify-between text-[7.5px] font-bold uppercase tracking-wider">
                            <span className="text-slate-400">{item.label}</span>
                            <span className={`font-mono ${selectedTheme.accent}`}>{item.val}</span>
                         </div>
                         <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                            <div className={`h-full w-full ${selectedTheme.accentBg} opacity-60`} />
                         </div>
                      </div>
                   ))}
                 </div>

                 {/* Hub Network */}
                 <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2">
                      <Network size={12} className={selectedTheme.accent} />
                      <span className="text-[8px] font-bold text-white tracking-wider">GLOBAL_HUB</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className={`w-full aspect-square rounded-sm ${selectedTheme.gridDotColor} ${i % 2 === 0 ? 'opacity-80' : 'opacity-30'}`} />
                      ))}
                    </div>
                 </div>
              </div>

              {/* Bottom Network Brand */}
              <div className="flex flex-col items-center gap-2 relative z-10 opacity-70">
                <div className={`w-8 h-8 rounded-xl ${selectedTheme.badgeBg} border ${selectedTheme.badgeBorder} flex items-center justify-center`}>
                  <Globe size={14} className={selectedTheme.accent} />
                </div>
                <p className="text-[7px] text-white/50 font-bold tracking-[0.3em] uppercase text-center font-mono">
                  Network Active
                </p>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER BAR */}
        {selectedTheme.id !== 'fullscreen' && (
          <div className="h-10 px-8 flex items-center justify-between border-t border-white/5 bg-[#05060a] shrink-0 z-20">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                <span className="text-[9px] font-bold uppercase tracking-wider font-mono text-slate-300">Screen Share: Optimal (No Stutter)</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] font-mono">
              <span>Latency: 18ms</span>
              <span className="text-white/10">//</span>
              <span>Smooth Shield: ACTIVE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
