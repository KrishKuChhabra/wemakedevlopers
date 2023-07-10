import About from "@/Components/About";
import HeroSection from "@/Components/HeroSection";
import { FC } from "react";
import Coursess from "./Courses/page";
import MentorShip from "./Mentor/page";
import Events from "./Event/page";
import Conatcts from "./Contact/page";

interface Props {}

const page: FC<Props> = () => {
  return <>
    <HeroSection />
    <About />
    <Coursess />
    <MentorShip/>
    <Events />
    <Conatcts />
    </>
};

export default page;
