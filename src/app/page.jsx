import Image from "next/image";
import Hero from "../../public/landing-img.png";
import Button from "@/components/button/Button";
import Footer from "@/components/footer/Footer";
// import PortfolioLayout from "./portfolio/layout";
// import Portfolio from "./portfolio/page";
// import About from "./about/page";
// import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <div className="flex mt-[5%] mb-5 gap-4 md:gap-24 lg:flex-row flex-col-reverse">
        <div className="left basis-1/2">
          <h1 className="font-extrabold text-[40px] md:text-[72px] bg-gradient-to-b from-[#724fef] to-[#b1a2ec] bg-clip-text text-transparent">
            Better Design <br />
            for your Digital Products.
          </h1>
          <p className="text-xl mt-3">
            Turning your Idea into Reality. We bring together <br />
            the teams from the global tech industry.
          </p>
          <div className="mt-6">
            <Button url="/portfolio" text="See Our Works" />
          </div>
        </div>
        <div className="relative lg:w-[45vw] lg:h-[30vw] w-[80vw] h-[70vw]">
          <Image src={Hero} alt="Hero Image" fill={true} className="object-cover animate-move2" />
        </div>
      </div>
      <Footer/>
    </>
  );
}
