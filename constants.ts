import { 
  FileText, 
  Layout, 
  MessageSquareCode, 
  Image as ImageIcon, 
  Film, 
  Music, 
  Scissors 
} from 'lucide-react';

export const STEPS = [
  {
    id: 1,
    title: "剧本 / 脚本",
    subtitle: "STEP 01",
    icon: FileText,
    desc: "一切创作，从一句话开始",
    color: "text-blue-400"
  },
  {
    id: 2,
    title: "分镜脚本",
    subtitle: "STEP 02",
    icon: Layout,
    desc: "把故事，拆成 AI 能看懂的画面",
    color: "text-cyan-400"
  },
  {
    id: 3,
    title: "AI 提示词",
    subtitle: "STEP 03",
    icon: MessageSquareCode,
    desc: "这是你和 AI 沟通的语言",
    color: "text-purple-400"
  },
  {
    id: 4,
    title: "生成图片",
    subtitle: "STEP 04",
    icon: ImageIcon,
    desc: "不会画画，也能做出高质量画面",
    color: "text-fuchsia-400"
  },
  {
    id: 5,
    title: "生成视频",
    subtitle: "STEP 05",
    icon: Film,
    desc: "让画面真正动起来",
    color: "text-pink-400"
  },
  {
    id: 6,
    title: "AI 配音 & 音乐",
    subtitle: "STEP 06",
    icon: Music,
    desc: "声音，是作品的灵魂",
    color: "text-rose-400"
  },
  {
    id: 7,
    title: "剪辑成片",
    subtitle: "STEP 07",
    icon: Scissors,
    desc: "所有素材，在这里汇聚",
    color: "text-orange-400"
  }
];

export const SCRIPT_TOOLS = ["ChatGPT", "Gemini", "Grok", "豆包"];

export const STORYBOARD_ITEMS = [
  "运镜方式", "故事内容", "画面描述", "旁白 / 台词", "音效 / 音乐风格"
];

export const IMAGE_PLATFORMS = {
  domestic: ["豆包（免费）", "即梦", "可灵"],
  foreign: ["Midjourney（全付费）", "Gemini", "Grok"]
};

export const VIDEO_PLATFORMS = ["即梦", "可灵", "海螺", "Vidu", "Runway", "Grok", "Sora"];

export const AUDIO_TOOLS = {
  voice: ["Minimax（支持断句）", "Fish Audio（声音克隆 + 情感）"],
  music: ["海绵音乐 AI", "Suno"]
};

export const RECRUITMENT_TAGS = [
  "不限专业", "不限基础", "只看热爱", "高效行动力", "愿意坚持"
];