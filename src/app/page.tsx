"use client"
import Text from "@/components/Text";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="w-full pt-56 pl-32">
        <div className="w-1/2">
          <Text />
        </div>
        <div className="absolute top-40 right-32 pointer-events-none select-none">
          <Image 
            alt="Profile picture"
            src="/profile.jpeg"
            width={400}
            height={400}
            className={`rounded-full transition-opacity duration-500 ${
              showImage ? 'opacity-100' : 'opacity-0'
            }`}
            draggable={false}
            style={{ userSelect: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
