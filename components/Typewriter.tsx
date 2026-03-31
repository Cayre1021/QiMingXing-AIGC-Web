import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = "",
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};