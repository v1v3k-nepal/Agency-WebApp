import Image from "next/image";
import Hero from "../../public/hero.png"
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className="flex mt-[5%] mb-5 gap-4 md:gap-24 lg:flex-row flex-col-reverse">
      <div className="left">
        <h1 className="font-extrabold text-[40px] md:text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">Better Design <br />for your Digital Products.</h1>
        <p className="text-xl mt-3">Turning your Idea into Reality. We bring together <br />the teams from the global tech industry.</p>
        <div className="mt-6">
        <Button url="/" text="See Our Works"/>
        </div>
      </div>
      <div className="right flex-grow w-full lg:w-1/2">
        <Image src={Hero} alt="Hero Image" className="w-full object-cover animate-move2"/>
      </div>
    </div>
  );
}
