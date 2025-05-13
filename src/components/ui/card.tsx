import { useState, type ReactNode } from "react";

const Card = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const [popUp, setPopUp] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / card.clientWidth;
    const y = (e.clientY - rect.top) / card.clientHeight;
    const tiltAmount = 20; // Adjust for stronger 3D effect
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
      className="relative flex flex-col items-center min-w-64 w-fit min-h-64 h-fit p-4 bg-secondary rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
        zIndex: popUp ? 1 : 0,
      }}
    >
      <h3 className="mt-4 text-xl text-gradient font-bold">{title}</h3>
      <div className="mt-4 h-full flex justify-center">
        <p className="text-foreground-light h-fit text-center text-pretty">{children}</p>
      </div>
    </div>
  );
};

export default Card;
