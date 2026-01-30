export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live?: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Code with Pratham",
    description:
      "Learn to code with me through interactive tutorials and projects.",
    image: "/codewithpratham.webp",
    github: "https://github.com/Pratham-Prog861/DevLearning",
    live: "https://codewithpratham.netlify.app/",
    tags: ["React", "Next.js", "Education"],
    featured: true,
  },
  {
    title: "AI Connect Pro",
    description: "This AI helps you find solutions to your problems",
    image: "/ai-connect.webp",
    github: "https://github.com/Pratham-Prog861/AI-Connect",
    live: "https://aiconnectpro.netlify.app/",
    tags: ["React", "AI", "API"],
    featured: true,
  },
  {
    title: "VibeStream",
    description: "I built a Spotify-style music app — without a backend!",
    image: "/vibestream.webp",
    github: "https://github.com/Pratham-Prog861/VibeStream",
    live: "https://vibe-stream-ebon.vercel.app/",
    tags: ["React", "Music", "Frontend"],
    featured: true,
  },
  {
    title: "LeetCode AI Helper",
    description: "A browser extension to help solve LeetCode problems.",
    image: "/leetcode-ai-helper.webp",
    github: "https://github.com/Pratham-Prog861/LeetCode-AI-Helper",
    tags: ["Extension", "AI", "JavaScript"],
  },
  {
    title: "Mini Postman",
    description:
      "Mini Postman is a minimalistic Postman client that helps you test APIs.",
    image: "/mini-postman.webp",
    github: "https://github.com/Pratham-Prog861/mini-postman",
    live: "https://mini-postman-rouge.vercel.app/",
    tags: ["React", "API", "Tools"],
  },
  {
    title: "Enhanced Convex Chat",
    description:
      "Enhanced Convex Chat app with new features and optimizations.",
    image: "/convex-chat.webp",
    github: "https://github.com/Pratham-Prog861/convex-chat-tutorial-enhanced",
    tags: ["React", "Realtime", "Backend"],
  },
  {
    title: "CineVerse",
    description:
      "Your Movie Discovery Platform. Explore and dive into the world of cinema with Cineverse.",
    image: "/cineverse.webp",
    github: "https://github.com/Pratham-Prog861/Cineverse",
    live: "https://cineverse-coral-two.vercel.app/",
    tags: ["React", "API", "Movies"],
  },
  {
    title: "React Lite Hooks",
    description: "A set of lightweight React hooks for common UI needs.",
    image: "/react-lite.webp",
    github: "https://github.com/Pratham-Prog861/react-lite-hooks",
    live: "https://www.npmjs.com/package/react-lite-hooks",
    tags: ["React", "NPM", "Library"],
    featured: true,
  },
  {
    title: "StreamFlix",
    description:
      "StreamFlix - discover and stream movies online, anytime, anywhere.",
    image: "/streamflix.webp",
    github: "https://github.com/Pratham-Prog861/StreamFlix",
    live: "https://stream-flix-six.vercel.app/",
    tags: ["React", "API", "Movies"],
  },
  {
    title: "Aniverse",
    description:
      "Aniverse is a anime discovery app that helps you find new anime to watch.",
    image: "/aniverse.webp",
    github: "https://github.com/Pratham-Prog861/aniverse",
    live: "https://aniverse-seven.vercel.app/",
    tags: ["Next.js", "API", "Anime"],
  },
  {
    title: "TaskMaster",
    description:
      "TaskMaster is a web application that helps you manage your tasks and stay organized.",
    image: "/taskmaster.webp",
    github: "https://github.com/Pratham-Prog861/TaskMaster",
    live: "https://task-master-phd.netlify.app/",
    tags: ["React", "Productivity", "Frontend"],
  },
  {
    title: "ChatSync",
    description: "A web application that i developed to chat with my friends.",
    image: "/chat-sync.webp",
    github: "https://github.com/Pratham-Prog861/Chat-App-with-React",
    tags: ["React", "Realtime", "Chat"],
  },
  {
    title: "Lenovo Animated Website",
    description: "A visually appealing animated website for Lenovo products.",
    image: "/lenovo-animated-website.webp",
    github: "https://github.com/Pratham-Prog861/Lenovo-Animated-Website",
    tags: ["HTML", "CSS", "Animation"],
  },
  {
    title: "Music Player",
    description:
      "This is a music player that you can use to play your favorite songs",
    image: "/music-player.webp",
    github: "https://github.com/Pratham-Prog861/music-player",
    live: "https://phdmusic.netlify.app/",
    tags: ["JavaScript", "Music", "Frontend"],
  },
  {
    title: "Currency Converter",
    description:
      "Currency converter application built with Python and Streamlit",
    image: "/currency-convertor.webp",
    github:
      "https://github.com/Pratham-Prog861/Streamlit/blob/main/currency_convertor.py",
    live: "https://phd-convertor.streamlit.app/",
    tags: ["Python", "Streamlit", "Tools"],
  },
];

export default projects;
