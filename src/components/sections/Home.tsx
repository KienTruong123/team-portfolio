import { FC } from "react";
import Image from "next/image";
import DoubleCircleArrowRight from "../icon/DoubleCircleArrowRight";

export const Home: FC = () => {
  return (
    <div className="h-[calc(100vh-60px)] md:px-32">
      <div className="flex flex-col-reverse gap-2 justify-around align-middle items-center rounded-full bg-slate-200 bg-opacity-70 md:h-full md:grid md:grid-cols-2">
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
            We&apos;re a passionate freelance team eager to share our expertise and collaborate on your project. We
            combine diverse skills to tackle challenges from every angle, acting as your strategic partners invested in
            your success. Let&apos;s leverage our combined strengths for a seamless workflow and exceptional results.
          </div>
          <div className="flex items-center">
            <DoubleCircleArrowRight className="animate-wiggle" />
            Hire now
          </div>
        </div>

        <Image
          src="/svg/undraw_programmer_re_owql.svg"
          width={500}
          height={350}
          alt="avatar"
          className="w-11/12 mx-auto mt-4 md:mt-0 md:w-full rounded-3xl"
        />
      </div>
    </div>
  );
};
