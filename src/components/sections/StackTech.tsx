import { cn } from "@/libs";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";

export const StackTech: FC = () => {
  return (
    <>
      <section className="min-h-screen  text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center gap-2">
          what we are offering <FaArrowRight color="primary" />
        </span>
        <h2 className="text-white leading-normal">Unlock Your Business Potential</h2>
        <div className="text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {items.map(({ title, content, className, img }, key) => {
            const { className: cardClass, ...style } = variants[key % 4];
            return (
              <div
                className={cn(
                  "before:content-[' '] before:bg-primary-600 before:w-full before:h-full before:absolute before:z-0 before:duration-700 bg-gray-800 p-10 relative hover:before:[clip-path:circle(100vw_at_100%_100%)] hover:shadow-xl",
                  cardClass
                )}
                key={key}
              >
                <motion.div
                  className={cn("full absolute circle")}
                  style={{ ...style, background: ` url("${img}") no-repeat 50% 50% / cover` }}
                />
                <div className={cn("relative", className)}>
                  <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">{title}</h2>
                  <p className=" text-gray-400 hover:text-white duration-700">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const items = [
  {
    img: "/creative.jpg",
    className: "lg:pr-52",
    title: (
      <>
        Creative <br /> UI Design
      </>
    ),
    content: `Create a website that not only looks stunning but also keeps your visitors engaged with interactive elements that encourage exploration and discovery.`,
  },
  {
    img: "/story.jpeg",
    className: "lg:pl-48",
    title: (
      <>
        Tell <br /> Your Story
      </>
    ),
    content: `Your brand story is more than just words on a page. It's a powerful tool that can connect with your customers on an emotional level, build trust, and inspire them to take action. `,
  },
  {
    img: "/save.jpeg",
    className: "lg:pr-44",
    title: (
      <>
        Save
        <br />
        Time & Money
      </>
    ),
    content: `Our service can help you identify areas where you can save and reallocate those funds towards things that matter most to you. Think of it as getting more value for every dollar you spend.`,
  },
  {
    img: "/team.webp",
    className: "pl-48",
    title: (
      <>
        Growth
        <br /> Together
      </>
    ),
    content: `Share knowledge, resources, and a commitment to continuous improvement. All reach our full potential and achieve remarkable things.`,
  },
];

const variants = [
  {
    className: "before:bottom-0 before:right-0 before:[clip-path:circle(calc(6.25rem+7.25vw)_at_100%_100%)]",
    bottom: 0,
    right: 0,
    clipPath: "circle(calc(6.25rem + 7.5vw) at 100% 100%)",
  },
  {
    className: "before:bottom-0 before:left-0 before:[clip-path:circle(calc(6.25rem+7.25vw)_at_0%_100%)]",
    bottom: 0,
    left: 0,
    clipPath: "circle(calc(6.25rem + 7.5vw) at 0% 100%)",
  },
  {
    className: "before:top-0 before:right-0 before:[clip-path:circle(calc(6.25rem+7.25vw)_at_100%_0%)]",
    top: 0,
    right: 0,
    clipPath: "circle(calc(6.25rem + 7.5vw) at 100% 0%)",
  },
  {
    className: "before:top-0 before:left-0 before:[clip-path:circle(calc(6.25rem+7.25vw)_at_0%_0%)]",
    top: 0,
    left: 0,
    clipPath: "circle(calc(6.25rem + 7.5vw) at 0% 0%)",
  },
];
