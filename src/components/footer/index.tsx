import Link from "next/link";
import React, { FC } from "react";
import { IconType } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export type FooterItem = {
  href: string;
  icon: IconType;
  name: string;
};

export interface FooterProps {
  items: FooterItem[];
}

const Footer: FC<FooterProps> = ({ items }) => {
  return (
    <footer className="m-auto h-30 md:h-60 flex flex-col gap-3 md:gap-8 items-center justify-between p-2 md:p-10">
      <h2 className="font-bold text-2xl md:text-5xl">Let&#39;s Talk</h2>
      <div className=" flex items-center justify-center gap-4 md:gap-8">
        {items.map((item, key) => (
          <FooterItem {...item} key={key} />
        ))}
      </div>
      <div className="text-xs md:text-base">
        | &copy; 2024 Copyright Kien Truong
        <a href="#"></a> |
      </div>
    </footer>
  );
};

const FooterItem: FC<FooterItem> = ({ href, name, icon }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className="box font-medium text-xs md:text-base text-white flex items-center justify-center flex-col cursor-pointer"
    >
      <Icon className="text-black text-3xl" />
      <p>{name}</p>
    </Link>
  );
};

export default Footer;
