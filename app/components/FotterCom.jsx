import AnimationPartCom from "./parts/AnimationPartCom"
import Link from "next/link"
const FotterCom = () => {
  return (
    <div className="bg-black reveal  w-full p-10">
        <AnimationPartCom/>
        <div className="flex justify-between w-full">
            
            <div>
                <h1 className="text-6xl">Kareem</h1>
                <h4 className="text-xl ">Web Developer with responsive design and secure backend.</h4>
                <ul className="flex gap-5 my-5">
                    <li className="text-3xl"><a href="https://github.com/kareem679"  className="cursor-pointer"><i className="fa-brands fa-github"></i></a></li>
                    <li className="text-3xl"><a href="https://wa.me/201006721385" className="cursor-pointer"><i className="fa-brands fa-whatsapp"></i></a></li>
                    <li className="text-3xl"><a href="https://www.facebook.com/kareem.diaa.9404" className="cursor-pointer"><i className="fa-brands fa-facebook"></i></a></li>
                    <li className="text-3xl"><a href="https://www.linkedin.com/in/kareem-diaa-4a2626370/" className="cursor-pointer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>


            <div>

             <ul className="flex flex-col gap-3">
                <li className="text-xl font-bold hover:underline"><Link href="/">Home</Link></li>
                <li className="text-xl font-bold hover:underline"><Link href="/Views/about">About</Link></li>
                <li className="text-xl font-bold hover:underline"><Link href="/Views/skills">Skills</Link></li>
                <li className="text-xl font-bold hover:underline"><Link href="/Views/services">Services</Link></li>
                <li className="text-xl font-bold hover:underline "><Link href="/Views/contact">Contact</Link></li>
            </ul>

            </div>

        </div>


        <div className="flex flex-col m-5 ">
            <h4 className="text-xl">Skilled in HTML, CSS, JavaScript & Next + React , Express . I build modern and fast websites.</h4>
            <h2 className="text-lg">Contact: " kareem123456work@gmail.com" or "01006721385"</h2>
            <h3 className="text-md">2024 Copyrights @Kareem.dev</h3>
            <div></div>
        </div>
    </div>
  )
}

export default FotterCom