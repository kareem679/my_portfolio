import AnimationPartCom from "./parts/AnimationPartCom"

const SkillsCom = () => {
  return (
    <div className="my-20 reveal ">
        <AnimationPartCom/>
        <h1 className="w-full my-24 text-center text-4xl md:text-5xl lg:text-6xl font-semibold">Skills</h1>
        <div className="flex flex-col gap-10 mt-32">

            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold" htmlFor="html">html</label>
                <div className=" bg-orange-500 text-center p-2 text-lg rounded-md" id="html">95%</div>       
           </div>

            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold"  htmlFor="css">css</label>
                <div className=" bg-sky-500 text-center p-2 text-lg rounded-md" id="css">90%</div>
            </div>

            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold" htmlFor="javascript">javascript</label>
                <div className=" bg-yellow-400 text-center p-2 text-lg rounded-md" id="javascript">95%</div>
            </div>

            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold" htmlFor="React">React</label>
                <div className=" bg-cyan-400 text-center p-2 text-lg rounded-md" id="React">80%</div>
            </div>

            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold" htmlFor="tailwind">tailwind</label>
                <div className=" bg-teal-400 text-center p-2 text-lg rounded-md" id="tailwind">90%</div>
            </div>

            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold" htmlFor="Next">Next</label>
                <div className=" bg-neutral-800 text-center p-2 text-lg rounded-md" id="Next">80%</div>
            </div>
            <div className="w-[80%] m-auto">
                <label className=" uppercase text-2xl ml-2 w-full font-bold" htmlFor="javascript">Express</label>
                <div className=" bg-white text-center p-2 text-lg text-black rounded-md" id="javascript">80%</div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCom