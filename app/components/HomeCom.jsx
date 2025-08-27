import AnimationPartCom from "./parts/AnimationPartCom"

const HomeCom = ({src}) => {
  return (
    <div className="reveal   bg-blend-multiply w-full h-[100vh] bg-cover bg-center flex items-center bg-black/40 justify-center text-white " style={{ backgroundImage: `url(${src})` }}>
      <AnimationPartCom/>
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/3 sm:left-1/2 sm:top-1/2">
        <h1 className="text-8xl font-semibold sm:break-words sm:text-center ">I'M Kareem</h1>
        <h3 className="text-4xl text-amber-300 font-semibold my-10 ">Web Developer</h3>
        <ul className="flex gap-5 my-5">
          <li className="text-5xl text-gray-400 "><a href="https://github.com/Kareemlol1234"  className="cursor-pointer"><i className="fa-brands fa-github"></i></a></li>
          <li className="text-5xl text-green-500"><a href="https://wa.me/201006721385" className="cursor-pointer"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li className="text-5xl text-blue-600"><a href="https://www.facebook.com/profile.php?id=61577462731094&sk=about_work_and_education" className="cursor-pointer"><i className="fa-brands fa-facebook"></i></a></li>
          <li className="text-5xl text-blue-400"><a href="https://www.linkedin.com/in/kareem-diaa-4a2626370/" className="cursor-pointer"><i className="fa-brands fa-linkedin-in"></i></a></li>
        </ul>
        <button className="bg-teal-300 px-4 py-3 mt-5 text-black text-2xl font-semibold rounded-md hover:bg-teal-500 transition cursor-pointer" >Show More</button>
      </div>  
    </div>
  )
}

export default HomeCom