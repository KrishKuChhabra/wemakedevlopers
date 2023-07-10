import Image from "next/image";
import mentor from "../../public/mentorship.jpg"
import {AiFillStar} from "react-icons/ai"
import { FC } from "react"


interface Props {
    
}
 
const MentorGuide : FC<Props> = () => {
    return (    
     <div className="bg-gradient-blur" style={{
        backgroundImage: "linear-gradient(to top left, #000000, #1c1c3b)",
      }}>
        <div className="flex flex-1 p-20 ">
            <Image className=" mr-10 " src={mentor} alt="mentorImage" width={700} height={100}  />
            <div className=" pl-8   ">
            <h2 className="text-5xl mt-9 ml-8 text-white font-extrabold">Mentorship</h2>

            <div className=" py-6 gap-2  flex flex-1  ">
            <AiFillStar className="bg-blue-600 mx-2 rounded-xl" fontSize={27} />
            <p className=" text-white font-bold text-lg">
            <span className=" text-blue-800">A complete solution to address all of your mentoring requirements</span> , including educational materials, communities to join, opportunities, and much more.
            </p>
            </div>

            <div className=" py-6 gap-2  flex flex-1  ">
            <AiFillStar className="bg-blue-600 mx-2 rounded-xl" fontSize={27} />
            <p className=" text-white font-bold text-lg">
            Roadmaps to guide you towards a successful career,<span className="text-blue-800"> including those for open-source, full-stack, devrel, and more.</span>
            </p>
            </div>
             
            <div className="bg-blue-500 relative w-max items-center rounded-full py-5 px-7  font-medium transition-all duration-75 hover:bg-blue-700 cursor-pointer">
            <span
              className="text-xl font-extrabold text-white"
            >
              Learn More
            </span>
          </div>
        </div>
    
     </div>
     </div>
      );
}
 
export default MentorGuide;