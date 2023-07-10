import { FC } from "react"
import Image from "next/image";
interface Props {
    
}
 
const IndustryLogo : FC<Props> = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ml-4  p-20 ">
                
        <div className="  bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/google.a42cad95b03130c3d2e79b7e210a4cba.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/amazon.f43ad3bd80a6542589fe3d3afdbc311a.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/adobe.87adb09d80e10f33d7ae08800501e962.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/razorpay.23c8eed9d758f5668cc7f9ff2870b321.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/samsung.cad6b286876c24a136253f80b9897895.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/cisco.28e1e18dccd6da3d77e21fe199b5ade1.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/virtusa.b475b27e472c128bc7bca4388039e6bd.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/clicklabs.6c587b263a126af23faadbf9f5a86222.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/towerResearch.00fefc17aa9d1be6dca96480132f417c.svg" alt="google-logo" width={100} height={100} />
        </div>
        <div className=" bg-slate-500 w-60 h-40 rounded-lg flex flex-1 justify-center items-center ">  
        <Image className="mx-auto h-full w-full object-contain" src="https://wemakedevs.org/static/media/microsoft.a4ca3ac84648d7f9c57433668de9705a.svg" alt="google-logo" width={100} height={100} />
        </div>
        </div>
      );
}
 
export default IndustryLogo ;