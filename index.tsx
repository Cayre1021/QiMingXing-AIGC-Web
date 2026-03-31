@import "tailwindcss";

@theme {
  --font-sans: 'Noto Sans SC', ui-sans-serif, system-ui, sans-serif;
}

body {
  font-family: 'Noto Sans SC', sans-serif;
  background-color: #020617; /* slate-950 */
  color: #f8fafc; /* slate-50 */
  overflow-x: hidden;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #0f172a;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* Dynamic Gradient Text Animation */
@keyframes gradient-xy {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-text {
  background: linear-gradient(to right, #60a5fa, #a855f7, #3b82f6, #c084fc, #60a5fa);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient-xy 4s ease infinite;
}
