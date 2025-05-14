import { useState, type ReactNode } from "react";

interface CardProps {
  title?: string;
  tiltAmount?: number;
  children: ReactNode;
}

interface DevCardProps {
  img: string;
  name: string;
  major: string;
  connections: { icon: ReactNode; href: string }[];
  children: ReactNode;
}

const Card = ({ title, tiltAmount = 20, children }: CardProps) => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [popUp, setPopUp] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / card.clientWidth;
    const y = (e.clientY - rect.top) / card.clientHeight;

    setTiltX((x - 0.5) * tiltAmount);
    setTiltY(-(y - 0.5) * tiltAmount);
  };

  const handleMouseEnter = () => {
    setPopUp(true);
  };

  const handleMouseLeave = () => {
    setPopUp(false);
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <div
      className={`relative flex flex-col items-start min-w-64 w-fit p-4 space-y-4 bg-secondary rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary ${
        title ? "min-h-64 h-fit" : "h-full"
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
        zIndex: popUp ? 1 : 0,
      }}
    >
      {title && (
        <h3 className="text-xl text-gradient text-center w-full font-bold">
          {title}
        </h3>
      )}
      <div
        className={`text-foreground-light h-full w-full text-pretty flex flex-col gap-2.5 ${
          title ? "text-center items-center justify-center" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const DevCard = ({
  img,
  name,
  major,
  connections,
  children,
}: DevCardProps) => {
  return (
    <Card tiltAmount={10}>
      <img src={img} alt="" className="rounded-full size-20" />
      <h3 className="mt-4 text-2xl text-foreground font-bold">{name}</h3>
      <p className="text-gradient">{major}</p>
      <p className="w-64">{children}</p>
      <div className="flex gap-4 *:hover:text-primary *:hover:scale-110 *:cursor-pointer *:transition h-full items-end">
        {connections.map((connection, index) => (
          <a target="_blank" href={connection.href} key={index}>
            {connection.icon}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Card;
