import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { cn, generateRandomColor } from "@/libs";

interface MenuProps {
  open: boolean;
  items: MenuItem[];
}

interface MenuItem {
  icon: any;
  color: string;
  borderColor: string;
}

const Menu: React.FC<MenuProps> = ({ open, items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className={styles.wheel}>
      {items.map((item, key) => {
        const color = generateRandomColor((key+1) << 4) || item.color;
        console.log(color);
        const MenuItem = item.icon;
        const active = activeIndex == key;
        const rotate = key * 45 + "deg";
        const style: React.CSSProperties = {
          backgroundImage: `radial-gradient(
        circle at left bottom,
        transparent,
        transparent 39.5%,
        ${item.borderColor} 40%,
        ${item.borderColor} 40.5%,
        ${color} 41%,
        ${color} 60%,
        ${item.borderColor} 60.25%,
        ${item.borderColor} 61.5%,
        transparent 61.75%,
        transparent
      )`,
          rotate,
        };

        return (
          <menu
            key={key}
            onMouseEnter={() => setActiveIndex(key)}
            onMouseLeave={() => setActiveIndex(-1)}
            className={cn(styles.arc, open && styles.show, active && open && styles.active)}
            style={style}
          >
            <MenuItem color={active ? "#000" : "#fff"} className={styles.content} style={{ rotate: "-" + rotate }} />
          </menu>
        );
      })}
    </div>
  );
};

export default Menu;
