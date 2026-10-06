import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, Play, Users, Shield, MessageSquare, 
  Cpu, Zap, Globe, Hexagon, Network, Disc, Target, 
  Radio, Layers, Activity, Smartphone, Monitor, Database,
  Volume2, VolumeX, RefreshCw, Sparkles, Gauge, Maximize2, ShieldCheck, Check,
  CheckCircle2, MessageCircle, Search, Filter,
  Clock, CheckSquare, Square, BarChart2
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

export interface MeetingItem {
  id: string;
  title: string;
  time: string;
  desc: string;
  color: string;
  category: 'modify' | 'regular';
  attendees: string;
}

const MEETINGS: MeetingItem[] = [
  { id: "LWq4lIP3Oek", title: "11 Meeting", time: "11:00 AM", desc: "Digital Strategy Hub & Session", color: "from-blue-600 to-indigo-600", category: "regular", attendees: "1.4K" },
  { id: "D_NV8qU7ZUo", title: "3 Meeting", time: "03:00 PM", desc: "Corporate Insights & Workshop", color: "from-indigo-600 to-purple-600", category: "regular", attendees: "1.8K" },
  { id: "bmo39684cyE", title: "6:30 meeting", time: "06:30 PM", desc: "Evening Tech Insights Hub", color: "from-cyan-600 to-blue-600", category: "regular", attendees: "2.1K" },
  { id: "KWhhOZd5RYU", title: "7 meeting", time: "07:00 PM", desc: "Evening Townhall Main Session", color: "from-blue-700 to-blue-500", category: "regular", attendees: "2.5K" },
  { id: "vn2-RcxKWoo", title: "7:30 meeting", time: "07:30 PM", desc: "Night Strategy Sync & Q&A", color: "from-indigo-700 to-purple-700", category: "regular", attendees: "1.9K" },
  { id: "b41w006Dwkw", title: "7 Modify", time: "07:00 PM", desc: "Live Modification & Special Demo", color: "from-emerald-600 to-teal-600", category: "modify", attendees: "3.2K" },
  { id: "zxwKZtPX96o", title: "3 Modify", time: "03:00 PM", desc: "Afternoon Update & Refinements", color: "from-rose-600 to-orange-600", category: "modify", attendees: "2.8K" },
  { id: "swaYCIJk1LU", title: "11 Modify", time: "11:00 AM", desc: "Official Counseling & Updates", color: "from-amber-500 to-yellow-500", category: "modify", attendees: "3.5K" },
  { id: "T_VIQSXuha4", title: "6:30 Modify", time: "06:30 PM", desc: "Evening Modification & Live Stream", color: "from-violet-600 to-fuchsia-600", category: "modify", attendees: "3.0K" }
];

