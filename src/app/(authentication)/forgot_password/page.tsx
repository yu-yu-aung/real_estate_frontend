
import Image from "next/image";
import LogInForm from "../components/LogInForm";
import Link from "next/link";
import ForgotForm from "../components/ForgotForm";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex justify-end bg-[url(/assets/log_in_bg.png)] bg-cover bg-center font-sans">
      <div className="w-full flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-center  px-4 py-8 gap-4 absolute top-62 z-10">
          <Link href="/">
            <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest COmpany' width={80} height={69}/>
          </Link>
          <p className="text-center text-text-secondary text-lg">
            Find Your Perfect Place to Call Home! <br></br>Browse thousands of rental properties, from modern <br></br> apartments to family homes.
          </p>
        </div>
        
        <div className="bg-radial-[at_50%_50%] from-white to-white/20 blur-lg rounded-[90px] absolute top-70 w-140 h-50">
           
        </div>
        
      </div>
      
        
      <ForgotForm/>
    </div>
    
  )
}

export default Page