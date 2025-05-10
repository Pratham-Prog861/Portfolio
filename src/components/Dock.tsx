import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconAddressBook,
  IconBraille,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandProducthunt,
  IconHome,
} from "@tabler/icons-react";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconBrandProducthunt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Skills",
      icon: (
        <IconBraille className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/skills",
    },
    {
      title: "Contact Me",
      icon: (
        <IconAddressBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/pratham-darji-b704092a2/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Pratham-Prog861",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[10rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
