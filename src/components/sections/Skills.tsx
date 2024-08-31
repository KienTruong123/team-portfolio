import { FC } from "react";
import Image from "next/image";
import DoubleCircleArrowRight from "../icon/DoubleCircleArrowRight";

const Skills = () => {
  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-col-reverse gap-2 justify-around align-middle items-center rounded-full md:h-full md:grid md:grid-cols-2">
        <div className="text-center px-8 md:flex md:flex-col md:gap-10 md:justify-center md:items-center ">
          <div className="md:px-40">
            <h3 className="uppercase text-2xl md:text-[40px]">Welcome aboard</h3>
            <div className="flex">
              <div className="bg-white pe-5 bg-opacity-25 rounded-full">
                <div className="bg-white pe-5 bg-opacity-50 rounded-full">
                  <h3 className="bg-white pe-5 rounded-full uppercase md:text-6xl md:font-semibold">NoobTeam</h3>
                </div>
              </div>
            </div>
            We&apos;re a passionate freelance team eager to share our expertise and collaborate on your project.
            Let&apos;s leverage our combined strengths for a seamless workflow and exceptional results.
          </div>
          <div className="flex items-center">
            <DoubleCircleArrowRight className="animate-wiggle" />
            Hire now
          </div>
        </div>
        <div className="relative full min-h-96">
          <Image src="/svg/undraw_programmer_re_owql.svg" alt="avatar" className="h-full rounded-3xl" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
