import { motion, AnimatePresence } from 'motion/react';
import { Share2, Users, MessageSquare, Play, Activity, Globe, Disc } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Expanded list of 100+ unique Bangladeshi names and comments
const COMMENTS_DATA = [
  { name: "Rakib Hasan", text: "Unity Earning Best Platform" },
  { name: "Sumaiya Aktar", text: "Kivabe kaj korbo" },
  { name: "Arif Ahmed", text: "Kivabe join korbo" },
  { name: "Nusrat Jahan", text: "Amar vai ekhane kaj kore" },
  { name: "Md. Sakib", text: "আমি কাজ করতে চাই" },
  { name: "Farhana Islam", text: "এটা কি কাজ" },
  { name: "Tanvir Hossain", text: "আমি জয়েন হতে চাই" },
  { name: "Riya Sultana", text: "মিটিং কখন শুরু হবে" },
  { name: "Alif Rahman", text: "মিটিংয়ে কি কাজ দেওয়া হবে" },
  { name: "Shamim Reza", text: "💖💖" },
  { name: "Mehedi Hasan", text: "কিভাবে কাজ করবো💖" },
  { name: "Taskin Ahmed", text: "Very informative session" },
  { name: "Jannatul Ferdous", text: "I want to start now" },
  { name: "Kabir Hossain", text: "Best platform in BD" },
  { name: "Mitu Khandakar", text: "Amio join hote chai" },
  { name: "Saidul Islam", text: "How to register?" },
  { name: "Lubna Ahmed", text: "মিটিং টা অনেক ভাল লাগছে" },
  { name: "Rayhan Kabir", text: "Unity Earning is great" },
  { name: "Sadia Afrin", text: "I love this training" },
  { name: "Firoz Khan", text: "Thanks for the opportunity" },
  { name: "Ananya Roy", text: "Excellent support team" },
  { name: "Mustafizur Rahman", text: "Ami ajkei join hobo" },
  { name: "Sabina Yeasmin", text: "Process ta ki?" },
  { name: "Imran Khan", text: "Unity Earning rocks!" },
  { name: "Tahmina Akter", text: "কিভাবে কাজ শিখবো?" },
  { name: "Sabbir Ahmed", text: "Best way to earn from home" },
  { name: "Priya Sarker", text: "I'm ready to work" },
  { name: "Joynal Abedin", text: "Thanks a lot for the guide" },
  { name: "Lipi Begum", text: "Kajta khub sohoj mone hocche" },
  { name: "Hasan Mahmud", text: "Ami join hobo kivabe?" },
  { name: "Fatema Tuz Zohra", text: "Unity Earning best" },
  { name: "Mahfuzur Rahman", text: "I want to learn more" },
  { name: "Sufia Kamal", text: "Great initiative" },
  { name: "Rashedul Islam", text: "Amake help koren" },
  { name: "Nilima Akter", text: "I already started working" },
  { name: "Shahadat Hossain", text: "Earnings are real here" },
  { name: "Sania Mirza", text: "Unity Earning zindabad" },
  { name: "Kamrul Islam", text: "Simple and easy" },
  { name: "Reshma Khatun", text: "💖💖💖" },
  { name: "Rubel Rana", text: "Kaj suru korlum ajke" },
  { name: "Morshed Alam", text: "Excellent platform" },
  { name: "Zulekha Begum", text: "Ami join hoyechi" },
  { name: "Shikha Rani", text: "Thanks for sharing" },
  { name: "Azizul Haque", text: "Best earning app" },
  { name: "Nabila Tabassum", text: "Good luck everyone" },
  { name: "Shahidul Islam", text: "Ami kaj korte agrohi" },
  { name: "Sumi Akter", text: "মিটিং টা খুব সুন্দর" },
  { name: "Rafiqul Islam", text: "Unity Earning numbers speak" },
  { name: "Asma Bi", text: "I want to work with you" },
  { name: "Bashir Ahmed", text: "Great support group" },
  { name: "Mosharaf Karim", text: "Amio join korte chai" },
  { name: "Purnima", text: "Looking forward to it" },
  { name: "Sakib Khan", text: "Unity Earning is life changing" },
  { name: "Bobby", text: "Let's work together" },
  { name: "Apu Biswas", text: "Really impressed" },
  { name: "Emon", text: "Joining from Sylhet" },
  { name: "Srabonti", text: "Joining from Chittagong" },
  { name: "Mim", text: "Ami ekhane notun" },
  { name: "Shakil", text: "Help me to join" },
  { name: "Khadija", text: "I am ready" },
  { name: "Solaiman", text: "Unity Earning best policy" },
  { name: "Nasima", text: "Very professional" },
  { name: "Belal", text: "Ami ajke first" },
  { name: "Tasrif", text: "Great info" },
  { name: "Nabila", text: "Best team" },
  { name: "Zayed", text: "Joining now" },
  { name: "Hridoy", text: "Amio achi" },
  { name: "Shanta", text: "Kivabe kaj pabo" },
  { name: "Jishan", text: "Thanks Unity Earning" },
  { name: "Munni", text: "I'm interested" },
  { name: "Rony", text: "Best opportunity" },
  { name: "Shima", text: "মিটিং এ জয়েন হলাম" },
  { name: "Kiron", text: "Nice platform" },
  { name: "Tuma", text: "Love this" },
  { name: "Biplob", text: "Success is here" },
  { name: "Labonno", text: "Helpful video" },
  { name: "Suvo", text: "Ami join hobo" },
  { name: "Dipa", text: "Ready to earn" },
  { name: "Akash", text: "Best way to work" },
  { name: "Sathi", text: "Thank you so much" },
  { name: "Shimul", text: "I want a job here" },
  { name: "Dalia", text: "Good project" },
  { name: "Rubel", text: "Amake add koren" },
  { name: "Nahar", text: "Great platform" },
  { name: "Faysal", text: "Earnings are high" },
  { name: "Toma", text: "I like this" },
  { name: "Shofik", text: "Great stuff" },
  { name: "Moni", text: "Joining soon" },
  { name: "Biplop", text: "Ami kaj korte chai" },
  { name: "Bristi", text: "Amazing platform" },
  { name: "Sayed", text: "I want to be a part" },
  { name: "Lima", text: "How much can I earn?" },
  { name: "Sojib", text: "Thanks for meeting" },
  { name: "Pinky", text: "Ready to start" },
  { name: "Opurbo", text: "Very clear instructions" },
  { name: "Urmila", text: "Unity Earning is best" },
  { name: "Rakibul", text: "Thanks for sharing" },
  { name: "Sadiya", text: "Good opportunity" },
  { name: "Shohel", text: "Amio join holam" },
  { name: "Mithun", text: "Best session" },
];

