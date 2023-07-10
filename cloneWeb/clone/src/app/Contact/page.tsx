import ContactUs from "@/Components/ContactUs";
import { FC } from "react";


interface Props {
    
}
 
const Conatcts: FC<Props> = () => {
    return ( 
        <div>
            <ContactUs Name={""} text={""} email={""} textarea={""} />
        </div>
     );
}
 
export default Conatcts ;