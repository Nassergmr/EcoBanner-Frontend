// components/SkeletonCard.js
export default function SkeletonCard() {
  return (
    <div className="cursor-pointer flex flex-col bg-gray-50 sm:w-full sm:mx-0 w-[90%] h-[250px] mx-auto md:h-[245px] lg:h-[230px] rounded-lg shadow-md animate-pulse">
      <div id="img_container" className="h-[60%] w-[100%] bg-gray-200"></div>
      <div id="content" className="mt-auto pt-5 pb-2 px-2">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}
