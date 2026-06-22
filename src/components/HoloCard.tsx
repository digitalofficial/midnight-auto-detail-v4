"use client";

import { useRef, useCallback } from "react";

interface HoloCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoloCard({ children, className = "" }: HoloCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <div
      ref={ref}
      className={`holo-card ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
