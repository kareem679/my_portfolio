import AnimationPartCom from "./parts/AnimationPartCom"
const ServicesCom = () => {
  <AnimationPartCom/>
  return (
<div className="w-full reveal  mx-auto px-4 mb-32 ">
  <h1 className="w-full my-44 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">
    Services
  </h1>

  <div className="w-full flex flex-wrap  xl:justify-between  xl:px-56  ">
    <div className="w-full  xl:w-1/2">
      <h2 className="text-4xl  font-bold mb-2">Front-end Services</h2>
      <h3 className="text-2xl underline font-semibold mb-4">My Services</h3>
      <p className="tracking-tight text-lg" >
       I offer front-end development services using HTML, CSS, and JavaScript, with strong experience in React, Tailwind CSS, and Next.js. I build responsive, fast, and accessible user interfaces that work smoothly across all devices and browsers. Whether it’s a landing page, a portfolio, or a custom dashboard, I deliver clean, modern, and scalable front-end solutions that follow best practices and performance standards.
      </p>
    </div>

    <div><img src="/imgs/Serivces.png" alt="123" className="w-[500px] xl:w-[350px] mt-10"/></div>
  </div>
</div>
  )
}

export default ServicesCom