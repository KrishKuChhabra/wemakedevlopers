import Image from "next/image";
import { FC } from "react";
import banner from "../../public/aboutbanner.jpg";
import { AiFillStar } from "react-icons/ai";
import {PiUsersThreeFill} from "react-icons/pi"
import { ListItem } from "./Numbers/ListTypeItem";
import { data } from "./Numbers/NumberItem";
import { Domine } from 'next/font/google';
import Link from "next/link";
const domine = Domine({
  subsets: ['latin'],
  weight: '700',
});

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className=" bg-blue-900 relative">
      <div
        className="bg-gradient-blur"
        style={{
          backgroundImage: "linear-gradient(to top left, #0f2237, #100f0f)",
        }}
      >
        <div className=" flex flex-1 p-8 mx-6">
          <Image src={banner} alt="banner" width={800} height={600} />
          <div className="mx-9 py-4">
            <h1 className="text-5xl font-extrabold text-white">About Us </h1>
            <div className="py-8">
              <div className=" gap-2  flex flex-1  ">
                <AiFillStar fontSize={27} />
                <p className=" text-white font-bold text-lg">
                  We believe that everyone, irrespective of their college or
                  branch, <br /> technical or non-technical background can make
                  it big. WeMakeDevs <br /> is an initiative built on this
                  thought.
                </p>
              </div>
              <div className=" py-3 gap-2 flex flex-1  ">
                <AiFillStar fontSize={27} />
                <p className=" text-white font-bold text-lg">
                  We provide hands-on training, mentorship for FREE and have an
                  inclusive community.
                </p>
              </div>
              <div className="  py-3  gap-2  flex flex-1  ">
                <AiFillStar fontSize={27} />
                <p className=" text-white font-bold text-lg">
                  Get expert guidance with career, Open Source, and internships,
                  jobs around the world.
                </p>
              </div>
              <div className="  py-3  gap-2  flex flex-1  ">
                <AiFillStar fontSize={27} />
                <p className=" text-white font-bold text-lg">
                  We are also having various events weekly or monthly. Do
                  participate in those events to make your skills enhance.
                </p>
              </div>
              <div className=" text-white font-bold  flex justify-center items-center gap-4">

                <Link href="/Courses">
                <span className="  p-3 m-3  rounded-lg text-xl   bg-blue-500 hover:bg-blue-700 cursor-pointer ">
                  Courses
                </span>
                </Link>

                <Link href="/Mentor">
                <span className=" p-3 m-3 rounded-lg text-xl  bg-blue-500 hover:bg-blue-700 cursor-pointer ">
                  Mentorship
                </span>
                </Link>

                <Link href="/Event">
                <span className=" p-3 m-3  rounded-lg text-xl  bg-blue-500 hover:bg-blue-700 cursor-pointer ">
                  Events
                </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-9 ">
             <h2 className={`${domine.className} text-5xl text-white px-20`}>Number says it all</h2> 
             <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center  p-9 m-9 ">    
             {
               data.map((items:ListItem)=>(
                <div key={items.id} className=" bg-blue-950 flex flex-1 justify-center items-center w-80 h-72 rounded-lg">
                    <PiUsersThreeFill className=" border-2 bg-blue-500 rounded-full" size={50}/>
                    <div className=" items-center mt-4">
                    <h3 className="text-white font-bold text-4xl px-5">{items.people}</h3>
                    <p className= {`${domine.className} text-white text-lg px-5 `} >{items.listPeople}</p>
                  </div>
                </div>
               ))
             }
              </div>
        </div>
      </div>
    </div>
  );
};

export default About;
