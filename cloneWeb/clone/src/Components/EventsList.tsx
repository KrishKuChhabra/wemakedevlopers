import { FC } from "react"
import {AiFillStar} from "react-icons/ai"
import Image from "next/image"
import event from "../../public/event.jpg"
import { EventsWinner } from "./Numbers/ListTypeItem"
import { Winner } from "./Numbers/NumberItem"
interface Props {
    
}
 
const Eventss : FC<Props> = () => {
    return ( 
        <div className="bg-gradient-blur" style={{
            backgroundImage: "linear-gradient(to top right, #000000, #1c1c3b)",
          }}>
            <div className="flex flex-1 p-20 ">
                <div className=" pl-8   ">
                <h2 className="text-5xl mt-12 ml-8 text-white font-extrabold">Events</h2>
    
                <div className=" py-6 gap-2  flex flex-1  ">
                <AiFillStar  className="bg-blue-600 mx-2 rounded-xl mt-4" fontSize={27} />
                <p className=" text-white font-bold text-xl px-2 mt-4">
                All of our events are completely free and open for everyone. Fun-filled events with no compromise on quality.
                </p>
                </div>
    
                <div className=" py-6 gap-2  flex flex-1  ">
                <AiFillStar className="bg-blue-600 mx-3 rounded-xl" fontSize={27} />
                <p className=" text-white  font-bold text-xl px-2">
                Events conducted will help develop various skills of students in co-curricular activities and to expose them to the current trends in the technical and professional fields.
                </p>
                </div>
                <div className=" py-6 gap-2  flex flex-1  ">
                <AiFillStar className="bg-blue-600 mx-3 rounded-xl" fontSize={27} />
                <p className=" text-white  font-bold text-xl px-2">
                Explore the plethora of events & have the opportunity to grab amazing prizes & goodies!.
                </p>
                </div>
                 
                <div className="bg-blue-500 relative w-max items-center rounded-full py-5 px-7  font-medium transition-all duration-75 hover:bg-blue-700 cursor-pointer">
                <span
                  className="text-xl font-extrabold text-white"
                >
                   Ongoing Events
                </span>
              </div>
            </div>
            <Image className=" mr-10 " src={event} alt="mentorImage" width={700} height={200}  />
         </div>
            <div className=" flex flex-1 justify-center items-center">
                 <h2 className="text-white text-6xl">Our Events Winner</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-20">
  {Winner.map((items) => (
       <div key={items.id} className="border-2 border-indigo-500 inline-block rounded-lg">
       <div className="flex items-center justify-center ">
         <Image src={items.image} alt="winners" width={700} height={100} /> 
       </div>
     </div>
  ))}
</div>
         </div>
     );
}
 
export default Eventss ;