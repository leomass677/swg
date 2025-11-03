import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineChevronRight } from "react-icons/hi";

const WorkWithYouLink = ({
  href = "/",
  label = "Let's work with you",
  bgColor = "bg-blue-400",
  hoverColor = "group-hover:bg-crayola-400",
  onclick,
}) => {
  return (
    <a
      onclick={onclick}
      className="flex relative items-center group max-w-fit"
      href={href}
    >
      <span
        className={`relative size-10 rounded-full before:content-[''] before:bottom-0 before:right-0 before:absolute before:w-5 before:h-5 before:rounded-tl-xl before:skew-3 scale-60 transition-all ease-in duration-300 ${bgColor} ${hoverColor} before:bg-crayola-400 before:group-hover:${hoverColor}`}
      ></span>
      <TfiLayoutLineSolid className="-translate-x-4" />
      <HiOutlineChevronRight className="-translate-x-5 group-hover:translate-x-1 group-hover:scale-0 group-hover:opacity-0 group-hover transition-all duration-300 ease-in-out" />
      <span className="-translate-x-4 group-hover:-translate-x-7 ease-in-out group-hover:scale-101 transition-all duration-500">
        {label}
      </span>
      <HiOutlineChevronRight className="-translate-x-10 opacity-0 scale-0 group-hover:translate-x-1 group-hover:scale-105 group-hover:opacity-100 group-hover transition-all duration-500 ease-in-out" />
    </a>
  );
};

export default WorkWithYouLink;