const THEMES = [
  { 
    id: 'cosmic', 
    name: 'Cosmic Slate', 
    bg: 'bg-[#02040a]', 
    text: 'text-white', 
    border: 'border-white/10', 
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
  const [selectedMeeting, setSelectedMeeting] = useState<null | MeetingItem>(null);
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);
  const [activeComments, setActiveComments] = useState(COMMENTS_DATA.slice(0, 18));
  const commentIndexRef = useRef(18);
  
  // Dynamic UI States
  const [filterCategory, setFilterCategory] = useState<'all' | 'modify' | 'regular'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [meetSmoothMode, setMeetSmoothMode] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [theaterMode, setTheaterMode] = useState(false);
  
  // Interactive Agenda checklist items
  const [agenda, setAgenda] = useState([
    { id: 1, title: 'Welcome & Session Introduction', done: true },
    { id: 2, title: 'Live Demonstration & Overview', done: true },
    { id: 3, title: 'Strategy & Execution Guidelines', done: false },
    { id: 4, title: 'Live Questions & Wrap Up', done: false }
  ]);

  const toggleAgendaItem = (id: number) => {
    setAgenda(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  useEffect(() => {
    if (!selectedMeeting) return;
    
    // Fast, continuous streaming comments flow smoothly one after another (every 1.1s)
    const intervalTime = meetSmoothMode ? 1200 : 900;
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

  const getEmbedUrl = (videoId: string) => {
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

  const filteredMeetings = MEETINGS.filter(m => {
    const matchesCategory = filterCategory === 'all' || m.category === filterCategory;
    const matchesSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // LOBBY / HUB VIEW
  if (!selectedMeeting) {
    return (
      <div className={`relative w-full min-h-screen ${selectedTheme.bg} flex flex-col items-center overflow-x-hidden font-sans select-none text-white selection:bg-blue-500/30`}>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[350px] bg-gradient-to-b ${selectedTheme.gradFrom}/15 to-transparent blur-3xl opacity-50`} />
        </div>

        <div className="relative z-10 w-full max-w-7xl flex flex-col gap-10 py-12 px-6">
          
          <header className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${selectedTheme.gradFrom} to-white/10 flex items-center justify-center shadow-lg`}>
                <Radio className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
                  UNITY <span className={selectedTheme.accent}>PRESENTER</span>
                </h1>
                <p className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                  Google Meet Broadcasting System
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
              {THEMES.map(theme => {
                const isActive = selectedTheme.id === theme.id;
                return (
                  <button 
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    className={`px-3.5 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all ${
                      isActive 
                        ? `${theme.accentBg} text-white shadow-md` 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {theme.name}
                  </button>
                );
              })}

              <div className="h-4 w-px bg-white/10 mx-1" />

              <button
                onClick={() => setMeetSmoothMode(!meetSmoothMode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${
                  meetSmoothMode 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Gauge size={13} className={meetSmoothMode ? 'text-emerald-400' : 'text-slate-400'} />
                <span>Meet Mode: {meetSmoothMode ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </header>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.03] p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterCategory === 'all' 
                    ? `${selectedTheme.accentBg} text-white shadow-sm` 
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                All Sessions ({MEETINGS.length})
              </button>
              <button
                onClick={() => setFilterCategory('modify')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  filterCategory === 'modify' 
                    ? `${selectedTheme.accentBg} text-white shadow-sm` 
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles size={13} />
                Modify Sessions ({MEETINGS.filter(m => m.category === 'modify').length})
              </button>
              <button
                onClick={() => setFilterCategory('regular')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterCategory === 'regular' 
                    ? `${selectedTheme.accentBg} text-white shadow-sm` 
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                Regular Meetings ({MEETINGS.filter(m => m.category === 'regular').length})
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search meeting, time or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMeetings.map((m, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedMeeting(m)} 
                className="group relative cursor-pointer transform-gpu transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${m.color} rounded-[28px] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                
                <div className={`relative ${selectedTheme.cardBg} rounded-[26px] border ${selectedTheme.border} overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-white/20 flex flex-col justify-between h-[390px]`}>
                  
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={`https://img.youtube.com/vi/${m.id}/hqdefault.jpg`} 
                      alt={m.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-black/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono font-semibold text-white">
                      <Clock size={11} className={selectedTheme.accent} />
                      <span>{m.time}</span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        m.category === 'modify' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                      }`}>
                        {m.category === 'modify' ? 'SPECIAL MODIFY' : 'OFFICIAL'}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:${selectedTheme.accentBg} group-hover:scale-110 transition-all duration-300`}>
                        <Play className="text-white fill-white ml-0.5" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className={`text-xl font-display font-bold text-white tracking-tight group-hover:${selectedTheme.commentUser} transition-colors line-clamp-1`}>
                        {m.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                        {m.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                        <Users size={12} className={selectedTheme.accent} />
                        <span>{m.attendees} Watching</span>
                      </div>
                      
                      <span className={`flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider ${selectedTheme.commentUser} group-hover:translate-x-1 transition-transform`}>
                        Launch Room
                        <Zap size={12} className="fill-current" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PROFESSIONAL LOBBY FOOTER */}
          <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="font-medium text-slate-300">Google Meet Broadcast Node // Secure & Encrypted Network</span>
            </div>
            <div className="flex items-center gap-6 font-mono text-[11px]">
              <span className="text-slate-400">Uptime: <strong className="text-emerald-400">99.99%</strong></span>
              <span className="text-white/20">//</span>
              <span className="text-slate-400">Active Hubs: <strong className="text-blue-400">14 Global</strong></span>
              <span className="text-white/20">//</span>
              <span className={selectedTheme.accent}>Unity Earning Network © 2026</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  // LIVE PRESENTER ROOM VIEW
  return (
    <div className={`relative w-full h-screen ${selectedTheme.bg} flex flex-col items-center justify-center overflow-hidden font-sans select-none ${selectedTheme.text} selection:bg-blue-500/30`}>
      
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* TOP BAR CONTRACT: ZONE 1 (TITLE), ZONE 2 (LIVE SESSION BANNER), ZONE 3 (TOOLS) */}
        {selectedTheme.id !== 'fullscreen' && (
          <div className={`h-16 px-6 flex items-center justify-between border-b ${selectedTheme.border} ${meetSmoothMode ? 'bg-[#080a12]/98' : selectedTheme.sidebarBg} shrink-0 z-30`}>
            
            {/* Zone 1: Return & Current Session */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedMeeting(null)} 
                className={`p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all ${selectedTheme.accent}`}
                title="Return to Session List"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-[0_0_8px_#ef4444]"></span>
                  </div>
                  <h1 className="text-white text-sm font-display font-bold tracking-wider uppercase leading-none">
                    {selectedMeeting.title}
                  </h1>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    LIVE
                  </span>
                </div>
                <p className="text-[8px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                  Google Meet Broadcaster // {selectedMeeting.time}
                </p>
              </div>
            </div>

            {/* Zone 2: Professional Live Session Center Banner */}
            <div className="hidden md:flex items-center gap-3 px-5 py-1.5 bg-white/[0.03] border border-white/10 rounded-2xl shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-display font-bold tracking-[0.25em] uppercase text-white">
                LIVE SESSION // <span className={selectedTheme.accent}>UNITY EARNING</span>
              </span>
            </div>

            {/* Zone 3: Presenter Controls */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setMeetSmoothMode(!meetSmoothMode)}
                title="Google Meet Screen Share Optimization"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold font-mono transition-all ${
                  meetSmoothMode 
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <Gauge size={12} className={meetSmoothMode ? 'text-emerald-400' : 'text-slate-400'} />
                <span className="hidden sm:inline">MEET MODE:</span>
                <span>{meetSmoothMode ? 'SMOOTH' : 'OFF'}</span>
              </button>

              <button
                onClick={() => {
                  setIsMuted(!isMuted);
                  setReloadKey(k => k + 1);
                }}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                className={`p-2 rounded-xl border text-xs transition-all ${
                  isMuted 
                    ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>

              <button
                onClick={() => setReloadKey(k => k + 1)}
                title="Reload Stream Player"
                className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-all"
              >
                <RefreshCw size={14} />
              </button>

              <button
                onClick={() => setTheaterMode(!theaterMode)}
                title="Toggle Theater Mode"
                className={`p-2 rounded-xl border transition-all ${
                  theaterMode 
                    ? `${selectedTheme.accentBg} text-white border-transparent` 
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>
        )}
        
        {/* MAIN PRESENTATION WORKSPACE */}
        <div className="flex-1 flex flex-row relative overflow-hidden">
          
          {/* LEFT LIVE DISCUSSION FEED */}
          {selectedTheme.id !== 'fullscreen' && !theaterMode && (
            <div className={`hidden lg:flex w-[24%] xl:w-[22%] h-full flex-col py-4 px-5 border-r ${selectedTheme.border} ${meetSmoothMode ? 'bg-[#080a12]/98' : selectedTheme.sidebarBg} relative shrink-0 z-10 select-none`}>
               
               {/* Header */}
               <div className="mb-3 pb-3 border-b border-white/10 relative z-20">
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

                   <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                     <Users size={11} className={selectedTheme.accent} />
                     <span className="font-bold">{selectedMeeting.attendees}</span>
                   </div>
                 </div>
               </div>

               {/* Streaming Comments (Continuous smooth flow without long pauses) */}
               <div className="flex-1 overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#080a12] via-[#080a12]/80 to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#080a12] via-[#080a12]/80 to-transparent pointer-events-none z-10" />

                  <div className="flex flex-col gap-2.5 h-full relative py-1 overflow-y-auto no-scrollbar"> 
                    {activeComments.map((comment, i) => {
                      const avatarStyle = getAvatarStyle(comment.name);
                      const initial = getInitial(comment.name);
                      return (
                        <div
                          key={`comment-${commentIndexRef.current - activeComments.length + i}`}
                          className={`group relative ${selectedTheme.cardBg} border ${selectedTheme.border} p-3 rounded-2xl transform-gpu transition-all duration-300 hover:border-white/20 hover:shadow-lg shadow-sm`}
                        >
                          <div className={`absolute left-0 top-2 bottom-2 w-0.5 rounded-r bg-gradient-to-b ${selectedTheme.gradFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                          
                          <div className="flex items-start gap-2.5">
                            <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${avatarStyle} border flex items-center justify-center font-bold text-[11px] shrink-0 shadow-inner`}>
                              {initial}
                            </div>

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

               {/* SLIM & THIN CHAT STATUS BAR */}
               <div className="mt-2 py-1.5 px-3 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between text-[9px] font-mono text-slate-400">
                 <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                   <Sparkles size={11} className={selectedTheme.accent} />
                   Live Chat Active
                 </span>
                 <span className="text-emerald-400 font-bold">48 msgs/min</span>
               </div>
            </div>
          )}

          {/* CENTER CINEMATIC VIDEO DISPLAY */}
          <div className="flex-1 flex flex-col justify-center py-6 px-4 sm:px-8 relative overflow-hidden bg-black/40">
            
            {/* Fullscreen Theme Floating Bar */}
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
                
                <div className="flex items-center gap-2">
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

            {/* Video Player Box (WATERMARK REMOVED COMPLETELY) */}
            <div className={`relative w-full ${theaterMode || selectedTheme.id === 'fullscreen' ? 'max-w-6xl pt-8' : 'max-w-4xl'} mx-auto flex flex-col justify-center`}>
              <div 
                className="relative rounded-[28px] sm:rounded-[40px] overflow-hidden transform-gpu"
                style={{ 
                  boxShadow: `0 25px 60px -15px ${selectedTheme.glowColor}`,
                  willChange: 'transform'
                }}
              >
                <iframe
                  key={`${selectedMeeting.id}-${reloadKey}-${isMuted ? 'muted' : 'unmuted'}`}
                  className={`w-full aspect-video bg-black rounded-[28px] sm:rounded-[40px] border-[6px] sm:border-[10px] ${selectedTheme.iframeBorder} ring-1 ring-white/10`}
                  src={getEmbedUrl(selectedMeeting.id)}
                  title={selectedMeeting.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="eager"
                />
              </div>

              {/* Dynamic Status Strip */}
              <div className="mt-3 flex items-center justify-between px-2 text-[9px] font-mono text-slate-400/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Google Meet Optimization: <strong className="text-emerald-400">Lag-Free Enabled</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <span>Audio: <strong className={isMuted ? 'text-amber-400' : 'text-emerald-400'}>{isMuted ? 'Muted' : 'HQ Stream'}</strong></span>
                  <span>•</span>
                  <span>Buffer Shield: <strong className="text-blue-400">ACTIVE</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT INTERACTIVE PRESENTER CONSOLE */}
          {selectedTheme.id !== 'fullscreen' && !theaterMode && (
            <div className={`hidden lg:flex w-[18%] h-full flex-col justify-between py-5 px-4 border-l ${selectedTheme.border} ${meetSmoothMode ? 'bg-[#080a12]/98' : selectedTheme.sidebarBg} shrink-0 relative overflow-hidden z-10`}>
              
              <div className="w-full space-y-6 relative z-10">
                 
                 {/* Live Stream Spectrum Visualizer */}
                 <div className="bg-white/[0.03] p-3.5 rounded-2xl border border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                       <span className="text-white flex items-center gap-1.5">
                         <Activity size={13} className={selectedTheme.accent} />
                         Audio Visualizer
                       </span>
                       <span className="text-emerald-400 font-mono text-[9px]">LIVE</span>
                    </div>

                    {/* Audio VU Bars */}
                    <div className="flex items-end justify-between gap-1 h-10 px-1 pt-2">
                      {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65].map((val, idx) => (
                        <div 
                          key={idx} 
                          style={{ height: `${val}%` }}
                          className={`w-1 rounded-full ${selectedTheme.accentBg} opacity-80 animate-pulse`} 
                        />
                      ))}
                    </div>
                 </div>

                 {/* Interactive Session Agenda Checkpoints */}
                 <div className="bg-white/[0.03] p-3.5 rounded-2xl border border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                       <span className="text-white flex items-center gap-1.5">
                         <BarChart2 size={13} className={selectedTheme.accent} />
                         Session Agenda
                       </span>
                       <span className="text-slate-400 text-[9px] font-mono">
                         {agenda.filter(a => a.done).length}/{agenda.length}
                       </span>
                    </div>

                    <div className="space-y-1.5">
                      {agenda.map(item => (
                        <div
                          key={item.id}
                          onClick={() => toggleAgendaItem(item.id)}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                        >
                          {item.done ? (
                            <CheckSquare size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <Square size={13} className="text-slate-500 shrink-0 mt-0.5" />
                          )}
                          <span className={`text-[10px] leading-tight ${item.done ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                            {item.title}
                          </span>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* Stream Quality Gauges */}
                 <div className="space-y-2">
                   {[
                     { label: "Screen Share FPS", val: "60 FPS Stable" },
                     { label: "Broadcast Bitrate", val: "1080p Ultra" },
                     { label: "CPU Utilization", val: meetSmoothMode ? "8% (Low)" : "22%" }
                   ].map((g, i) => (
                      <div key={i} className="bg-white/[0.02] px-3 py-2 rounded-xl border border-white/5 flex items-center justify-between text-[9px] font-mono">
                        <span className="text-slate-400">{g.label}</span>
                        <span className={`font-bold ${selectedTheme.commentUser}`}>{g.val}</span>
                      </div>
                   ))}
                 </div>
              </div>

              {/* Bottom Network Status */}
              <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[9px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Hub Node Online
                </span>
                <span className="text-white/60">v3.8</span>
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
                <span className="text-[9px] font-bold uppercase tracking-wider font-mono text-slate-300">
                  Broadcast Status: Optimal for Google Meet
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] font-mono">
              <span>Latency: 14ms</span>
              <span className="text-white/10">//</span>
              <span>Smooth Buffer Shield: ACTIVE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
