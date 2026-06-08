import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        w-12
        h-12
        rounded-full
        bg-violet-600
        hover:bg-violet-700
        flex
        items-center
        justify-center
      "
    >
      <FaArrowUp />
    </button>
  );
}