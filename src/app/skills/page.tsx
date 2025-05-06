"use client"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
const page = () => {
  const words = `I Have This Skill`;
  return (
    <div className="w-full h-screen">
      <div className="w-full h-28 flex justify-center items-center">
        <TextGenerateEffect words={words} />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default page