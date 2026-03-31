import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowDown, Check, Sparkles, Rocket, Music, Scissors } from 'lucide-react';
import { STEPS, SCRIPT_TOOLS, STORYBOARD_ITEMS, IMAGE_PLATFORMS, VIDEO_PLATFORMS, AUDIO_TOOLS, RECRUITMENT_TAGS } from './constants';
import { Typewriter } from './components/Typewriter';
import { Section } from './components/Section';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeStep, setActiveStep] = useState(0);

  // Scroll spy to update active step for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="step-"]');
      let current = 0;
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = parseInt(section.id.split('-')[1]);
        }
      });
      setActiveStep(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation - Hidden on small mobile, visible on tablet+ */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40 bg-slate-900/50 p-4 rounded-full backdrop-blur-md border border-slate-800">
        {STEPS.map((step) => (
          <a
            key={step.id}
            href={`#step-${step.id}`}
            className={`transition-all duration-300 flex items-center gap-2 group ${activeStep === step.id ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-80'}`}
          >
            <span className={`text-xs font-bold whitespace-nowrap overflow-hidden w-0 group-hover:w-auto transition-all ${step.color}`}>
              {step.title}
            </span>
            <div className={`p-2 rounded-full ${activeStep === step.id ? 'bg-slate-100 text-slate-900' : 'bg-slate-800 text-white'}`}>
              <step.icon size={20} />
            </div>
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative text-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <span className="px-4 py-2 rounded-full border border-purple-500/50 text-purple-300 text-lg md:text-xl font-medium bg-purple-900/10 backdrop-blur-sm">
            启明星 AI 工作室 · AI 视频全流程展示页
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight animate-gradient-text pb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          从 0 到 1
        </motion.h1>

        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 animate-gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          用 AI 做出第一支视频
        </motion.h2>

        <motion.div 
          className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto space-y-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p>AI 不只是工具</p>
          <p className="text-white font-medium">它是每一个普通人，通往创作者的入口</p>
          <p className="pt-8 text-lg md:text-2xl text-slate-500">
            不会剪辑 ｜ 不会画画 ｜ 不会配音？ <br className="md:hidden" />没关系。
          </p>
          <p className="text-2xl md:text-4xl font-bold text-white pt-2">
            你只需要一个想法，剩下的交给 <span className="text-blue-400">AI</span>。
          </p>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-lg">向下滚动，体验完整流程</span>
          <ArrowDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* Process Overview / Flow Diagram - Visual Only */}
      <Section className="py-24">
        <div className="max-w-7xl mx-auto w-full">
          <h3 className="text-3xl md:text-5xl font-bold mb-16 text-center">一条 AI 视频的完整诞生流程</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-4 group cursor-default"
                >
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500`}>
                    <step.icon className="w-8 h-8 md:w-12 md:h-12 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-slate-400 group-hover:text-white">{step.title}</span>
                </motion.div>
                {index < STEPS.length - 1 && (
                  <div className="hidden xl:block h-0.5 w-12 bg-slate-800" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center mt-20">
            <p className="text-2xl md:text-4xl text-purple-300 font-bold">这不是未来</p>
            <p className="text-2xl md:text-4xl text-white mt-4">这是你现在就能掌握的能力</p>
          </div>
        </div>
      </Section>

      {/* Step 1: Script */}
      <Section id="step-1" className="bg-slate-950">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          <div>
            <span className="text-blue-400 text-xl font-bold tracking-wider">STEP 01</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-8">剧本 / 脚本</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-200 mb-6">一切创作，从一句话开始</h3>
            <p className="text-2xl text-slate-400 mb-8">
              你不需要成为编剧<br />
              <span className="text-white font-bold">AI 会成为你的编剧</span>
            </p>
            
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <h4 className="text-xl text-slate-300 mb-6 font-bold">常用 AI 编剧工具</h4>
              <ul className="grid grid-cols-2 gap-4">
                {SCRIPT_TOOLS.map(tool => (
                  <li key={tool} className="flex items-center gap-3 text-xl text-slate-100">
                    <Check className="text-blue-500" /> {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="font-mono text-lg md:text-xl text-slate-300 leading-relaxed min-h-[400px]">
              <div className="text-slate-500 mb-4 pb-4 border-b border-slate-800">// 示例提示词 (Prompt)</div>
              <Typewriter 
                text="你是一个资深编剧，擅长撰写精彩生动、跌宕起伏的故事。请生成一个 500 字左右的短故事，主题为「中国历史新编」，要求通俗易懂，适合改编为短视频。或者... 请给我生成10部动漫短剧的故事剧本..."
                delay={500}
                speed={30}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Step 2: Storyboard */}
      <Section id="step-2" className="bg-slate-900/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <span className="text-cyan-400 text-xl font-bold tracking-wider">STEP 02</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-6">分镜脚本</h2>
            <p className="text-3xl md:text-5xl font-bold text-white mb-8">把故事，拆成 AI 能看懂的画面</p>
            <p className="text-2xl text-slate-400">一个故事，会被拆解为多个「镜头」</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORYBOARD_ITEMS.map((item, i) => (
              <motion.div 
                key={item}
                whileHover={{ y: -10, borderColor: "rgba(34,211,238, 0.5)" }}
                className="bg-slate-900 p-10 rounded-3xl border border-slate-800 flex items-center justify-center text-center shadow-lg"
              >
                <span className="text-2xl md:text-3xl font-bold text-slate-200">{item}</span>
              </motion.div>
            ))}
            <div className="lg:col-span-1 bg-gradient-to-br from-cyan-900/20 to-slate-900 p-10 rounded-3xl border border-cyan-900/30 flex items-center justify-center text-center">
              <span className="text-xl md:text-2xl text-cyan-200">
                分镜头转换成<br/>文生图提示词
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Step 3: Prompts */}
      <Section id="step-3" className="bg-slate-950">
        <div className="max-w-6xl mx-auto w-full text-center">
          <span className="text-purple-400 text-xl font-bold tracking-wider">STEP 03</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-8">AI 提示词</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-12">这是你和 AI 沟通的语言</h3>
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-left shadow-2xl mx-auto max-w-4xl relative overflow-hidden">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
             
             <div className="mb-8">
               <h4 className="text-2xl text-purple-300 font-bold mb-4 flex items-center gap-2">
                 <Sparkles className="inline" /> 案例 1：图片提示词
               </h4>
               <p className="text-xl md:text-2xl text-slate-300 leading-relaxed italic bg-black/30 p-6 rounded-xl border-l-4 border-purple-500">
                 "你是一个专业的AIGC视频制作者... 提示词以最适合该AI的格式输出，不要有过多的细节（粒子细节）以及AI难以理解的内容（帝王气息）"
               </p>
             </div>

             <div>
               <h4 className="text-2xl text-purple-300 font-bold mb-4 flex items-center gap-2">
                 <Sparkles className="inline" /> 案例 2：Sora 视频提示词
               </h4>
               <p className="text-xl md:text-2xl text-slate-300 leading-relaxed italic bg-black/30 p-6 rounded-xl border-l-4 border-purple-500">
                 "解析脚本表格，生成适合于sora2使用的视频提示词... 内容包括 运镜描述；画面内容；旁白配音..."
               </p>
             </div>
          </div>
        </div>
      </Section>

      {/* Step 4: Generate Images */}
      <Section id="step-4" className="bg-slate-900/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/2">
                <span className="text-fuchsia-400 text-xl font-bold tracking-wider">STEP 04</span>
                <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-6">生成图片</h2>
                <p className="text-3xl md:text-5xl font-bold text-white mb-8">不会画画，<br/>也能做出高质量画面</p>
                
                <div className="space-y-8 mt-12">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-200 mb-4">国内平台</h4>
                    <div className="flex flex-wrap gap-3">
                      {IMAGE_PLATFORMS.domestic.map(p => (
                        <span key={p} className="px-6 py-3 bg-slate-800 rounded-full text-xl text-slate-300 border border-slate-700">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-200 mb-4">国外平台</h4>
                    <div className="flex flex-wrap gap-3">
                      {IMAGE_PLATFORMS.foreign.map(p => (
                        <span key={p} className="px-6 py-3 bg-slate-800 rounded-full text-xl text-slate-300 border border-slate-700">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-fuchsia-900/20 border border-fuchsia-500/30 rounded-2xl">
                   <p className="text-2xl md:text-3xl text-fuchsia-200 font-bold text-center">"一句话，就是一张画面"</p>
                </div>
             </div>

             <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <motion.img 
                  src="https://picsum.photos/seed/ai1/400/600" 
                  alt="AI Art 1" 
                  className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                />
                <motion.img 
                  src="https://picsum.photos/seed/ai2/400/600" 
                  alt="AI Art 2" 
                  className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 mt-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                />
                 <motion.img 
                  src="https://picsum.photos/seed/ai3/400/600" 
                  alt="AI Art 3" 
                  className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                />
                <motion.img 
                  src="https://picsum.photos/seed/ai4/400/600" 
                  alt="AI Art 4" 
                  className="rounded-2xl w-full h-64 md:h-80 object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 mt-12"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                />
             </div>
          </div>
        </div>
      </Section>

      {/* Step 5: Generate Video */}
      <Section id="step-5" className="bg-slate-950">
        <div className="max-w-7xl mx-auto w-full text-center">
          <span className="text-pink-400 text-xl font-bold tracking-wider">STEP 05</span>
          <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-8">生成视频</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-12">让画面真正动起来</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {["运镜方式", "动作节奏", "情绪氛围"].map((item, idx) => (
               <motion.div 
                 key={item}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.2 }}
                 className="bg-slate-900 border border-slate-800 py-12 px-6 rounded-3xl"
               >
                 <span className="text-2xl font-bold text-pink-300">AI 自动理解</span>
                 <p className="text-4xl font-black text-white mt-4">{item}</p>
               </motion.div>
             ))}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-3xl border border-slate-700">
             <h4 className="text-2xl text-slate-400 mb-6 font-bold">常用视频生成平台</h4>
             <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {VIDEO_PLATFORMS.map(p => (
                  <span key={p} className="text-2xl md:text-3xl font-bold text-white hover:text-pink-400 transition-colors cursor-pointer">{p}</span>
                ))}
             </div>
          </div>
        </div>
      </Section>

      {/* Step 6: Audio */}
      <Section id="step-6" className="bg-slate-900/30">
        <div className="max-w-7xl mx-auto w-full">
           <div className="text-center mb-16">
              <span className="text-rose-400 text-xl font-bold tracking-wider">STEP 06</span>
              <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-6">AI 配音 & 音乐</h2>
              <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                声音，是作品的灵魂
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
                 <div>
                   <h3 className="text-4xl font-bold text-white mb-8">AI 配音</h3>
                   <ul className="space-y-6">
                      {AUDIO_TOOLS.voice.map(tool => (
                        <li key={tool} className="text-2xl text-slate-300 flex items-center gap-4">
                          <span className="w-2 h-2 bg-rose-500 rounded-full" /> {tool}
                        </li>
                      ))}
                   </ul>
                 </div>
                 <div className="mt-12 flex gap-1 items-end h-24 justify-center">
                    {[...Array(10)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="w-4 bg-rose-500 rounded-full"
                        animate={{ height: [20, 80, 40, 90, 30] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                      />
                    ))}
                 </div>
              </div>

              <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 flex flex-col justify-between">
                 <div>
                   <h3 className="text-4xl font-bold text-white mb-8">AI 音乐</h3>
                   <ul className="space-y-6">
                      {AUDIO_TOOLS.music.map(tool => (
                        <li key={tool} className="text-2xl text-slate-300 flex items-center gap-4">
                          <span className="w-2 h-2 bg-orange-500 rounded-full" /> {tool}
                        </li>
                      ))}
                      <li className="text-xl text-slate-500 mt-4 pt-4 border-t border-slate-800">
                        旁白、情绪、BGM - 全部由 AI 完成
                      </li>
                   </ul>
                 </div>
                 <div className="mt-12 flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-orange-500 flex items-center justify-center animate-spin-slow">
                       <Music className="text-orange-500" size={32} />
                    </div>
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                       <motion.div 
                         className="h-full bg-orange-500"
                         initial={{ width: "0%" }}
                         whileInView={{ width: "100%" }}
                         transition={{ duration: 3, ease: "linear" }}
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* Step 7: Editing */}
      <Section id="step-7" className="bg-slate-950">
         <div className="max-w-5xl mx-auto w-full text-center">
            <span className="text-orange-400 text-xl font-bold tracking-wider">STEP 07</span>
            <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-10">剪辑成片</h2>
            <p className="text-3xl md:text-5xl font-bold text-white mb-12">所有素材，在这里汇聚</p>
            
            <div className="bg-gradient-to-b from-slate-900 to-black p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative">
               <div className="absolute top-4 left-1/2 -translate-x-1/2 text-slate-600 text-sm tracking-widest uppercase">Final Cut</div>
               <div className="flex flex-col items-center gap-8">
                  <Scissors size={80} className="text-white" />
                  <p className="text-4xl font-bold text-slate-200">我们使用：剪映专业版</p>
                  <div className="flex items-center gap-4 text-2xl md:text-3xl text-slate-500 font-bold my-4">
                     <span>画面</span>
                     <span className="text-orange-500">×</span>
                     <span>配音</span>
                     <span className="text-orange-500">×</span>
                     <span>音乐</span>
                  </div>
                  <motion.div 
                    className="px-10 py-6 bg-orange-600 rounded-full text-white text-2xl font-bold flex items-center gap-3"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1.05 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
                  >
                     👉 一支完整的 AI 视频正式诞生
                  </motion.div>
               </div>
            </div>
         </div>
      </Section>

      {/* About Us */}
      <Section className="bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-12">我们在做什么？</h2>
          <div className="text-2xl md:text-3xl text-slate-300 space-y-8 leading-relaxed">
             <p>这是一个属于 AI 创作者的校园工作室</p>
             <p>不是教学型，也不是兴趣社团</p>
             <p className="text-white font-bold">是一个以<span className="text-blue-400">商业结果</span>为导向的 AIGC 工作室。</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
             {RECRUITMENT_TAGS.map((tag, idx) => (
                <motion.div 
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800 py-4 px-2 rounded-xl text-lg md:text-xl font-bold text-blue-200 border border-slate-700"
                >
                  {tag}
                </motion.div>
             ))}
          </div>

          <div className="mt-20 text-left bg-black/40 p-10 rounded-3xl border-l-8 border-blue-600">
             <h3 className="text-4xl font-bold text-white mb-6">当然</h3>
             <p className="text-xl md:text-2xl text-slate-400 space-y-4">
                AIGC 在学习阶段很耗时间，也需要买工具、用外网，做视频也会遇到大量失败和废片。<br/><br/>
                工作室现在主要做的是 AIGC 视频相关的商业项目，目标是稳定输出，而不是单个大精品。<br/><br/>
                <span className="text-white font-bold text-3xl block mt-8">所以我们更适合那种愿意长期投入，<br/>而不是想短期体验的人。</span>
             </p>
          </div>
        </div>
      </Section>

      {/* CTA / Footer */}
      <Section className="bg-gradient-to-b from-slate-950 to-blue-950/30 flex items-center justify-center">
         <div className="text-center w-full max-w-5xl">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
            >
               <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8">现在，轮到你了</h2>
               <p className="text-4xl md:text-6xl text-slate-200 font-bold mb-16">做出你的第一支 AI 视频</p>
               
               <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <button className="relative px-12 py-8 bg-white text-slate-950 text-3xl md:text-5xl font-black rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-6 shadow-2xl">
                     <Rocket size={48} className="text-blue-600" />
                     校园 AIGC 创作工作室 招新中
                  </button>
               </div>
            </motion.div>

            <div className="mt-24 p-8 bg-slate-900/80 rounded-2xl border border-slate-800 text-left max-w-3xl mx-auto backdrop-blur-sm">
               <h4 className="text-2xl text-green-400 font-bold mb-4 flex items-center gap-2">
                  <span className="bg-green-500/20 p-1 rounded">✅</span> 使用说明（给你）
               </h4>
               <ul className="space-y-3 text-xl text-slate-300">
                  <li className="flex items-center gap-3"><Check size={20} className="text-green-500" /> 可 <strong>直接粘贴进 AI Studio / Build 模式</strong></li>
                  <li className="flex items-center gap-3"><Check size={20} className="text-green-500" /> 已包含 <strong>结构 + 文案 + 动画意图</strong></li>
                  <li className="flex items-center gap-3"><Check size={20} className="text-green-500" /> AI 可根据「动画说明」自动生成交互</li>
                  <li className="flex items-center gap-3"><Check size={20} className="text-green-500" /> 非常适合 <strong>招新 / 宣传 / 展示用</strong></li>
               </ul>
            </div>
         </div>
      </Section>

      <footer className="py-8 text-center text-slate-600 text-lg">
        &copy; {new Date().getFullYear()} 启明星 AI 工作室. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;