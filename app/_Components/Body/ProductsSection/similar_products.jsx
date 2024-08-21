import Link from "next/link";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";

export default function Similar_products({ filter }) {
  return (
    <div
      id="similar_products"
      className=" mt-[80px]  lg:px-16 md:px-8 sm:px-6 px-5"
    >
      <h2 className="text-xl sm:ml-[15px] border-b-[1.5px] w-fit border-purple-500 mb-5 text-pretty bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Similar Products
      </h2>

      <div
        id="similars_container"
        className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-y-10"
      >
        {filter.map((item) => {
          const productId = item.id;
          const productLink = `/Pages/product_details/${productId}`;

          return (
            <Link href={productLink} key={productId} className="">
              <div
                id="card"
                className="cursor-pointer mx-auto flex flex-col bg-gray-50 sm:w-[90%] w-[70%] h-full rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-150 ease-in"
              >
                <div id="img_container" className="h-[40%] w-[100%] ">
                  <Image
                    className="rounded-t-lg"
                    src={item.attributes?.media?.data[0]?.attributes?.url}
                    width={150}
                    height={150}
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
