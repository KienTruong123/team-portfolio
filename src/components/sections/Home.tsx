import { FC } from "react";
import Image from "next/image";
import DoubleCircleArrowRight from "../icon/DoubleCircleArrowRight";

const Home: FC = () => {
  return (
    <div className=" h-[calc(100vh-60px)]">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-around h-full align-middle items-center">
        <div className="md:flex md:flex-col md:gap-10 md:justify-center md:items-center ">
          <div className="md:px-40">
            <h3 className="uppercase md:text-[40px]">Welcome aboard</h3>
            <div className="flex">
              <div className="bg-white pe-5 bg-opacity-25 rounded-full">
                <div className="bg-white pe-5 bg-opacity-50 rounded-full">
                  <h3 className="bg-white pe-5 rounded-full uppercase md:text-6xl md:font-semibold">NoobTeam</h3>
                </div>
              </div>
            </div>
            We&apos;re thrilled to have you here and eager to share our knowledge and expertise. Let&apos;s work
            together to learn and grow.
          </div>
          <div className="flex items-center">
            <DoubleCircleArrowRight />
            Hire now
          </div>
        </div>

        <Image
          src="/svg/undraw_programmer_re_owql.svg"
          width={500}
          height={350}
          alt="avatar"
          className="w-11/12 md:w-3/4 mx-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Home;
