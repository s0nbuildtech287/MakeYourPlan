import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Network, 
  BrainCircuit, 
  LogIn, 
  Zap, 
  Star, 
  Layers, 
  BarChart2, 
  FolderKanban,
  CheckCircle2,
  Calendar,
  Compass,
  Cpu
} from 'lucide-react';

interface IntroShowcaseProps {
  onEnterApp: (tab?: string) => void;
  onOpenLogin: () => void;
  isLoggedIn: boolean;
  currentUser?: string;
}

// Danh sách poster ma trận nền các kế hoạch & dự án với hình ảnh sắc nét (chuẩn layout movie posters của Oniscenary)
const BACKGROUND_POSTERS = [
  { 
    title: "AI Agent OS 2026", 
    cat: "Artificial Intelligence", 
    tag: "HOT", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80",
    rating: "9.9"
  },
  { 
    title: "Trading System Pro", 
    cat: "Algorithmic Trading", 
    tag: "PRO", 
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=80",
    rating: "9.8"
  },
  { 
    title: "Master Machine Learning", 
    cat: "Deep Learning", 
    tag: "CORE", 
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=80",
    rating: "9.7"
  },
  { 
    title: "Microservices Architecture", 
    cat: "System Design", 
    tag: "TECH", 
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=80",
    rating: "9.6"
  },
  { 
    title: "Fullstack SaaS Platform", 
    cat: "Web Development", 
    tag: "LIVE", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80",
    rating: "9.9"
  },
  { 
    title: "Tự Do Tài Chính 2026", 
    cat: "Wealth & Finance", 
    tag: "GOAL", 
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop&q=80",
    rating: "9.9"
  },
  { 
    title: "DevOps & Cloud Native", 
    cat: "Kubernetes & Docker", 
    tag: "CLOUD", 
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80",
    rating: "9.5"
  },
  { 
    title: "UI/UX Cyberpunk 3D", 
    cat: "Visual Design", 
    tag: "DESIGN", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80",
    rating: "9.8"
  },
  { 
    title: "Mobile App Ecosystem", 
    cat: "Cross-Platform", 
    tag: "APP", 
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=80",
    rating: "9.4"
  },
  { 
    title: "Blockchain Smart Contracts", 
    cat: "Web3 & DeFi", 
    tag: "WEB3", 
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=80",
    rating: "9.6"
  },
  { 
    title: "Data Engineering Pipeline", 
    cat: "Big Data & ETL", 
    tag: "DATA", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80",
    rating: "9.7"
  },
  { 
    title: "Sprint Kế Hoạch Tuần", 
    cat: "Agile & Scrum", 
    tag: "SPRINT", 
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80",
    rating: "9.5"
  },
  { 
    title: "Khởi Nghiệp Tech 2026", 
    cat: "Business Plan", 
    tag: "STARTUP", 
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=80",
    rating: "9.8"
  },
  { 
    title: "Generative AI Platform", 
    cat: "Google Gemini & OpenAI", 
    tag: "GENAI", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=80",
    rating: "9.9"
  },
  { 
    title: "Tối Ưu Hiệu Suất Cá Nhân", 
    cat: "Productivity & Focus", 
    tag: "FOCUS", 
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=80",
    rating: "9.6"
  },
  { 
    title: "Kế Hoạch Đọc 50 Đầu Sách", 
    cat: "Personal Growth", 
    tag: "HABIT", 
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    rating: "9.7"
  },
  { 
    title: "Luyện Thi Chứng Chỉ Cloud", 
    cat: "AWS & Google Cloud", 
    tag: "CERT", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    rating: "9.8"
  },
  { 
    title: "Game Engine C++ 3D", 
    cat: "Game Development", 
    tag: "DEV", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=80",
    rating: "9.4"
  },
];

