import AnimationPartCom from "./parts/AnimationPartCom";
import Image from "next/image";

const ServicesCom = () => {
  <AnimationPartCom />;
  return (
    <div className="w-full reveal mx-auto px-4 mb-32">
      <h1 className="w-full my-44 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">
        Services
      </h1>

      <div className="w-full px-4 mx-auto flex flex-col xl:flex-row justify-between items-center gap-10 pb-20 border-b-[3px] border-teal-400/70">
        <div className="w-full xl:w-1/2">
          <h2 className="text-4xl font-bold mb-2">Front-end Services</h2>
          <h3 className="text-2xl underline font-semibold mb-4">My Services</h3>
          <p className="tracking-tight text-lg leading-relaxed">
            I offer front-end development services <br /> using HTML, CSS, and
            JavaScript, with strong experience in React, Tailwind CSS, and
            Next.js. <br /> I build responsive, fast, and accessible user
            interfaces
            <br />
            that work smoothly across all devices and browsers. <br /> Whether
            it’s a landing page, a portfolio, <br /> or a custom dashboard, I
            deliver clean, modern, and scalable front-end solutions that follow
            best practices and performance standards.
          </p>
        </div>

        <Image
          src="/imgs/Serivces.png"
          width={500}
          height={500}
          alt="frontend image"
          className="rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full px-4 mx-auto flex flex-col xl:flex-row justify-between items-center gap-10 pt-20">
        <div className="w-full xl:w-1/2">
          <h2 className="text-4xl font-bold mb-2">Backend Services</h2>
          <h3 className="text-2xl underline font-semibold mb-4">My Services</h3>
          <p className="tracking-tight text-lg leading-relaxed">
            I build powerful backend systems using{" "}
            <span className="text-red-500 font-semibold">Laravel</span>, a
            modern PHP framework known for its elegant syntax and high
            performance. <br />
            I focus on creating clean, secure, and scalable APIs, efficient
            database structures, and reliable authentication systems. <br />
            With Laravel’s built-in tools and my experience, I ensure smooth
            communication between the front-end and backend, <br /> providing a
            fast and stable experience for users.
          </p>
        </div>

        <Image
          src="/imgs/backend.avif"
          width={500}
          height={500}
          alt="laravel backend image"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default ServicesCom;
