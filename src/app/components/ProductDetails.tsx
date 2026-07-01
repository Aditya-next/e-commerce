import Image from "next/image";

export type ratingType = {
  rate: number;
  count: number;
};

export interface productsTypes {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: ratingType;
  image: string;
}

export default function ProductDetail({ details }: { details: productsTypes }) {
  return (
    <div className="p-4 md:px-8 lg:px-16 2xl:px-20] mt-[70px]">
      <div className="border border-gray-200 rounded p-4  min-h-screen">
        <div className="flex gap-5 flex-col md:flex-row items-center">
          <div className="lg:max-h-[500px] max-w-[400px] lg:sticky lg:top-[100px] ">
            <Image
              src={details.image}
              alt=""
              className="object-center object-contain"
              height={500}
              width={500}
            />
          </div>

          <div className="md:px-5 px-0 ">
            <h1 className="text-[20px] lg:text-4xl text-black font-bold py-2">
              {details.title}
            </h1>
            <p className="text-red-500 py-1 font-semibold">
              {details.category}
            </p>
            <hr className="bg-gray-300 text-gray-400 " />

            <p className="  text-sm md:text-[16px] lg:text-[18px] font-semibold mt-5">
              &#8377; {details.price}
            </p>
            <hr className="bg-gray-300 text-gray-400 px-4 mt-5" />
            <p className="text-[16px] lg:text-[18px] text-gray-600 mt-5">
              {details.description}
            </p>

            <div className="">
              <button className="px-4 py-1 rounded-full font-[500] bg-yellow-300 mt-5 cursor-pointer">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
