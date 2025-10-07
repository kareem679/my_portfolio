

import ProjectsCom from "@/app/components/ProjectsCom"
import HeroCom from "@/app/components/HeroCom"

const page = () => {
  const img = "/imgs/Hero.jpg"
  return (
    <div>
        <HeroCom title="projects" src={img}/>  
        <ProjectsCom/> 
    </div>
  )
}

export default page