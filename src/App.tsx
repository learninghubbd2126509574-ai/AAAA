import { motion, AnimatePresence } from 'motion/react';
import { Share2, Users, MessageSquare, Play, Activity, Globe, Disc, ChevronLeft, Monitor, Zap, Shield, Cpu, Network, BarChart3, Scan, Hexagon, Database, Radio, Waves, Terminal, Cpu as Processor, GitBranch, HardDrive, Target, Layers } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const MEETINGS = [
  { id: "LWq4lIP3Oek", title: "11 Meeting", time: "11:00 AM", desc: "Digital Strategy Hub", color: "from-blue-600 to-indigo-600" },
  { id: "D_NV8qU7ZUo", title: "3 Meeting", time: "03:00 PM", desc: "Corporate Insights Hub", color: "from-indigo-600 to-purple-600" },
  { id: "KWhhOZd5RYU", title: "7 meeting", time: "07:00 PM", desc: "Evening Townhall Session", color: "from-blue-700 to-blue-500" }
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
  const [activeComments, setActiveComments] = useState(COMMENTS_DATA.slice(0, 20));
  const commentIndexRef = useRef(20);

  useEffect(() => {
    if (!selectedMeeting) return;
    const interval = setInterval(() => {
      setActiveComments(prev => {
        const nextBatch = [
          COMMENTS_DATA[commentIndexRef.current % COMMENTS_DATA.length]
        ];
        commentIndexRef.current += 1;
        return [...prev.slice(1), ...nextBatch];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedMeeting]);

  if (!selectedMeeting) {
    return (
      <div className="relative w-full h-screen bg-[#02040a] flex flex-col items-center justify-center overflow-hidden font-sans select-none text-white p-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] border border-blue-600/10 rounded-full" />
        </div>
        <div className="relative z-10 w-full max-w-7xl flex flex-col gap-12">
          <header className="text-center space-y-4">
            <h1 className="text-6xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">UNITY EARNING</h1>
            <p className="text-slate-500 font-bold text-[13px] tracking-[1.5em] uppercase">Digital Learning Ecosystem</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {MEETINGS.map((m) => (
              <div key={m.id} onClick={() => setSelectedMeeting(m)} className="cursor-pointer group relative bg-[#0B1124] rounded-[40px] border border-white/5 p-12 hover:border-blue-500/50 transition-all h-[440px] flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${m.color} opacity-5 blur-3xl`} />
                <div className="space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                     <Play className="text-blue-500 group-hover:text-white group-hover:fill-white" size={28} />
                  </div>
                  <h3 className="text-5xl font-black tracking-tight">{m.title}</h3>
                  <p className="text-[14px] text-slate-500 uppercase font-black tracking-widest leading-relaxed opacity-60 italic">{m.desc}</p>
                </div>
                <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] relative z-10">Connect Hub →</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-[#02040a] flex flex-col items-center justify-center overflow-hidden font-sans select-none text-white">
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* SMALL COMPACT HEADER - TOP LEFT BRANDING */}
        <div className="h-14 px-6 flex items-center justify-between border-b border-white/5 bg-black/60 backdrop-blur-3xl shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSelectedMeeting(null)} className="p-1.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              <ChevronLeft size={16} className="text-blue-400" />
            </button>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_#ef4444] animate-pulse" />
                <h1 className="text-white text-[11px] font-black tracking-widest leading-none">{selectedMeeting.title} live</h1>
              </div>
              <p className="text-blue-500/40 font-black text-[6.5px] tracking-[0.3em] uppercase mt-1 leading-none">Unity Earning Hub Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-10 opacity-30">
             <div className="flex items-center gap-2">
                <Users size={12} className="text-blue-500" />
                <span className="text-[9px] font-black uppercase tracking-widest">2.4K Participating</span>
             </div>
             <div className="h-6 w-px bg-white/5" />
             <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 px-3 py-1 bg-blue-600/5 rounded border border-blue-500/20">
                <Shield size={12} className="text-blue-500" />
                <span>SECURE_NODE_9X</span>
             </div>
          </div>
        </div>

        <div className="flex-1 flex flex-row relative overflow-hidden">
          
          {/* SIDE-BY-SIDE SLIM COMMENTS (একক কলাম) - UPDATED FOR BETTER CENTERED & LARGER LOOK */}
          <div className="hidden lg:flex w-[20%] h-full flex-col py-4 px-6 border-r border-white/5 bg-black/60 relative shrink-0">
             <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#02040a] via-transparent to-transparent z-10" />
             <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#02040a] via-transparent to-transparent z-10" />
 
             <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-3 h-full"> 
                <AnimatePresence mode="popLayout" initial={false}>
                  {activeComments.map((comment, i) => (
                    <motion.div
                      key={`${commentIndexRef.current + i}`}
                      initial={{ opacity: 0, y: 40, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* TECH SLIM CARD - LARGER & BETTER PADDING */}
                      <div className="bg-white/[0.04] border border-white/5 py-2 px-4 rounded-xl backdrop-blur-md">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                          <span className="text-[10px] font-black text-blue-400 capitalize whitespace-nowrap overflow-hidden text-ellipsis">{comment.name}</span>
                        </div>
                        <p className="text-[12px] text-slate-200 font-medium leading-tight italic tracking-tight">{comment.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* CINEMATIC VIDEO CENTER - OPTIMIZED ALIGNMENT */}
          <div className="flex-1 flex flex-col justify-center pt-8 pb-10 px-14">
            <div className="relative w-full max-w-[94%] mx-auto flex flex-col justify-center">
              <div className="relative shadow-[0_60px_150px_-30px_rgba(37,99,235,0.4)]">
                <div className="absolute -inset-20 bg-blue-600/5 blur-[120px] opacity-20 pointer-events-none" />
                <iframe
                  className="w-full aspect-video bg-black rounded-[48px] border-[12px] border-[#131b2d] ring-1 ring-white/10"
                  src={`https://www.youtube.com/embed/${selectedMeeting.id}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`}
                  allowFullScreen
                />
              </div>
              <div className="mt-5 flex justify-center opacity-10">
                 <div className="flex items-center gap-12 text-[7.5px] font-black uppercase tracking-[1.5em]">
                    <span>Global Encryption Hub Bangladesh</span>
                 </div>
              </div>
            </div>
          </div>

          {/* ADVANCED TECH VISUALS (SMALLER PANEL FOR LARGER VIDEO) */}
          <div className="hidden lg:flex w-[14%] h-full flex-col items-center justify-between py-10 px-4 border-l border-white/5 bg-black/40 shrink-0 relative overflow-hidden">
            
            {/* SCANNING LASER LAYER */}
            <motion.div 
               animate={{ y: ["-20%", "120%", "-20%"] }} 
               transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
               className="absolute inset-x-0 w-full h-[1.5px] bg-blue-500/40 z-20 shadow-[0_0_20px_#2563eb]" />

            <div className="w-full space-y-12 relative z-10">
               
               {/* Core Tech Spinner */}
               <div className="flex flex-col items-center gap-6 text-center">
                  <div className="relative">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="w-28 h-28 border-2 border-dashed border-blue-500/10 rounded-full flex items-center justify-center">
                        <motion.div animate={{ rotate: -720 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                           className="w-20 h-20 border border-blue-500/20 rounded-full flex items-center justify-center">
                           <Layers size={18} className="text-blue-500/20" />
                        </motion.div>
                    </motion.div>
                    <motion.div animate={{ opacity: [0.1, 1, 0.1], scale: [0.95, 1.05, 0.95] }} transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 flex items-center justify-center">
                        <Processor size={28} className="text-blue-600 fill-blue-600" />
                    </motion.div>
                  </div>
                  <div className="p-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent w-full" />
               </div>

               {/* Live Scanners / Binary Feed */}
               <div className="space-y-6">
                 {[...Array(3)].map((_, i) => (
                    <div key={`tech-${i}`} className="space-y-3 opacity-30 relative">
                       <div className="flex justify-between text-[6.5px] font-black uppercase tracking-[0.3em] italic">
                          <span>Circuit_{i}</span>
                          <span className="text-blue-500">Active</span>
                       </div>
                       <div className="h-0.5 bg-white/5 w-full relative overflow-hidden rounded-full">
                          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 1.5 + i * 0.4, repeat: Infinity }}
                             className="h-full w-1/4 bg-blue-600/80 shadow-[0_0_12px_rgba(37,99,235,1)]" />
                       </div>
                       <div className="flex justify-between text-[5px] font-mono text-blue-500/40 leading-none mt-1">
                         <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }}>01011001</motion.span>
                         <span>SYNC_HUB</span>
                         <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}>11010011</motion.span>
                       </div>
                    </div>
                 ))}
               </div>

               {/* Waveform Design Component */}
               <div className="space-y-6">
                 <div className="flex items-center justify-center gap-1.5 px-4 opacity-10 h-12 border border-white/5 rounded-2xl bg-white/[0.02]">
                   {[...Array(18)].map((_, i) => (
                      <motion.div key={i}
                        animate={{ height: [4, 28, 8, 32, 4] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
                        className="w-[2px] bg-blue-500 rounded-full" />
                   ))}
                 </div>

                 {/* Extra Node Visuals */}
                 <div className="grid grid-cols-2 gap-4 opacity-20">
                    <div className="space-y-1.5">
                       <p className="text-[6px] font-black text-slate-500 uppercase tracking-widest leading-none">Global Link</p>
                       <div className="flex items-center gap-2">
                          <Radio size={12} className="text-blue-500" />
                          <div className="h-px flex-1 bg-white/10" />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                       <p className="text-[6px] font-black text-slate-500 uppercase tracking-widest leading-none">Radar Scan</p>
                       <div className="flex items-center gap-2">
                          <Target size={12} className="text-blue-500" />
                          <div className="h-px flex-1 bg-white/10" />
                       </div>
                    </div>
                 </div>

                 {/* Matrix Pixel Cluster */}
                 <div className="grid grid-cols-10 gap-0.5 opacity-5 py-4 border-t border-white/5">
                    {[...Array(40)].map((_, i) => (
                      <motion.div key={i} animate={{ opacity: [0, 1, 0] }} 
                        transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
                        className="w-full aspect-square bg-blue-400 rounded-px" />
                    ))}
                 </div>
               </div>
            </div>

            {/* Bottom Floating Hub Icon */}
            <div className="flex flex-col items-center gap-5 relative z-10 opacity-30 group cursor-default">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 180 }}
                className="w-16 h-16 rounded-[24px] bg-blue-600/5 border border-blue-500/20 flex items-center justify-center shadow-2xl transition-all">
                <Disc size={28} className="text-blue-500 opacity-60 animate-spin-slow" />
              </motion.div>
              <div className="text-[7.5px] text-white/40 font-black tracking-[0.8em] uppercase">Unity Core Server-9X</div>
            </div>
          </div>
        </div>

        {/* COMPACT GLOBAL MINI FOOTER */}
        <div className="h-10 px-10 flex items-center justify-between border-t border-white/5 bg-black/60 backdrop-blur-3xl shrink-0 opacity-40">
           <div className="flex gap-20 text-[8.5px] font-black text-white/10 uppercase tracking-[0.8em] italic">
              <span>Secure Worldwide Tunnel Active</span>
           </div>
           
           <div className="flex items-center gap-8">
             <div className="text-right">
                <p className="text-white text-[10px] font-black tracking-tight leading-none italic uppercase">Unity Marketplace Hub</p>
             </div>
             <div className="h-6 w-px bg-white/10" />
             <div className="flex gap-2">
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1 h-1 bg-blue-600 rounded-full" />
                <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, delay: 0.3, repeat: Infinity }} className="w-1 h-1 bg-blue-600 rounded-full" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
