import { StackTech, Home } from "@/components/sections";

export const sections = [
  {
    id: 0,
    name: "home",
    bgColor: "lightpurple",
    render: Home,
    className: "relative w-full overflow-x-hidden hidden-scrollbar",
  },
  {
    id: 1,
    name: "skills",
    className: "bg-gray-900",
    render: StackTech,
  },
  {
    id: 2,
    name: "works",
    bgColor: "skyblue",
  },
  {
    id: 3,
    name: "resume",
    bgColor: "lightgreen",
  },
  {
    id: 4,
    name: "contact",
    bgColor: "lightsalmon",
  },
];
