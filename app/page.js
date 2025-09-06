import Image from "next/image";
import HomeCom from "./components/HomeCom";
import AboutCom from "./components/AboutCom";
import SkillsCom from "./components/SkillsCom";
import ServicesCom from "./components/ServicesCom";
import ContactCom from "./components/ContactCom";
import ProjectsCom from "./components/ProjectsCom";
export default function Home() {
  const img = "/imgs/Hero.jpg"
  return (
    <>
    <HomeCom src={img}/>
    <AboutCom/>
    <SkillsCom/>
    <ServicesCom/>
    <ProjectsCom/>
    <ContactCom/>
    
    </>

    
  );
}
