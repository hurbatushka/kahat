'use client';
import { useEffect, useRef, ReactNode } from "react";

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          ref.current.classList.add("animate-fadeInUp");
          ref.current.classList.remove("opacity-0");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={ref} className="opacity-0 transform transition-all duration-700">
      {children}
    </div>
  );
};

export default AnimatedComponent;
