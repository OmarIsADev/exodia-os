import React from "react";
import { DevCard } from "../../ui/card";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const team = [
  {
    name: "Ozil",
    img: "https://github.com/mmsaeed509.png",
    major: "DevOps Engineer",
    description: "Team Leader, Core Dev, Release Manager, Package Maintainer",
    connections: [
      {
        href: "https://discordapp.com/users/528010173403365377",
        icon: <FaDiscord size={32} />,
      },
      {
        href: "https://twitter.com/Mahmoudzil4",
        icon: <FaTwitter size={32} />,
      },
      {
        href: "https://github.com/mmsaeed509",
        icon: <FaGithub size={32} />,
      },
      {
        href: "https://www.linkedin.com/in/mahmoud-mohamed-a934b21a5",
        icon: <FaLinkedin size={32} />,
      },
    ],
  },
  {
    name: "Budas",
    img: "https://github.com/AbdallahAdham.png",
    major: "Jr. PenTester",
    description: "Source code review, Core Dev",
    connections: [
      {
        href: "https://discordapp.com/users/521368454545014784",
        icon: <FaDiscord size={32} />,
      },
      {
        href: "https://twitter.com/AbdallahAdham13",
        icon: <FaTwitter size={32} />,
      },
      {
        href: "https://github.com/AbdallahAdham",
        icon: <FaGithub size={32} />,
      },
      {
        href: "https://www.linkedin.com/in/abdallah-adham",
        icon: <FaLinkedin size={32} />,
      },
    ],
  },
  {
    name: "Omar",
    img: "https://github.com/omarisadev.png",
    major: "Full-Stack Developer",
    description: "Web Developer",
    connections: [
      {
        href: "https://discordapp.com/users/505399650438610944",
        icon: <FaDiscord size={32} />,
      },
      {
        href: "https://github.com/omarisadev",
        icon: <FaGithub size={32} />,
      },
      {
        href: "https://www.linkedin.com/in/omar-mahmoud-37b33a289",
        icon: <FaLinkedin size={32} />,
      },
    ],
  },
  {
    name: "Joe",
    img: "https://github.com/youssefemadhassan66.png",
    major: "Web Developer",
    description: "Web Development, Docs Maintainer",
    connections: [
      {
        href: "https://discordapp.com/users/822765082278494218",
        icon: <FaDiscord size={32} />,
      },
      {
        href: "https://github.com/youssefemadhassan66",
        icon: <FaGithub size={32} />,
      },
      {
        href: "https://www.linkedin.com/in/youssef-emad-037570250/",
        icon: <FaLinkedin size={32} />,
      },
    ],
  },
  {
    name: "Don Som3a",
    img: "https://github.com/OmarEsmail211.png",
    major: "Software Engineer",
    description: "Docs Maintainer, Web Development",
    connections: [
      {
        href: "https://discordapp.com/users/721526799192031263",
        icon: <FaDiscord size={32} />,
      },
      {
        href: "https://twitter.com/OmarEsmail217",
        icon: <FaTwitter size={32} />,
      },
      {
        href: "https://github.com/OmarEsmail211",
        icon: <FaGithub size={32} />,
      },
      {
        href: "https://www.linkedin.com/in/omar-ismail-0855561b1",
        icon: <FaLinkedin size={32} />,
      },
    ],
  },
];

function Team() {
  return (
    <div
      id="team"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {team.map((dev) => (
        <DevCard
          key={dev.name}
          name={dev.name}
          img={dev.img}
          major={dev.major}
          connections={dev.connections}
        >
          {dev.description}
        </DevCard>
      ))}
    </div>
  );
}

export default Team;
