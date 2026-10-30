import React, { useState, useEffect } from 'react';
import { 
  User, 
  Lock, 
  ArrowRight, 
  Loader2, 
  Eye, 
  EyeOff, 
  X, 
  Sparkles,
  Zap,
  Network
} from 'lucide-react';

export const DEMO_ACCOUNTS = [
  { username: 'user1', password: '123456', label: 'User 1' },
  { username: 'user2', password: '123456', label: 'User 2' },
  { username: 'user3', password: '123456', label: 'User 3' },
  { username: 'user4', password: '123456', label: 'User 4' },
  { username: 'user5', password: '123456', label: 'User 5' },
];

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setUsername('');
      setPassword('');
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const executeLogin = (userToLogin: string) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', userToLogin);
    onLoginSuccess(userToLogin);
    onClose();
  };

  const handleQuickLogin = (uname: string, pass: string) => {
    setUsername(uname);
    setPassword(pass);
    setLoading(true);
    setError('');

    setTimeout(() => {
      executeLogin(uname);
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const trimmedUser = username.trim().toLowerCase();

    // 1. Kiểm tra tài khoản Demo (user1..user5 / 123456)
    const matchedDemo = DEMO_ACCOUNTS.find(
      acc => acc.username.toLowerCase() === trimmedUser && acc.password === password
    );

    if (matchedDemo) {
      setTimeout(() => {
        executeLogin(matchedDemo.username);
      }, 300);
      return;
    }

    // 2. Kiểm tra tài khoản Admin (xu4ns0n / Sondeptrai123@k)
    setTimeout(() => {
      if (trimmedUser === 'xu4ns0n' && password === 'Sondeptrai123@k') {
        executeLogin('xu4ns0n');
      } else {
        setError('Tài khoản hoặc mật khẩu không chính xác!');
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Background click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden scale-100 transition-all text-slate-100">
        
        {/* Glow ambient background */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all z-20 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-5 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
              <Network className="w-3.5 h-3.5" />
              <span>MAKE YOUR PLAN • MINDMAP</span>
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Đăng Nhập
            </h2>
            <p className="text-xs text-slate-400">
              Đăng nhập để lưu trữ kế hoạch, đồng bộ Mindmap và sử dụng AI
            </p>
          </div>

          {/* 1-Click Quick Auto Login Demo Accounts */}
          <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/25 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Tài khoản truy cập nhanh (1-Click Auto):</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">MK: 123456</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5">
              {DEMO_ACCOUNTS.map((acc) => (
                <button
                  key={acc.username}
                  type="button"
                  onClick={() => handleQuickLogin(acc.username, acc.password)}
                  className="py-1.5 px-1 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/40 border border-emerald-500/30 hover:border-emerald-400 text-emerald-200 text-xs font-semibold text-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
                  title={`Đăng nhập ngay với ${acc.username}`}
                >
                  {acc.username}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Hoặc nhập tài khoản</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Manual Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Username Input */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-slate-300 block">Tên tài khoản</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="user1, user2... hoặc xu4ns0n"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-semibold text-slate-300 block">Mật khẩu</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nhập mật khẩu (123456)..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs sm:text-sm transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs text-center font-medium">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 border border-emerald-400/30 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 mt-2 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Đăng Nhập Vào Không Gian</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>

    </div>
  );
};

export default LoginForm;

