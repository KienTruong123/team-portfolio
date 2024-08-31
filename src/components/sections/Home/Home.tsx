"use client";
import styles from "./Home.module.css";
import Image from "next/image";
import { FC, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  AnimationPlaybackControls,
  AnimationSequence,
  LayoutGroup,
  Segment,
  animate,
  motion,
  useScroll,
} from "framer-motion";
import useWindowDimensions from "@/libs/hooks/use-windown-demensions";
import { cn, minmax, useIsClient } from "@/libs";
import DoubleCircleArrowRight from "../../icon/DoubleCircleArrowRight";
import { FaFacebook, FaReact } from "react-icons/fa";
import { MdOutlineAddReaction } from "react-icons/md";
import { CardLoading, Grid4Loading, GridLoading, TextLoading } from "../../loading";
import { FcLike } from "react-icons/fc";
import { Typer } from "@/components/text/Typer";

export const Home: FC<{ parentRef?: any }> = () => {
  const { width } = useWindowDimensions();
  const isClient = useIsClient();
  const panelCardRefs = useRef<(HTMLElement | null)[]>([]);
  const avatarRefs = useRef<(HTMLElement | null)[]>([]);
  const detailRefs = useRef<(HTMLElement | null)[]>([]);
  const motionRefs = useRef<(HTMLElement | null)[]>([]);
  const homeRef = useRef<HTMLDivElement>(null);
  const homeBottomRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const animationControls = useRef<AnimationPlaybackControls>();
  const [frame, setFrame] = useState(1);
  const initals = useMemo(() => {
    const x = width == 0 ? 1500 : Math.max(300, width * 0.5);
    return [
      {
        x: -x,
        y: -5,
        r: -3,
        h: 140,
        w: minmax(x, 200, 500),
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: GridLoading,
        },
      },
      {
        x,
        y: -10,
        r: 15,
        h: 200,
        w: minmax(width * 0.3, 150, 300),
        card: {
          icon: FaReact,
          color: "#f47d31",
          loading: "div",
        },
      },
      {
        x: -x,
        y: -50,
        r: 6,
        h: 300,
        w: minmax(width * 0.35, 180, 400),
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: CardLoading,
        },
      },
      {
        x,
        y: -50,
        r: -5,
        h: 400,
        w: minmax(width * 0.45, 190, 450),
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: GridLoading,
        },
      },
      {
        x: -x,
        y: -40,
        r: 70,
        h: 400,
        w: minmax(width * 0.2, 150, 300),
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: Loading4,
        },
      },
      {
        x,
        y: -50,
        r: 10,
        h: 160,
        w: minmax(x, 200, 500),
        card: {
          icon: FaFacebook,
          color: "#f47d31",
          loading: GridLoading,
        },
      },
    ];
  }, [width]);

  useLayoutEffect(() => {
    if (isClient) {
      const sequence = initals.flatMap((_, key) => {
        const panelCardRef = panelCardRefs.current[key];
        const avatarRef = avatarRefs.current[key];
        const detailRef = detailRefs.current[key];
        const motionRef = motionRefs.current[key];

        const timeLineSecond = 1 + (initals.length - key) * 0.25;
        return [
          // [
          //   panelCardRef,
          //   { rotate: 0, x: 0, y: `${10 * key - 30}%`, width: Math.max(350, width * 0.4),  height: "100%" },
          //   { ease: "linear", at: 0, duration: 1 },
          // ],
          [panelCardRef, { rotate: 0, x: 0, y: `${10 * key - 30}%` }, { ease: "linear", at: 0, duration: 1 }],
          [
            panelCardRef,
            { height: "100%", width: Math.max(350, width * 0.4) },
            { ease: "linear", at: timeLineSecond, duration: 0.5 },
          ],
          // [detailRef, { y: 0 }, { ease: "linear", at: timeLineSecond, duration: 0.5 }],
          // [avatarRef, { opacity: 1 }, { ease: "linear", at: timeLineSecond, duration: 0.5 }],
          // [motionRef, { rotateY: 180 }, { ease: "linear", at: timeLineSecond, duration: 0.5 }],
        ] as Segment[];
      });

      if (panelRef.current && homeBottomRef.current) {
        sequence.push([
          homeBottomRef.current,
          {
            opacity: 1,
          },
          { at: 2.5 },
        ]);
      }

      animationControls.current = animate(sequence);
      animationControls.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  const { scrollYProgress } = useScroll({ container: homeRef });

  scrollYProgress.on("change", (yProgress) => {
    requestAnimationFrame(() => {
      if (animationControls.current)
        animationControls.current.time = minmax(yProgress, 0, 1) * animationControls.current.duration;
    });
  });

  return (
    <div
      className="h-screen overflow-y-scroll hidden-scrollbar relative introduce w-screen overflow-x-hidden"
      ref={homeRef}
    >
      <div className="relative z-20">
        <div className="min-h-screen absolute grid items-center top-0 left-0 right-0 pointer-events-none z-3 ">
          <div className={styles.screenContent}>
            <h1>
              Build your dreams
              <br />
              <span className="text-primary-600">now</span>
            </h1>
            <div className="flex items-center">
              <DoubleCircleArrowRight className="animate-wiggle" />
              <h5>Hire we</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 pointer-events-none z-10">
        <div className={styles.screenContent}>
          <motion.div className={styles.panel} ref={panelRef}>
            {initals.map((item, key) => {
              const { card } = item;
              const Icon = card.icon;
              const Loading = card.loading;
              return (
                <div className={styles.itemCard} key={key}>
                  <motion.div
                    className="flex items-start bg-gray-50 shadow-2xl rounded-lg overflow-hidden border"
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
                    <div className={cn(styles.boxCols, "full")}>
                      <div className={cn(styles.boxAvatar, "shadow")}>
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
                        className={styles.boxInfos}
                      >
                        <TextLoading />
                        <div className={styles.imageHolder}>
                          <Icon />
                        </div>
                        <TextLoading />
                        <div className={styles.boxLoading}>
                          <Loading />
                        </div>
                      </motion.div>
                    </div>
                    <div className={cn(styles.boxCols, "self-end")}>
                      <div className={styles.flipCard}>
                        <motion.div
                          ref={(el) => {
                            motionRefs.current[key] = el;
                          }}
                          className={styles.flipCardContent}
                        >
                          <div className={styles.flipCardFront}>
                            <MdOutlineAddReaction />
                          </div>
                          <div className={styles.flipCardBack}>
                            <FcLike />
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
      <div className={styles.ringWrapperBack}>
        <Image src="/portal-ring.png" alt="ring" width={500} height={100} />
      </div>
      <div className={styles.ringWrapperFront}>
        <Image className="clip-path-50" src="/portal-ring.png" alt="ring" width={500} height={100} />
      </div>
      <motion.div className={styles.dream} ref={homeBottomRef} initial={{ opacity: 0 }} />
    </div>
  );
};

const Loading4 = () => (
  <>
    {/* <GridLoading /> */}
    <Grid4Loading className="w-3/5" />
  </>
);
