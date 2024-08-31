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
  const [showing, setShowing] = useState(true);
  // const menuItems = [
  //   { icon: FaHome, color: "hsl(0deg, 36%, 60%)", borderColor: "hsl(0deg, 36%, 40%)" },
  //   { icon: FaQuestion, color: "hsl(45deg, 36%, 60%)", borderColor: "hsl(45deg, 36%, 40%)" },
  //   { icon: FaBell, color: "hsl(90deg, 36%, 60%)", borderColor: "hsl(90deg, 36%, 40%)" },
  //   { icon: FaCamera, color: "hsl(0deg, 36%, 60%)", borderColor: "hsl(0deg, 36%, 40%)" },
  //   { icon: FaTrashAlt, color: "hsl(45deg, 36%, 60%)", borderColor: "hsl(45deg, 36%, 40%)" },
  //   { icon: FaSave, color: "hsl(90deg, 36%, 60%)", borderColor: "hsl(90deg, 36%, 40%)" },
  //   { icon: FaFlag, color: "hsl(45deg, 36%, 60%)", borderColor: "hsl(45deg, 36%, 40%)" },
  //   { icon: FaCodepen, color: "hsl(0deg, 36%, 60%)", borderColor: "hsl(0deg, 36%, 40%)" },
  // ];
  // return  <Menu open={showing} items={menuItems}/>
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
