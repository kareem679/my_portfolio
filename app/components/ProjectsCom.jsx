import Image from "next/image";
import AnimationPartCom from "./parts/AnimationPartCom";

const ProjectsCom = () => {
  return (
    <div className="px-8 md:px-20 reveal text-black my-32">
      <AnimationPartCom />
      <h1 className="text-center text-white text-5xl md:text-6xl font-bold my-20">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="relative group shadow-lg bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
          <Image
            src="/imgs/Todo.png"
            alt="E-commerce"
            width={800}
            height={400}
            className="w-full h-56 object-cover"
          />
          <a
            href="https://github.com/kareem679/Todo"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="px-6 py-3 bg-purple-900 hover:bg-purple-950 text-white rounded-lg shadow-md">
              View Details
            </span>
          </a>
          <div className="p-6">
            <h2 className="text-2xl font-semibold uppercase">Todo List</h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              A simple task management app that helps you add, organize, and
              track daily tasks easily to stay productive.
            </p>
          </div>
        </div>

        <div className="relative group shadow-lg bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
          <Image
            src="/imgs/E-commerce.png"
            alt="E-commerce"
            width={800}
            height={400}
            className="w-full h-56 object-cover"
          />
          <a
            href="https://github.com/kareem679/E-commerce"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="px-6 py-3 bg-purple-900 hover:bg-purple-950 text-white rounded-lg shadow-md">
              View Details
            </span>
          </a>
          <div className="p-6">
            <h2 className="text-2xl font-semibold uppercase">E-commerce</h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              A fully functional online store with product listings, shopping
              cart, and order management to simulate a real shopping experience.
            </p>
          </div>
        </div>

                <div className="relative group shadow-lg bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-3">
          <Image
            src="/imgs/Dr-Dentist2.png"
            alt="Dr-Dentist.png"
            width={800}
            height={400}
            className="w-full h-56 object-cover"
          />
          <a
            href="https://github.com/kareem679/Dr-Kamal-Web"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="px-6 py-3 bg-purple-900 hover:bg-purple-950 text-white rounded-lg shadow-md">
              View Details
            </span>
          </a>
          <div className="p-6">
            <h2 className="text-2xl font-semibold uppercase">
              Dental Clinic Website
            </h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              A modern and responsive website for a dental clinic, designed to
              build trust and make booking appointments easy. It showcases
              services, doctor information, and a clean medical-style UI focused
              on user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCom;
