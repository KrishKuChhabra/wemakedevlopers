import Image from "next/image";
import { FC } from "react";
import banner from "../../public/coursebanner.jpg";
import { AiFillStar } from "react-icons/ai";
import { Prompt } from "next/font/google";
import IndustryLogo from "./CourseImage/Couurseimage";
import { TestimonialUser } from "./Numbers/NumberItem";
import { testimonialData } from "./Numbers/ListTypeItem";

const prompt = Prompt({
  subsets: ["latin"],
  weight: "700",
});
interface Props {}

const Cours: FC<Props> = () => {
  return (
    <div   className="bg-gradient-blur "
    style={{
      backgroundImage: "linear-gradient(to top left, #000000, #141425)",
    }}>
      <div className=" p-10 flex flex-1 justify-between  ">
        <div className="px-2 ">
          <h2 className="text-5xl text-white font-bold">Courses</h2>
          <div className=" py-12 gap-2  flex flex-1  ">
            <AiFillStar className="bg-blue-600 mx-2 rounded-xl" fontSize={27} />
            <p className=" text-white font-bold text-lg">
              All courses are FREE while never compromising on quality.
            </p>
          </div>

          <div className=" py-6 gap-2  flex flex-1  ">
            <AiFillStar className="bg-blue-600 mx-2 rounded-xl" fontSize={27} />
            <p className=" text-white font-bold text-lg">
              We cover every topic in detail with a hands-on approach and mentor
              you to stand out to get opportunities by breaking all the
              barriers.
            </p>
          </div>

          <div className=" py-6 gap-2  flex flex-1  ">
            <AiFillStar className="bg-blue-600 mx-2 rounded-xl" fontSize={27} />
            <p className=" text-white font-bold text-lg">
              Explore a wide range of courses including Data Structures &
              Algorithms, Web Development, DevOps, Machine Learning, and more!
            </p>
          </div>
          <h1 className=" text-white text-6xl font-extrabold pb-7">$0/month</h1>
          <div className="bg-blue-500 relative w-max items-center rounded-full py-5 px-7  font-medium transition-all duration-75 hover:bg-blue-700 cursor-pointer">
            <span
              className={`${prompt.className} text-xl font-extrabold text-white`}
            >
              Explore Courses
            </span>
          </div>
        </div>
        <Image src={banner} width={755} height={755} alt="banner" />
      </div>
      <div className="flex p-12 flex-1 justify-center items-center">
        <h2 className=" mt-2 text-6xl text-white text-center ">
          Our Students Work at
        </h2>
      </div>

      {/*this is the image logo of all it Sector */}
      <IndustryLogo />
      {/*this is the review of pople like we called testimonoal */}
      <h2 className="text-white  p-16 font-extrabold text-6xl ml-3">
        Testimonial
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center p-9 ">
        {TestimonialUser.map((items: testimonialData) => (
          <div
            key={items.id}
            className=" bg-slate-500 rounded-3xl flex flex-1 items-center p-2  mb-9 ml-8 justify-center w-96 h-96"
          >
            <div className="flex flex-1 flex-col  items-center text-center">
              <Image
                className="rounded-full mt-2 p-2"
                src={items.image}
                alt="users" 
                width={200}
                height={100}
              />
              <p className="mt-2 text-lg text-white font-semibold">
                {items.description}
              </p>
              <h2 className="text-2xl text-black mt-2 font-extrabold">
                {items.name}
              </h2>
              <h2 className="mt-2 font-extrabold ">{items.userName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cours;
