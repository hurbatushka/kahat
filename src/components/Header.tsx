"use client";
import Link from "next/link";
import { HandHeart } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  const text = '"Кахаць"';
  const colors = [
    "text-purple-600",
    "text-yellow-400",
    "text-blue-600",
    "text-yellow-300",
    "text-green-600",
  ];

  return (
    <header className="bg-red-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
          className="mr-4 "
        />
        <div className="text-2xl font-bold text-center flex items-center space-x-1 ">
          <p className="mr-2">Команда</p>
          {text.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                colors[index % colors.length]
              } animate-fade-in-down`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <HandHeart className="w-6 h-6 ml-2 text-red-600 animate-bounce" />
      </div>
    </header>
  );
};

export default Header;
