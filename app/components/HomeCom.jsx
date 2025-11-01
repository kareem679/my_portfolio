import AnimationPartCom from "./parts/AnimationPartCom";
import Link from "next/link";
const HomeCom = ({ src }) => {
  return (
    <div
      className="reveal   bg-blend-multiply w-full h-[100vh] bg-cover bg-center flex items-center bg-black/40 justify-center text-white "
      style={{ backgroundImage: `url(${src})` }}
    >
      <AnimationPartCom />
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/3 sm:left-1/2 sm:top-1/2">
        <h1 className="text-8xl font-semibold sm:break-words sm:text-center ">
          I'M Kareem
        </h1>
        <h3 className="text-4xl text-amber-300 font-semibold my-10 ">
          Web Developer
        </h3>
        <ul className="flex gap-5 my-5">
          <li className="text-5xl text-gray-400 ">
            <a href="https://github.com/kareem679" className="cursor-pointer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="text-5xl text-green-500">
            <a href="https://wa.me/201006721385" className="cursor-pointer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li className="text-5xl text-blue-600">
            <a
              href="https://www.facebook.com/kareem.diaa.9404"
              className="cursor-pointer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="text-5xl text-blue-400">
            <a
              href="https://www.linkedin.com/in/kareem-diaa-4a2626370/"
              className="cursor-pointer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap gap-6">
          <Link href="/Views/about">
            <button className="px-6 py-3 mt-5 text-black text-2xl font-semibold rounded-md bg-gradient-to-r from-teal-300 to-blue-300 hover:from-teal-500 hover:to-blue-600 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/60 transition-all duration-300 hover:scale-105 cursor-pointer">
              Show More
            </button>
          </Link>

          <a
            download="KareemDiaaCV.pdf"
            href="/Kareem_Diaa_CV_FullStack.pdf"
            className="mt-5 font-semibold px-6 py-3 text-2xl rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/60 hover:from-blue-600 hover:to-pink-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCom;
