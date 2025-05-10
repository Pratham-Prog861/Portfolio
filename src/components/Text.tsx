"use client"
import { TextGenerateEffect } from "./ui/text-generate-effect"

const Text = () => {
  const words = `Hi , I am Pratham Darji.
  I am a Frontend Developer.
  Expert in React, Next.js, Tailwind CSS, and TypeScript.
  📍 Based in Vadodara, Gujarat, India.
  `;
  return (
    <div>
      <TextGenerateEffect duration={2} filter={false} words={words} />
    </div>
  )
}

export default Text