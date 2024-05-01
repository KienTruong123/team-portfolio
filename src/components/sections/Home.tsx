"use client";
import { FC, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { AnimationPlaybackControls, AnimationSequence, Segment, animate, motion, useScroll } from "framer-motion";
import useWindowDimensions from "@/libs/hooks/use-windown-demensions";
import { useIsClient } from "@/libs";
import DoubleCircleArrowRight from "../icon/DoubleCircleArrowRight";
import Image from "next/image";
import { FaFacebook, FaReact } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { CardLoading, Grid4Loading, GridLoading, TextLoading } from "../loading";
import { BiHeadphone } from "react-icons/bi";

export const Home: FC<{ parentRef?: any }> = () => {
  const { width } = useWindowDimensions();
  const isClient = useIsClient();
  const panelCardRefs = useRef<(HTMLElement | null)[]>([]);
  const avatarRefs = useRef<(HTMLElement | null)[]>([]);
  const detailRefs = useRef<(HTMLElement | null)[]>([]);
  const motionRefs = useRef<(HTMLElement | null)[]>([]);
  const homeRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const animationControls = useRef<AnimationPlaybackControls>();

  const initals = useMemo(
    () => [
      {
        x: -width * 0.5,
        y: -5,
        r: -3,
        h: 140,
        w: width * 0.5,
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: GridLoading,
        },
      },
      {
        x: width * 0.5,
        y: -10,
        r: 15,
        h: 200,
        w: width * 0.3,
        card: {
          icon: FaReact,
          color: "#f47d31",
          loading: "div",
        },
      },
      {
        x: -width * 0.5,
        y: -50,
        r: 6,
        h: 300,
        w: width * 0.35,
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: CardLoading,
        },
      },
      {
        x: width * 0.55,
        y: -50,
        r: -5,
        h: 400,
        w: width * 0.45,
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: GridLoading,
        },
      },
      {
        x: -width * 0.45,
        y: -40,
        r: 70,
        h: 400,
        w: width * 0.2,
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: Loading4,
        },
      },
      {
        x: width * 0.5,
        y: -50,
        r: 10,
        h: 160,
        w: width * 0.55,
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: GridLoading,
        },
      },
    ],
    [width]
  );

  useLayoutEffect(() => {
    if (isClient) {
      const sequence = initals.flatMap((item, key) => {
        const panelCardRef = panelCardRefs.current[key];
        const avatarRef = avatarRefs.current[key];
        const detailRef = detailRefs.current[key];
        const motionRef = motionRefs.current[key];
        return [
          [
            panelCardRef,
            { rotate: 0, x: 0, y: `${10 * key}%`, height: "100%", width: width * 0.4 },
            { ease: "linear", at: 0, duration: 0.5 },
          ],
          [detailRef, { y: 0 }, { ease: "linear", at: 1, duration: 0.5 }],
          [avatarRef, { opacity: 1 }, { ease: "linear", at: 1, duration: 0.5 }],
          [motionRef, { rotateY: 180 }, { ease: "linear", at: 1, duration: 0.5 }],
        ] as Segment[];
      });

      if (panelRef.current) {
        sequence.push([
          panelRef.current,
          {
            boxShadow: `0 32px 32px rgba(23,22,24,.04),0 16px 16px rgba(23,22,24,.04),0 8px 8px rgba(23,22,24,.04)`,
            borderRadius: 18,
            border: 2,
            backgroundColor: "#f8f8fc",
          },
          { at: 2 },
        ]);
      }

      animationControls.current = animate(sequence);
      animationControls.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  const { scrollYProgress } = useScroll({ container: homeRef });

  scrollYProgress.on("change", (yProgress) => {
    if (!animationControls.current) return;
    animationControls.current.time = yProgress * animationControls.current.duration;
  });

  return (
    <div className="h-screen overflow-y-scroll hidden-scrollbar relative" ref={homeRef}>
      <div className="relative z-20">
        <div className="min-h-screen absolute grid items-center top-0 left-0 right-0 pointer-events-none z-3">
          <div className="screen-content">
            <h1>
              Build your dreams
              <br />
              <span className="text-primary-600">now</span>
            </h1>
            <p>We are NoobTeam.</p>
            <div className="flex items-center">
              <DoubleCircleArrowRight className="animate-wiggle" />
              Hire now
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 pointer-events-none z-10">
        <div className="screen-content">
          <motion.div className="panel" ref={panelRef}>
            {initals.map((item, key) => {
              const { card } = item;
              const Icon = card.icon;
              const Loading = card.loading;
              return (
                <div className="container-size flex justify-center" key={key}>
                  <motion.div
                    className="flex items-start bg-gray-50 shadow-lg rounded-lg overflow-hidden"
                    style={{
                      x: item.x,
                      y: `${item.y}%`,
                      height: `${item.h}%`,
                      rotate: item.r,
                      width: item.w,
                    }}
                    ref={(el) => {
                      panelCardRefs.current[key] = el;
                    }}
                  >
                    <div className="box-cols w-full h-full">
                      <div className="box-avatar shadow">
                        <motion.img
                          src="/avatar/KienTruong.jpeg"
                          alt=""
                          ref={(el) => {
                            avatarRefs.current[key] = el;
                          }}
                          style={{ opacity: 0 }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <motion.div
                        ref={(el) => {
                          detailRefs.current[key] = el;
                        }}
                        style={{ y: -50 }}
                        className="box-infos"
                      >
                        <TextLoading />
                        <div className="image">
                          <Icon />
                        </div>
                        <TextLoading />
                        <div className="box-loading">
                          <Loading />
                        </div>
                      </motion.div>
                    </div>
                    <div className="box-cols self-end">
                      <div className="flip-card pointer-events-auto">
                        <motion.div
                          ref={(el) => {
                            motionRefs.current[key] = el;
                          }}
                          className="flip-card-inner"
                        >
                          <div className="flip-card-front">
                            <MdOutlineAddReaction />
                          </div>
                          <div className="flip-card-back">
                            <BiHeadphone />
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="ring--wrapper">
        <Image src="/portal-ring.png" alt="ring" width={500} height={100} />
      </div>
      <div className="ring--wrapper z-10">
        <Image className="clip-path-50" src="/portal-ring.png" alt="ring" width={500} height={100} />
      </div>
      <div className="h-[150vh]" />
    </div>
  );
};

const Loading4 = () => (
  <>
    <GridLoading />
    <Grid4Loading className="w-3/5" />
  </>
);