export default function App() {
  const videoId = "CFcD84YCZrs";
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`;
  
  const [activeComments, setActiveComments] = useState(COMMENTS_DATA.slice(0, 8));
  const commentIndexRef = useRef(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveComments(prev => {
        const nextComment = COMMENTS_DATA[commentIndexRef.current % COMMENTS_DATA.length];
        commentIndexRef.current++;
        return [...prev.slice(1), nextComment];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#02040a] flex flex-col items-center justify-center overflow-hidden font-sans select-none text-white">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[140px] opacity-20" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* Header Branding */}
        <div className="h-24 px-10 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-3xl">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_#ef4444]" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-600 animate-ping opacity-60" />
              </div>
              <h1 className="text-white text-xl font-black tracking-tight">Live Counselling Meeting</h1>
            </div>
            <p className="text-blue-500 font-bold text-[9px] tracking-[0.4em] mt-0.5 uppercase opacity-70">
              Unity Earning E-learning Platform
            </p>
          </motion.div>

          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <Users size={20} className="text-blue-400" />
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none">2.4k</span>
                <span className="text-blue-400/40 text-[9px] font-black uppercase tracking-widest mt-1">Participants</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <motion.div 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2.5 px-6 py-2.5 bg-blue-600/10 rounded-2xl border border-blue-500/20"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
              <span className="text-white/80 text-[11px] font-black uppercase tracking-widest">Global Stream active</span>
            </motion.div>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="flex-1 flex flex-row relative">
          
          {/* Left Panel: Vertical Live Chat Feed */}
          <div className="hidden lg:flex w-[20%] h-full flex-col py-10 px-6 border-r border-white/5 bg-black/20 relative">
            <div className="flex items-center gap-3 mb-8 px-2">
              <MessageSquare size={18} className="text-blue-500" />
              <span className="text-[12px] font-black uppercase tracking-widest text-slate-400">Live Chat Group</span>
            </div>
            
            <div className="flex-1 overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#02040a] to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02040a] to-transparent z-10" />
              
              <div className="space-y-4 pr-1">
                <AnimatePresence mode="popLayout" initial={false}>
                  {activeComments.map((comment, i) => (
                    <motion.div
                      key={`${comment.name}-${comment.text}-${commentIndexRef.current - 8 + i}`}
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, x: -10 }}
                      transition={{ 
                        duration: 0.7, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="group/item"
                    >
                      <div className="bg-white/5 border border-white/5 p-3 rounded-2xl backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1 h-1 rounded-full bg-blue-500" />
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tight">{comment.name}</span>
                        </div>
                        <p className="text-xs text-slate-200 font-medium leading-relaxed">{comment.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Center Stage: Theater Mode Video */}
          <div className="flex-1 flex flex-col justify-start pt-10">
            <div className="relative w-full max-w-[92%] mx-auto">
              
              {/* Backglow for Depth */}
              <div className="absolute -inset-10 bg-blue-600/10 blur-[100px] rounded-[100px] pointer-events-none" />
              
              <motion.div 
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1.02 }}
                transition={{ duration: 1.2, ease: "circOut" }}
                className="relative aspect-video bg-black rounded-[40px] shadow-[0_60px_150px_-30px_rgba(37,99,235,0.4)] overflow-hidden border-[16px] border-[#0F172A] ring-1 ring-white/10"
              >
                <iframe
                  className="w-full h-full"
                  src={youtubeUrl}
                  title="Unity Live Cinema"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>

              {/* Minimalist Scene Indicator */}
              <div className="mt-12 flex justify-center">
                 <div className="flex items-center gap-10 opacity-30">
                    <div className="flex items-center gap-2">
                       <Activity size={14} className="text-blue-500" />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em]">Optimized Stream</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="flex items-center gap-2">
                       <Globe size={14} className="text-blue-500" />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em]">Worldwide View</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Animated Tech Visualization */}
          <div className="hidden lg:flex w-[15%] h-full flex-col items-center justify-between py-16 px-6 border-l border-white/5 bg-white/[0.01]">
            
            <div className="w-full space-y-16">
               <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="w-28 h-28 border border-dashed border-blue-500/30 rounded-full flex items-center justify-center p-2"
                    >
                       <motion.div 
                         animate={{ rotate: -360 }}
                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                         className="w-full h-full border border-blue-400/10 rounded-full flex items-center justify-center"
                       >
                         <Disc className="w-8 h-8 text-blue-500/40" />
                       </motion.div>
                    </motion.div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 p-2 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                      <Play className="text-blue-500 w-6 h-6 fill-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] text-white font-black uppercase tracking-widest">Core Status</p>
                    <div className="flex items-center gap-1.5 justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                       <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Transmitting</span>
                    </div>
                  </div>
               </div>

               {/* Right side animated bars */}
               <div className="space-y-10 px-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={`stat-${i}`} className="space-y-2">
                       <div className="h-1 bg-white/5 rounded-full w-full overflow-hidden">
                          <motion.div 
                             animate={{ x: ["-100%", "100%"] }}
                             transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                             className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                          />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="w-16 h-16 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group cursor-pointer"
              >
                <Share2 size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
              </motion.div>
              <div className="text-center group cursor-default">
                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.5em] group-hover:text-blue-500 transition-colors duration-500">Unity Cloud</p>
              </div>
            </div>

          </div>
        </div>

        {/* Global Footer Branding */}
        <div className="h-24 px-16 flex items-center justify-between border-t border-white/5 bg-black/40 backdrop-blur-3xl shrink-0">
           <div className="flex gap-20 text-[11px] font-black text-white/10 uppercase tracking-[0.6em]">
              <span className="hover:text-blue-500/40 transition-colors">Digital Education</span>
              <span className="hover:text-blue-500/40 transition-colors">Earning Freedom</span>
              <span className="hover:text-blue-500/40 transition-colors">Network Hub</span>
           </div>
           
           <div className="flex items-center gap-8">
             <div className="text-right">
                <p className="text-white text-xl font-black tracking-tighter leading-none">UNITY EARNING</p>
                <p className="text-blue-500 text-[10px] uppercase font-black italic tracking-[0.3em] mt-1.5">Learning hub Bangladesh</p>
             </div>
             <div className="h-12 w-px bg-white/5" />
             <div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-6 py-2.5 rounded-2xl shadow-xl shadow-blue-900/40">
                <span className="text-white text-[11px] font-black uppercase tracking-widest leading-none">Official Stream</span>
             </div>
           </div>
        </div>

      </div>

    </div>
  );
}
