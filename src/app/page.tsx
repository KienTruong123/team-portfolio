"use client";
import React, { useRef, useState } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { LiaLinkedin } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";

import { Section } from "@/components/sections/Section";
import { FaBell, FaCamera, FaCodepen, FaFlag, FaHome, FaQuestion, FaSave, FaTrashAlt } from "react-icons/fa";
import { sections } from "./data/sections";

const footerItems = [
  { href: "", icon: LiaLinkedin, name: "Linkedin" },
  { href: "", icon: BsGithub, name: "Github" },
];

const Page = () => {
  const observerRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <>
      <NavBar observerRefs={observerRefs} items={sections} />
      {sections.map((element, key) => {
        const Slot = element.render ?? "div";
        return (
          <Section
            ref={(el) => {
              observerRefs.current[key] = el;
            }}
            key={key}
            id={String(key)}
            style={{ backgroundColor: element.bgColor }}
            className={element.className}
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
