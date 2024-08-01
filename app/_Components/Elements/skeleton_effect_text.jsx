import { BiCategory } from "react-icons/bi";

export default function Skeleton_effect_text() {
  return (
    <div
      id="skeleton_text"
      className="animate-pulse lg:w-[50%] sm:mx-0 text-left w-full flex flex-col gap-y-8"
    >
      <div id="title" className="h-8 w-3/4 bg-gray-300 animate-pulse"></div>
      <div id="category" className="flex items-center">
        <BiCategory className="text-gray-400" />
        <div className="h-4 w-1/4 bg-gray-300 animate-pulse ml-1"></div>
      </div>
      <div
        id="description"
        className="h-6 w-full bg-gray-300 animate-pulse"
      ></div>
      <div id="price" className="h-6 w-1/3 bg-gray-300 animate-pulse"></div>
      <div className="w-1/3 h-10 bg-gray-300 animate-pulse mt-2"></div>
    </div>
  );
}
