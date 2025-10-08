import Link from "next/link";
import NavPartCom from "./parts/NavPartCom";
import AnimationPartCom from "./parts/AnimationPartCom";
const NavCom = () => {
  return (
    <nav className="w-full reveal  fixed z-50 top-0">
      <AnimationPartCom />
      <div className="flex justify-between m-8">
        <a className="text-4xl font-bold" href="#">
          Kareem
        </a>
        <NavPartCom />
        <ul className="links  gap-15 hidden lg:flex ">
          <li className="text-xl font-bold hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl font-bold hover:underline">
            <Link href="/Views/about">About</Link>
          </li>
          <li className="text-xl font-bold hover:underline">
            <Link href="/Views/skills">Skills</Link>
          </li>
          <li className="text-xl font-bold hover:underline">
            <Link href="/Views/services">Services</Link>
          </li>
          <li className="text-xl font-bold hover:underline ">
            <Link href="/Views/contact">Contact</Link>
          </li>
          <li className="text-xl font-bold hover:underline">
            <Link href="/Views/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavCom;
