import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb, DiNodejs, DiFirebase, DiBootstrap } from "react-icons/di";

const Skills = () => {
  const techs = [
    {
      id: 1,
      icon: <FaHtml5 className="w-12 h-12 mx-auto text-orange-500" />,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      icon: <FaCss3Alt className="w-12 h-12 mx-auto text-blue-500" />,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      icon: <FaJs className="w-12 h-12 mx-auto text-yellow-500" />,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      icon: <FaReact className="w-12 h-12 mx-auto text-blue-600" />,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      icon: <SiTailwindcss className="w-12 h-12 mx-auto text-sky-400" />,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      icon: <DiMongodb className="w-12 h-12 mx-auto text-green-400" />,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 7,
      icon: <DiNodejs className="w-12 h-12 mx-auto text-green-600" />,
      title: "Express.js",
      style: "shadow-green-600",
    },
    {
      id: 8,
      icon: <DiFirebase className="w-12 h-12 mx-auto text-yellow-600" />,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    
    {
      id: 10,
      icon: <FaGithub className="w-12 h-12 mx-auto text-gray-400" />,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="lg:pt-32 pt-10  max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold p-2 ">
            Skills
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 text-center py-4 px-4 sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 md:py-4 rounded-lg ${style} ${
                id > 5 ? "sm:mt-10" : ""
              }`}
            >
              {icon}
              <p className="mt-2 md:mt-4 font-medium text-sm sm:text-base">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
