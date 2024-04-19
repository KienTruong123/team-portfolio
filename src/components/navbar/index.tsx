"use client";
import { cn, useDebounce } from "@/libs";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";

export interface NavBarProps {
  items: { id: number; name: string }[];
  observerRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const NavBar: FC<NavBarProps> = ({ observerRefs, items = [] }) => {
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef<IntersectionObserver[]>([]);

  const setActiveIndex = useDebounce((key: number) => {
    setVisibleKey(key);
  }, 100);

  const observerCallback = async (e: IntersectionObserverEntry[], key: number) => {
    if (e.length && e[0].isIntersecting) {
      setActiveIndex(key);
    }
  };

  useEffect(() => {
    const currObserver = observers.current;
    if (observerRefs.current?.length && currObserver) {
      items.forEach((_u, key) => {
        const ref = observerRefs.current[key];
        if (ref) {
          currObserver[key] = new IntersectionObserver((e) => observerCallback(e, key), {
            rootMargin: "0px 0px -80% 0px",
          });
          currObserver[key].observe(ref);
        }
      });
    }
    return () => currObserver?.forEach((observer) => observer?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observerRefs]);

  return (
    <nav className="container flex items-center justify-between sticky top-5 bg-pr m-10 mt-5">
      <div className="logo">
        <Link href="/" className="text-3xl font-bold sm:text-3xl">
          KT
        </Link>
      </div>
      <ul className="flex items-center bg-white p-1 rounded-full">
        {items.map((item, key) => {
          return (
            <Link href={`#${item.id}`} key={`item-${key}`} scroll>
              <li
                className={cn(
                  visibleKey == key && "bg-primary-200 text-primary-800",
                  "px-5 py-2 rounded-full cursor-pointer"
                )}
                onClick={() => {
                  setTimeout(() => setActiveIndex(key), 100);
                }}
              >
                <span className="capitalize font-extralight">{item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <span />
    </nav>
  );
};

export default NavBar;
