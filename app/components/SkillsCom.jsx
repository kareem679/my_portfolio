import AnimationPartCom from "./parts/AnimationPartCom";

const SkillsCom = () => {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "php", level: "Advanced" },
    { name: "Laravel", level: "Advanced" },

  ];

  return (
    <section className="my-32 px-6 md:px-20 text-center reveal">
      <AnimationPartCom />

      <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Technologies and tools I use to build fast, responsive, and modern web applications.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div  key={skill.name}
            className="group flex flex-col items-center gap-2 p-4 rounded-xl border bg-[#112240] border-gray-800 hover:border-cyan-400 hover:bg-gray-900 transition-all duration-300 w-full max-w-[180px]"
          >
            <span className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
              {skill.name}
            </span>
            <span className="text-sm text-gray-400">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCom;