"use client"
import { TextGenerateEffect } from "./ui/text-generate-effect"

const Text = () => {
  const words = `Hi , I am Pratham Darji.
  I am a Frontend Developer.
  Expert in React, Next.js, Tailwind CSS, and TypeScript.
  Passionate about building things that make a difference.
  I am a team player who loves to collaborate with others.
  `;
  return (
    <div>
      <TextGenerateEffect duration={2} filter={false} words={words} />
    </div>
  )
}

export default Text