export const IntroShowcase: React.FC<IntroShowcaseProps> = ({
  onEnterApp,
  onOpenLogin,
  isLoggedIn,
  currentUser = 'xu4ns0n'
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleProtectedAction = (tabName: string) => {
    if (!isLoggedIn) {
      onOpenLogin();
    } else {
      onEnterApp(tabName);
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#05070e] text-slate-100 overflow-hidden flex flex-col justify-between select-none"
      style={{ perspective: '1200px' }}
    >
      {/* ================= 1. POSTER MATRIX BACKGROUND (Rõ nét, sáng rực rỡ y hệt Oniscenary) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-85">
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 p-4 -m-8 scale-105"
          style={{
            transform: `translate(${mousePos.x * -24}px, ${mousePos.y * -24}px) scale(1.05)`,
            transition: 'transform 0.18s ease-out'
          }}
        >
          {BACKGROUND_POSTERS.concat(BACKGROUND_POSTERS).slice(0, 24).map((p, i) => (
            <div 
              key={i}
              className="h-44 sm:h-52 md:h-60 rounded-2xl p-3 flex flex-col justify-between border border-white/20 shadow-2xl relative overflow-hidden group bg-slate-900/60"
            >
              {/* Cover Image sắc nét */}
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] contrast-[1.08]"
                loading="lazy"
              />

              {/* Gradient che phủ nhẹ dưới ảnh để đọc rõ text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none" />

              {/* Card visual elements */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-md">
                  {p.tag}
                </span>
                <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[9px] font-bold text-amber-400 border border-white/10 shadow">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>{p.rating}</span>
                </div>
              </div>

              <div className="relative z-10 space-y-1">
                <p className="text-[10px] text-slate-300 font-semibold truncate drop-shadow">{p.cat}</p>
                <h4 className="text-xs sm:text-sm font-black text-white line-clamp-2 leading-tight drop-shadow-md">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Radial Vignette Tinh Tế (Giữ rõ nét background, chỉ tối nhẹ ở viền ngoài) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,7,14,0.25)_0%,rgba(5,7,14,0.5)_55%,rgba(5,7,14,0.85)_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/15 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-emerald-500/15 blur-[100px] pointer-events-none rounded-full" />

      {/* ================= 2. TOPBAR HEADER (Giống hệt Oniscenary) ================= */}
      <header className="relative z-30 px-6 sm:px-12 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-lg bg-black/40">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onEnterApp('plans')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 p-0.5 shadow-lg shadow-emerald-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center">
              <Network className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-black text-base sm:text-lg tracking-wider text-white">YOURPLAN</h1>
              <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-sm">
                PRO 3D
              </span>
            </div>
            <p className="text-[10px] text-slate-300 font-medium">Smart Mindmap & Structured Action Planner</p>
          </div>
        </div>

        {/* Auth / Action Buttons */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-400 font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Đã Đăng Nhập: {currentUser}</span>
              </div>
              <button
                onClick={() => onEnterApp('plans')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Vào Kế Hoạch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenLogin}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-100 hover:text-white font-bold text-xs sm:text-sm border border-white/15 flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md shadow-sm"
              >
                <LogIn className="w-4 h-4 text-emerald-400" />
                <span>Đăng Nhập</span>
              </button>

              <button
                onClick={() => handleProtectedAction('plans')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-teal-500 to-emerald-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
              >
                <span>Vào Trải Nghiệm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ================= 3. 4 FLOATING 3D CARDS Ở 4 GÓC (Y hệt 4 phim ở ảnh Oniscenary) ================= */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out z-10 hidden md:block"
        style={{
          transform: `rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`
        }}
      >
        {/* Card 1: Trên Trái (Top-Left) */}
        <div 
          onClick={() => handleProtectedAction('tree')}
          className="absolute top-20 left-8 lg:left-14 w-72 p-4 rounded-2xl bg-[#0b0f1c]/95 backdrop-blur-2xl border border-indigo-500/40 shadow-2xl shadow-indigo-500/25 pointer-events-auto hover:scale-105 hover:border-emerald-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-indigo-600 text-white shadow">
              CANVAS 3D MINDMAP
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>9.9</span>
            </div>
          </div>
          <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
            Khởi Nghiệp AI & Tech 2026
          </h4>
          <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2 pt-2 border-t border-white/10">
            <span>Sơ đồ 2 bên đối xứng</span>
            <span className="text-emerald-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 2: Trên Phải (Top-Right) */}
        <div 
          onClick={() => handleProtectedAction('plans')}
          className="absolute top-20 right-8 lg:right-14 w-72 p-4 rounded-2xl bg-[#0b0f1c]/95 backdrop-blur-2xl border border-amber-500/40 shadow-2xl shadow-amber-500/25 pointer-events-auto hover:scale-105 hover:border-amber-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-600 text-white shadow">
              WEALTH & FINANCIAL GOAL
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>9.8</span>
            </div>
          </div>
          <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
            Kế Hoạch Tự Do Tài Chính
          </h4>
          <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2 pt-2 border-t border-white/10">
            <span>12 Cột mốc Milestone</span>
            <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 3: Dưới Trái (Bottom-Left) */}
        <div 
          onClick={() => handleProtectedAction('plans')}
          className="absolute bottom-16 left-8 lg:left-14 w-72 p-4 rounded-2xl bg-[#0b0f1c]/95 backdrop-blur-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-500/25 pointer-events-auto hover:scale-105 hover:border-cyan-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-cyan-600 text-white shadow">
              FULLSTACK ROADMAP
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>9.5</span>
            </div>
          </div>
          <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
            Kiến Trúc Sư Phần Mềm Cloud
          </h4>
          <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2 pt-2 border-t border-white/10">
            <span>Checklist đa cấp Markdown</span>
            <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 4: Dưới Phải (Bottom-Right) */}
        <div 
          onClick={() => handleProtectedAction('stats')}
          className="absolute bottom-16 right-8 lg:right-14 w-72 p-4 rounded-2xl bg-[#0b0f1c]/95 backdrop-blur-2xl border border-emerald-500/40 shadow-2xl shadow-emerald-500/25 pointer-events-auto hover:scale-105 hover:border-emerald-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-600 text-white shadow">
              AI GEMINI PRO TRỢ LÝ
            </span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>9.6</span>
            </div>
          </div>
          <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
            Phân Rã Mục Tiêu Tự Động
          </h4>
          <div className="flex items-center justify-between text-[11px] text-slate-300 mt-2 pt-2 border-t border-white/10">
            <span>Bóc tách 1-click thông minh</span>
            <span className="text-emerald-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* ================= 4. CENTER STAGE GLASS CARD (Y hệt card chính giữa của Oniscenary) ================= */}
      <main className="relative z-20 max-w-2xl mx-auto px-4 py-8 my-auto w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c1020]/90 backdrop-blur-2xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-center flex flex-col items-center gap-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-xs font-bold text-indigo-300 shadow-md">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
            <span>TRẢI NGHIỆM LẬP KẾ HOẠCH THẾ HỆ MỚI</span>
          </div>

          {/* Big Hero Title */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase drop-shadow-md">
              MAKE YOUR PLAN
            </h2>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent drop-shadow">
              MINDMAP 3D
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg leading-relaxed font-normal drop-shadow-sm">
            Không gian kiến tạo kế hoạch hành động chuẩn hóa và sơ đồ tư duy thông minh. Tự do tổ chức công việc theo cây phân cấp, cân đối đối xứng 2 bên và kết nối trợ lý AI Gemini Pro mượt mà.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-[11px] text-slate-200 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auto-Layout 2 Bên Đối Xứng</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-[11px] text-slate-200 backdrop-blur-md">
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
              <span>Trợ Lý Gemini AI 1-Click</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-[11px] text-slate-200 backdrop-blur-md">
              <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Quản Lý Tiến Độ Realtime</span>
            </div>
          </div>

          {/* 2 CTA Buttons (Giống Oniscenary) */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full pt-2">
            <button
              onClick={() => handleProtectedAction('plans')}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-teal-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/35 hover:scale-105 active:scale-95 transition-all border border-white/30 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Khám Phá Kế Hoạch Ngay</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => handleProtectedAction('tree')}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2.5 border border-white/20 hover:border-emerald-500/50 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            >
              <Network className="w-4 h-4 text-emerald-400" />
              <span>Mở Sơ Đồ Tư Duy 3D</span>
            </button>
          </div>
        </div>
      </main>

      {/* ================= 5. FOOTER ================= */}
      <footer className="relative z-30 px-6 py-4 border-t border-white/10 backdrop-blur-md bg-black/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span>© 2026 Make Your Plan</span>
          <span>•</span>
          <span>Phát triển bởi xu4ns0n</span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => handleProtectedAction('plans')}>Kế Hoạch</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => handleProtectedAction('tree')}>Sơ Đồ Cây Tư Duy</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => handleProtectedAction('stats')}>Báo Cáo Tiến Độ</span>
        </div>
      </footer>
    </div>
  );
};

export default IntroShowcase;