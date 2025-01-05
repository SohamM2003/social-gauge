import { FC } from "react";

export const MeetOurTeam: FC = () => {
  const teamMembers = [
    {
      name: "Ruturaj Bayad",
      role: "Software Engineer",
      image: "/assets/OurTeam/Ruturaj.jpg",
      linkedin: "https://www.linkedin.com/in/ruturajsinh-bayad-593552220/",
      github: "https://github.com/ruturajbayad",
    },
    {
      name: "Soham Mandaliya",
      role: "Software Engineer",
      image: "/assets/OurTeam/Soham.jpg",
      linkedin: "https://www.linkedin.com/in/soham-mandaliya/",
      github: "https://github.com/SohamM2003",
    },
    {
      name: "Rutvi Sanghvi",
      role: "Backend Developer",
      image: "/assets/OurTeam/Rutvi.jpg",
      linkedin: "https://www.linkedin.com/in/rutvi-sanghvi-107515249/",
      github: "#",
    },
    {
      name: "Aayushi Patel",
      role: "Support Developer",
      image: "/assets/OurTeam/Aayushi.jpg",
      linkedin: "https://www.linkedin.com/in/aayushi-patel-450974302/",
      github: "#",
    },
  ];

  return (
    <section
      className="py-10 px-6 lg:px-20 bg-gray-50 relative"
      style={{
        backgroundImage: "url(./assets/bg-noot.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left",
      }}
    >
      <h2 className="lg:text-6xl text-5xl font-extrabold text-center lg:mb-2 mb-24 font-manga relative z-10">
        <span className="relative z-10 text-shadow">Meet Our Team</span>
        <span className="absolute -top-1 right-1 text-5xl lg:text-6xl font-bold text-red-300 -z-10 font-manga w-[100%]">
          Meet Our Team
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-20 relative lg:p-20 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" bg-white bg-opacity-100 rounded-3xl shadow-lg overflow-hidden transition transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-100 duration-300 border-black border-4"
          >
            <div className="overflow-hidden w-48 h-48 mx-auto mt-8 mb-6 transition-transform transform hover:rotate-1 lg:w-[12vw] lg:h-[12vw]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h3 className="text-3xl tracking-wide text-gray-900 font-extrabold text-center mb-2 font-manga">
              {member.name}
            </h3>
            <p className="text-gray-900 font-mono text-center mb-4 text-2x1">
              {member.role}
            </p>

            <div className="flex justify-center space-x-6 mb-6">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-500 transition transform hover:scale-125"
              >
                <i className="fab fa-linkedin-in text-3xl"></i>
              </a>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-500 transition transform hover:scale-125"
              >
                <i className="fab fa-github text-3xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Manga-like Animation Effect */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    </section>
  );
};
