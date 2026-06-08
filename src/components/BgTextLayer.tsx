"use client";
import { useEffect, useRef } from "react";

const TEXT =
  "So God blessed the seventh day and hallowed it. Jacob served seven years to get Rachel. Seven priests bearing seven trumpets of rams' horns before the ark. On the seventh day you shall march around the city seven times. I do not say to you seven times, but seventy times seven. ";

export default function BgTextLayer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div ref={ref} className="bg-text-layer" aria-hidden="true">
      {TEXT.repeat(8)}
    </div>
  );
}
