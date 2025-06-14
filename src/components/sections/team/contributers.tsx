import React from "react";
import type { IconType } from "react-icons";
import { FaDiscord, FaGithub } from "react-icons/fa6";

type Contributer = {
  name: string;
  img: string;
  major: string;
  description?: string;
  connections: { href: string; icon: IconType }[];
};

const contributers: Contributer[] = [
  {
    name: "Nahian Adnan",
    img: "https://github.com/Linux-DADDY.png",
    major: "Discord Admin",
    connections: [
      {
        href: "https://github.com/Linux-DADDY",
        icon: FaGithub,
      },
      {
        href: "https://discordapp.com/users/473104258435121153",
        icon: FaDiscord,
      },
    ],
  },
  {
    name: "AW Fixer",
    img: "https://github.com/awfixer.png",
    major: "Discord Admin",
    connections: [
      {
        href: "https://github.com/awfixer",
        icon: FaGithub,
      },
      {
        href: "https://discordapp.com/users/940285292944961537",
        icon: FaDiscord,
      },
    ],
  },
];

const ContributersComponent: React.FC = () => {
  return (
    <div className="max-w-4xl container mx-auto px-16 space-y-4">
      <h1 className="!text-4xl !font-extrabold text-gradient text-center">
        Wall Of Contributors
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-secondary rounded-3xl p-4 justify-stretch">
        {contributers.map((contributer) => (
          <div
            key={contributer.name}
            className="flex flex-col gap-4 w-full col-span-1 items-center bg-accent rounded-2xl p-4"
          >
            <img
              src={contributer.img}
              alt={contributer.name}
              className="w-32 h-32 rounded-full"
            />
            <h1 className="!text-xl !font-bold">{contributer.name}</h1>
            <p className="text-foreground-light">{contributer.major}</p>
            {contributer.description && <p>{contributer.description}</p>}
            <div className="flex gap-4">
              {contributer.connections.map((connection, index) => (
                <a href={connection.href} key={index}>
                  <connection.icon className="!text-3xl text-foreground-light hover:text-foreground hover:scale-110 transition" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributersComponent;
