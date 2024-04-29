"use client";
import React, { useRef } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { StackTech, Home } from "@/components/sections";
import { Section } from "@/components/sections/Section";

const items = [
  {
    id: 0,
    name: "home",
    bgColor: "lightpurple",
    render: Home,
  },
  {
    id: 1,
    name: "skills",
    bgColor: "skyblue",
    render: StackTech,
  },
  {
    id: 2,
    name: "works",
    bgColor: "skyblue",
  },
  {
    id: 3,
    name: "resume",
    bgColor: "lightgreen",
  },
  {
    id: 4,
    name: "contact",
    bgColor: "lightsalmon",
  },
];

const footerItems = [
  { href: "", icon: LiaLinkedin, name: "Linkedin" },
  { href: "", icon: BsGithub, name: "Github" },
];

const Page = () => {
  const observerRefs = useRef<(HTMLElement | null)[]>([]);
  return (
    <>
      <NavBar observerRefs={observerRefs} items={items} />
      {items.map((div, key) => {
        const Slot = div.render ?? "div";
        return (
          <Section
            ref={(el) => {
              observerRefs.current[key] = el;
            }}
            key={key}
            id={String(key)}
            style={{ backgroundColor: div.bgColor }}
            className="min-h-screen"
          >
            <Slot />
          </Section>
        );
      })}
      <Footer items={footerItems} />
    </>
  );
};

export default Page;
