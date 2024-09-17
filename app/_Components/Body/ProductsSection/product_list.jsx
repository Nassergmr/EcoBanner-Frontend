import Image from "next/image";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import SkeletonCard from "../../Elements/skeleton_effect_products"; // Import the skeleton loader component

export default function Product_list({ product_data }) {
  const isLoading = !product_data || product_data.length === 0;

  return (
    <div
      id="product_list"
      className="sm:mt-[200px] mt-[150px] mb-[100px] px-8 lg:px-16 md:px-8 sm:px-6"
    >
      <h2 className="text-xl border-b-[1.5px] w-fit border-purple-500 mb-5 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Our Products
      </h2>
      <div
        id="cards_container"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10"
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : product_data.map((item) => {
              const productId = item.id;
              const productLink = `/Pages/product_details/${productId}`;
              return (
                <Link href={productLink} key={productId} className="">
                  <div
                    id="card"
                    className="cursor-pointer flex flex-col bg-gray-50 w-full sm:mx-0 mx-auto h-full rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-150 ease-in"
                  >
                    <div id="img_container" className="h-[40%] w-[100%] ">
                      <Image
                        className="rounded-t-lg"
                        src={item.attributes?.img?.data?.attributes?.url}
                        width={300}
                        height={250}
                        layout="responsive"
                        alt="img"
                      />
                    </div>
                    <div id="content" className="mt-auto pt-5 pb-2 px-2 ">
                      <h4>{item?.attributes?.title}</h4>
                      <div
                        id="category_price"
                        className="flex justify-between text-gray-500 text-sm font-medium "
                      >
                        <div id="category" className="flex items-center ">
                          <BiCategory className="mr-1" />
                          <p className="text-beseline">
                            {item?.attributes?.category}
                          </p>
                        </div>
                        <p className="text-base"> ${item?.attributes?.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
