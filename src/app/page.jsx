import Image from "next/image";
import Hero from "../../public/hero.png"

export default function Home() {
  return (
    <div className="flex mt-[5%] gap-24">
      <div className="left">
        <h1 className="font-extrabold text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">Better Design <br />for your Digital Products.</h1>
        <p className="text-xl mt-3">Turning your Idea into Reality. We bring together <br />the teams from the global tech industry.</p>
      </div>
      <div className="right">
        <Image src={Hero} alt="Hero Image" className="w-full h-[500px]"/>
      </div>
    </div>
  );
}
