
import RegisterForm from "@/components/shared/RegisterForm";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex justify-end bg-[url(/assets/log_in_bg.png)] bg-cover bg-center">
      <div>
        <Image src="/assets/light_logo.png" alt='Logo Image of Cozy Nest COmpany' width={60} height={52}/>
      </div>
      <RegisterForm/>
    </div>
    
  )
}

export default Page