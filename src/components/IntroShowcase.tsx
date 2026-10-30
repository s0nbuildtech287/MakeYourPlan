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

// Danh sách poster ma trận nền giả lập các kế hoạch & dự án đỉnh cao (y hệt background movie posters)
const BACKGROUND_POSTERS = [
  { title: "AI Agent OS 2026", cat: "Artificial Intelligence", tag: "HOT", color: "from-blue-600 to-indigo-900" },
  { title: "Trading System Pro", cat: "Algorithmic Trading", tag: "PRO", color: "from-emerald-600 to-slate-900" },
  { title: "Master Machine Learning", cat: "Deep Learning", tag: "CORE", color: "from-purple-600 to-slate-900" },
  { title: "Microservices Architecture", cat: "System Design", tag: "TECH", color: "from-cyan-600 to-slate-900" },
  { title: "Fullstack SaaS Platform", cat: "Web Development", tag: "LIVE", color: "from-amber-600 to-slate-900" },
  { title: "Tự Do Tài Chính 2026", cat: "Wealth & Finance", tag: "GOAL", color: "from-rose-600 to-slate-900" },
  { title: "DevOps & Cloud Native", cat: "Kubernetes & Docker", tag: "CLOUD", color: "from-teal-600 to-slate-900" },
  { title: "UI/UX Cyberpunk 3D", cat: "Visual Design", tag: "DESIGN", color: "from-fuchsia-600 to-slate-900" },
  { title: "Mobile App Flutter/React", cat: "Cross-Platform", tag: "APP", color: "from-sky-600 to-slate-900" },
  { title: "Blockchain Smart Contracts", cat: "Web3 & DeFi", tag: "WEB3", color: "from-violet-600 to-slate-900" },
  { title: "Data Engineering Pipeline", cat: "Big Data & ETL", tag: "DATA", color: "from-emerald-700 to-gray-900" },
  { title: "Sprint Kế Hoạch Tuần", cat: "Agile & Scrum", tag: "SPRINT", color: "from-blue-700 to-gray-900" },
  { title: "Khởi Nghiệp EdTech 2026", cat: "Business Plan", tag: "STARTUP", color: "from-orange-600 to-slate-900" },
  { title: "NLP & Large Models", cat: "Generative AI", tag: "GENAI", color: "from-pink-600 to-slate-900" },
  { title: "Tối Ưu Hiệu Suất Cá Nhân", cat: "Productivity", tag: "FOCUS", color: "from-lime-600 to-slate-900" },
  { title: "Kế Hoạch Đọc 50 Đầu Sách", cat: "Personal Growth", tag: "HABIT", color: "from-indigo-700 to-slate-900" },
  { title: "Luyện Thi Chứng Chỉ AWS", cat: "Certifications", tag: "CERT", color: "from-amber-700 to-slate-900" },
  { title: "Game Engine C++ 3D", cat: "Game Development", tag: "DEV", color: "from-red-600 to-slate-900" },
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
      className="relative min-h-screen w-full bg-[#05070f] text-slate-100 overflow-hidden flex flex-col justify-between select-none"
      style={{ perspective: '1200px' }}
    >
      {/* ================= 1. POSTER MATRIX BACKGROUND (Y hệt Oniscenary) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-45">
        <div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 p-4 -m-8 scale-105"
          style={{
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) scale(1.05)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {BACKGROUND_POSTERS.concat(BACKGROUND_POSTERS).slice(0, 24).map((p, i) => (
            <div 
              key={i}
              className={`h-40 sm:h-48 md:h-56 rounded-2xl bg-gradient-to-br ${p.color} p-3.5 flex flex-col justify-between border border-white/10 shadow-lg relative overflow-hidden group`}
            >
              {/* Card visual elements */}
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                  {p.tag}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-white/40" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-white/60 font-medium truncate">{p.cat}</p>
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-tight">
                  {p.title}
                </h4>
              </div>
              {/* Gradient overlay inside poster */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Radial Dark Vignette & Glow (Tập trung ánh sáng vào trung tâm) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,7,15,0.4)_0%,rgba(5,7,15,0.85)_55%,rgba(5,7,15,0.98)_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* ================= 2. TOPBAR HEADER (Giống hệt Oniscenary) ================= */}
      <header className="relative z-30 px-6 sm:px-12 py-5 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-black/25">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onEnterApp('plans')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-indigo-600 p-0.5 shadow-lg shadow-emerald-500/25 flex items-center justify-center">
            <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center">
              <Network className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-black text-base sm:text-lg tracking-wider text-white">YOURPLAN</h1>
              <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                PRO 3D
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Smart Mindmap & Structured Action Planner</p>
          </div>
        </div>

        {/* Auth / Action Buttons */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Đã Đăng Nhập: {currentUser}</span>
              </div>
              <button
                onClick={() => onEnterApp('plans')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Vào Kế Hoạch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2.5">
              <button
                onClick={onOpenLogin}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-white/10 flex items-center gap-2 transition-all cursor-pointer backdrop-blur-md"
              >
                <LogIn className="w-4 h-4 text-emerald-400" />
                <span>Đăng Nhập</span>
              </button>

              <button
                onClick={() => handleProtectedAction('plans')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-teal-500 to-emerald-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
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
          className="absolute top-20 left-8 lg:left-14 w-72 p-4 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-indigo-500/30 shadow-2xl shadow-indigo-500/20 pointer-events-auto hover:scale-105 hover:border-emerald-400 transition-all cursor-pointer group"
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
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-white/5">
            <span>Sơ đồ 2 bên đối xứng</span>
            <span className="text-emerald-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 2: Trên Phải (Top-Right) */}
        <div 
          onClick={() => handleProtectedAction('plans')}
          className="absolute top-20 right-8 lg:right-14 w-72 p-4 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-amber-500/30 shadow-2xl shadow-amber-500/20 pointer-events-auto hover:scale-105 hover:border-amber-400 transition-all cursor-pointer group"
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
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-white/5">
            <span>12 Cột mốc Milestone</span>
            <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 3: Dưới Trái (Bottom-Left) */}
        <div 
          onClick={() => handleProtectedAction('plans')}
          className="absolute bottom-16 left-8 lg:left-14 w-72 p-4 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 pointer-events-auto hover:scale-105 hover:border-cyan-400 transition-all cursor-pointer group"
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
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-white/5">
            <span>Checklist đa cấp Markdown</span>
            <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 4: Dưới Phải (Bottom-Right) */}
        <div 
          onClick={() => handleProtectedAction('stats')}
          className="absolute bottom-16 right-8 lg:right-14 w-72 p-4 rounded-2xl bg-[#0c101d]/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 pointer-events-auto hover:scale-105 hover:border-emerald-400 transition-all cursor-pointer group"
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
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-2 border-t border-white/5">
            <span>Bóc tách 1-click thông minh</span>
            <span className="text-emerald-400 font-semibold group-hover:underline flex items-center gap-1">
              Xem Ngay <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>

      {/* ================= 4. CENTER STAGE GLASS CARD (Y hệt card chính giữa của Oniscenary) ================= */}
      <main className="relative z-20 max-w-2xl mx-auto px-4 py-8 my-auto w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c101e]/85 backdrop-blur-2xl border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] text-center flex flex-col items-center gap-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs font-bold text-indigo-300 shadow-md">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
            <span>TRẢI NGHIỆM LẬP KẾ HOẠCH THẾ HỆ MỚI</span>
          </div>

          {/* Big Hero Title */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              MAKE YOUR PLAN
            </h2>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              MINDMAP 3D
            </h3>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed font-normal">
            Không gian kiến tạo kế hoạch hành động chuẩn hóa và sơ đồ tư duy thông minh. Tự do tổ chức công việc theo cây phân cấp, cân đối đối xứng 2 bên và kết nối trợ lý AI Gemini Pro mượt mà.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auto-Layout 2 Bên Đối Xứng</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
              <span>Trợ Lý Gemini AI 1-Click</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
              <BarChart2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Quản Lý Tiến Độ Realtime</span>
            </div>
          </div>

          {/* 2 CTA Buttons (Giống Oniscenary) */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full pt-2">
            <button
              onClick={() => handleProtectedAction('plans')}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-teal-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-95 transition-all border border-white/20 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Khám Phá Kế Hoạch Ngay</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => handleProtectedAction('tree')}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2.5 border border-white/15 hover:border-emerald-500/50 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            >
              <Network className="w-4 h-4 text-emerald-400" />
              <span>Mở Sơ Đồ Tư Duy 3D</span>
            </button>
          </div>
        </div>
      </main>

      {/* ================= 5. FOOTER ================= */}
      <footer className="relative z-30 px-6 py-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div className="flex items-center gap-2">
          <span>© 2026 Make Your Plan</span>
          <span>•</span>
          <span>Phát triển bởi xu4ns0n</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => handleProtectedAction('plans')}>Kế Hoạch</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => handleProtectedAction('tree')}>Sơ Đồ Cây Tư Duy</span>
          <span className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => handleProtectedAction('stats')}>Báo Cáo Tiến Độ</span>
        </div>
      </footer>
    </div>
  );
};

export default IntroShowcase;