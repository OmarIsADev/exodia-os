import { useState, type ReactElement, type ReactNode } from "react";

enum OS {
  Home = "Home",
  Predator = "Acer Predator",
  Wireless = "Wireless",
  Dark = "Dark",
  ARM = "ARM",
}

const osIcons = {
  [OS.Home]: { src: "/Logos/exodia.png", styling: "mix-blend-darken" },
  [OS.Predator]: { src: "/Logos/Predator.png", styling: "" },
  [OS.Wireless]: { src: "/Logos/wireless.png", styling: "" },
  [OS.Dark]: { src: "/Logos/Dark-ed.png", styling: "" },
  [OS.ARM]: { src: "/Logos/ARM.png", styling: "" },
};

const osColors = {
  [OS.Home]: "#58e1ff",
  [OS.Predator]: "#A600E7",
  [OS.Wireless]: "#a4133c",
  [OS.Dark]: "#0466c8",
  [OS.ARM]: "#4ad66d",
};

const osNames = {
  [OS.Home]: "Home",
  [OS.Predator]: "Acer Predator",
  [OS.Wireless]: "Wireless",
  [OS.Dark]: "Dark",
  [OS.ARM]: "ARM",
};

const osData: Record<
  OS,
  {
    downloads?: {
      direct: string;
      drive: string;
      torrent: string;
      archive: string;
    };
    description: string;
    gif: string;
  }
> = {
  [OS.Home]: {
    downloads: {
      direct: "https://omansh.vercel.app/ExodiaOS/latest/home/",
      drive:
        "https://drive.google.com/drive/folders/1R5bZhI8yGfr9Z3Xq_QWnUIK1qvh42a2_",
      torrent: "https://fosstorrents.com/distributions/exodia-os/",
      archive: "https://omansh.vercel.app/ExodiaOS/archive/",
    },
    description:
      "This Edition is a general purpose operating system with the typical Exodia OS look and feel. This edition is designed for daily use, privacy and software development.",
    gif: "/GIFs/Home-ed.gif",
  },
  [OS.Predator]: {
    downloads: {
      direct: "https://omansh.vercel.app/ExodiaOS/latest/Predator/",
      drive:
        "https://drive.google.com/drive/folders/1RHyGWLOTf4mtoVpHpGzNOJRZ8UnZI2PR",
      torrent: "https://fosstorrents.com/distributions/exodia-os/",
      archive: "https://omansh.vercel.app/ExodiaOS/archive/",
    },
    description:
      "This Edition For Acer Predator Laptops with the typical Exodia OS look and feel, Keyboard RGB change based on the selected theme PredatorSense pre-installed to control CPU/GPU Fan, Keyboard RGB",
    gif: "/GIFs/Predator-ed.gif",
  },
  [OS.Wireless]: {
    downloads: {
      direct: "https://omansh.vercel.app/ExodiaOS/latest/Wireless/",
      drive:
        "https://drive.google.com/drive/folders/1zPh229ZV360hwpbQTSQU9UXfQKYI0-90?usp=sharing",
      torrent: "https://fosstorrents.com/distributions/exodia-os/",
      archive: "https://omansh.vercel.app/ExodiaOS/archive/",
    },
    description:
      "This Edition is For penetration testing (and especially for Wireless PenTesting) come with 400+ pre-installed Tools For PenTesting(and 130+ For Wireless PenTesting)",
    gif: "/GIFs/Wirelss-ed.gif",
  },
  [OS.Dark]: {
    description:
      "ISO image for Exodia OS Dark edition (security-focused), this edition was built for the dark web to preserve privacy and anonymity.",
    gif: "/GIFs/Dark-ed.png",
  },
  [OS.ARM]: {
    description:
      "A flavor edition for the ARM family: An automated script that installs Exodia OS settings, repositories, etc., over an Arch ARM installation.",
    gif: "/GIFs/ARM-ed.png",
  },
};

function Section() {
  const [os, setOs] = useState<OS>(OS.Home);

  return (
    <div className="flex flex-col gap-4 flex-wrap justify-center mb-16 p-16">
      <div className="flex gap-4 lg:gap-12 flex-wrap justify-center">
        {Object.values(OS).map((os) => (
          <Button
            key={os}
            Icon={
              <img
                src={osIcons[os].src}
                className={osIcons[os].styling + " w-6 h-6"}
              />
            }
            className="lg:scale-125"
            color={osColors[os]}
            setOs={setOs}
            os={os}
          >
            {osNames[os]}
          </Button>
        ))}
      </div>

      <div className="container max-w-7xl mx-auto bg-secondary w-full px-8 pt-6 pb-8 rounded-2xl flex flex-col gap-4">
        <div className="flex flex-row gap-4 justify-between h-fit items-center">
          <h1 className="!text-4xl !font-bold text-gradient">{os} Edition</h1>

          <img src="/Logos/exodia-cyan.png" className="size-16" alt="" />
        </div>
        <p className="text-sm text-foreground-light">
          {osData[os].description}
        </p>
        <div className="flex flex-col w-full lg:flex-row gap-4">
          <img
            src={osData[os].gif}
            className={`rounded-lg ${
              osData[os].downloads ? "lg:w-[calc(100%-9.5rem-2rem)]" : "w-full"
            }`}
            alt=""
          />
          {osData[os].downloads && (
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex lg:flex-col gap-4 w-full flex-wrap max-lg:justify-between *:*:lg:w-full">
                <a href={osData[os].downloads.direct}>
                  <Button
                    Icon={<img src="/Logos/onedrive.svg" />}
                    color={osColors[os]}
                    setOs={setOs}
                    os={os}
                  >
                    Download
                  </Button>
                </a>
                <a href={osData[os].downloads.drive}>
                  <Button
                    Icon={<img src="/Logos/google-drive-32.png" />}
                    color={osColors[os]}
                    setOs={setOs}
                    os={os}
                  >
                    Download
                  </Button>
                </a>
                <a href={osData[os].downloads.torrent}>
                  <Button
                    Icon={<img src="/Logos/torrent.svg" />}
                    color={osColors[os]}
                    setOs={setOs}
                    os={os}
                  >
                    Download
                  </Button>
                </a>
                <a href={osData[os].downloads.archive}>
                  <Button
                    Icon={<img src="/Logos/onedrive.svg" />}
                    color={osColors[os]}
                    setOs={setOs}
                    os={os}
                  >
                    Archive
                  </Button>
                </a>
              </div>

              <div className="flex flex-col gap-2 text-center bg-background p-4 border-(--primary) border rounded-2xl">
                <h3 className="text-2xl text-foreground font-bold">
                  Credentials
                </h3>

                {/* spacer */}
                <div className="w-full bg-foreground-light h-px"></div>

                <div className="flex flex-col gap-2 *:!text-[14px] text-foreground-light">
                  <p>
                    Username: <b className="text-primary">liveuser</b>
                  </p>
                  <p>
                    Password: <b className="text-primary">exodia</b>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;

const Button = ({
  Icon,
  children,
  className,
  setOs,
  os,
  color,
}: {
  Icon: ReactElement<HTMLImageElement>;
  children: ReactNode;
  className?: string;
  color: string;
  setOs: (os: OS) => void;
  os: OS;
}) => {
  const changeTheme = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
  };
  return (
    <button
      className={`flex items-center gap-2 text-white px-4 py-2 rounded-full cursor-pointer ${className}`}
      style={{ backgroundColor: color }}
      onClick={() => {
        changeTheme(color);
        setOs(os);
      }}
    >
      {Icon}
      {children}
    </button>
  );
};
