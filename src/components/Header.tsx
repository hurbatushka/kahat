"use client";
import Link from "next/link";
import { HandHeart } from "lucide-react"; // Импорт иконки hand-heart
import { useEffect, useRef } from "react";

const Header: React.FC = () => {
  const animateRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    animateRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.classList.add(`animate__fadeIn${(index % 4) + 1}`); // Применяем классы анимации fadeIn1, fadeIn2, fadeIn3, fadeIn4
      }
    });
  }, []);

  return (
    <header className="bg-red-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-2xl font-bold text-center flex items-center space-x-1">
          {/* Анимация и разные цвета для каждой буквы */}
          <span
            ref={(el) => (animateRefs.current[0] = el)}
            className="animate__animated"
          >
            Команда
          </span>

          <span
            ref={(el) => (animateRefs.current[7] = el)}
            className="text-blue-600 animate__animated"
          >
            {" "}
          </span>

          <span
            ref={(el) => (animateRefs.current[14] = el)}
            className="animate__animated"
          >
            "
          </span>
          <span
            ref={(el) => (animateRefs.current[8] = el)}
            className="text-yellow-400 animate__animated"
          >
            К
          </span>
          <span
            ref={(el) => (animateRefs.current[9] = el)}
            className="text-green-600 animate__animated"
          >
            а
          </span>
          <span
            ref={(el) => (animateRefs.current[10] = el)}
            className="text-purple-600 animate__animated"
          >
            х
          </span>
          <span
            ref={(el) => (animateRefs.current[11] = el)}
            className="text-yellow-300 animate__animated"
          >
            а
          </span>
          <span
            ref={(el) => (animateRefs.current[12] = el)}
            className="text-blue-600 animate__animated"
          >
            ц
          </span>
          <span
            ref={(el) => (animateRefs.current[13] = el)}
            className="text-green-600 animate__animated"
          >
            ь
          </span>
          <span
            ref={(el) => (animateRefs.current[14] = el)}
            className="animate__animated"
          >
            "
          </span>
        </div>
        <HandHeart className="w-6 h-6 ml-2 text-red-600" />{" "}
        {/* Иконка hand-heart */}
      </div>
    </header>
  );
};

export default Header;
