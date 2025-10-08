import AnimationPartCom from "./parts/AnimationPartCom"

const AboutCom = () => {
  return (
    <div className="reveal mx-auto px-4 mb-32">
      <AnimationPartCom />
      <h1 className="w-full my-24 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">About</h1>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 place-items-center">

        
        <div className="reveal bg-amber-50 w-3/4  h-[500px] lg:min-h-[600px] rounded-md p-4" style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img
              className="rounded-full m-3"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150"
              alt="Personal Website"
            />
          </div>
          <div className="text-center text-black px-2">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">Personal Website</h2>
            <p className="text-base md:text-lg mt-10 lg:mt-28 lg:text-xl">
              I designed and developed my personal portfolio website using HTML, CSS, and Next.js.
              It includes sections about me, my skills, and my previous projects, all with a clean and modern design.
            </p>
          </div>
        </div>

        
        <div className="reveal bg-amber-50 w-3/4 h-[500px] lg:min-h-[600px] rounded-md p-4" style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img
              className="rounded-full m-3"
              src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150"
              alt="Responsive Design"
            />
          </div>
          <div className="text-center text-black px-2">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">Responsive Design</h2>
            <p className="text-base md:text-lg mt-10 lg:mt-28 lg:text-xl">
              I built fully responsive interfaces using CSS Grid, Flexbox, and Tailwind CSS, 
              ensuring smooth display across all devices — mobile, tablet, and laptop.
            </p>
          </div>
        </div>

        
        <div className="reveal bg-amber-50 w-3/4  h-[500px] lg:min-h-[600px] rounded-md p-4 " style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img
              className="rounded-full m-3"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=crop&h=150&w=150"
              alt="Animation and Interaction"
            />
          </div>
          <div className="text-center text-black px-2">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">Animation & Interaction</h2>
            <p className="text-base md:text-lg mt-10 lg:mt-28 lg:text-xl">
              I implemented smooth hover and scroll animations using CSS and JavaScript 
              to enhance user experience and bring a more dynamic feel to the website.
            </p>
          </div>
        </div>

        
        <div className="reveal bg-amber-50 w-3/4  h-[500px] lg:min-h-[600px] rounded-md p-4" style={{ boxShadow: "4px 8px 20px rgba(94, 234, 212, 0.4)" }}>
          <div className="flex justify-center h-[40%]">
            <img
              className="rounded-full m-3"
              src="/imgs/backendreal.avif"
              alt="Backend and Security"
            />
          </div>
          <div className="text-center text-black px-2 ">
            <h2 className="text-2xl md:text-3xl font-semibold mt-10 underline">Backend & Security</h2>
            <p className="text-base md:text-md mt-10 lg:mt-28 lg:text-lg">
              I developed the backend using Express.js and MongoDB, focusing on authentication, 
              order management, and secure APIs. Added validation, error handling, and JWT protection 
              to keep the system safe and efficient.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutCom