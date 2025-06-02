import { useEffect, useState } from "react";
import Button from "../ui/button";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Wiki",
    href: "https://exodia-os.github.io/wiki",
  },
  // {
  //   name: "Keybinding",
  //   href: "/wiki/keybinding/keybinding",
  // },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "About us",
    href: "/team",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    return window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`*:w-fit z-50 fixed w-full h-20 px-8 py-4 flex items-center justify-between max-lg:justify-center max-md:justify-between transition duration-300 ${
        isScrolled
          ? "bg-background border-b border-primary"
          : "bg-transparent border-transparent"
      }`}
    >
      <a className="max-lg:hidden" href="/">
        <img
          src="/Logos/exodia-cyan.png"
          alt=""
          className="rounded-full size-16 transition hover:scale-110 hover:shadow hover:shadow-primary"
        />
      </a>

      <MobileMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <div
        className={`flex gap-12 max-lg:gap-2.5 items-center h-16 min-md:pl-6 min-sm:pr-2 py-4 rounded-full justify-self-end transition ${
          isScrolled ? "" : "min-md:border-2 border-primary min-md:bg-secondary"
        } `}
        id="navbar"
      >
        <div className="flex gap-12 max-md:gap-2 max-md:hidden">
          {routes.map((route) => (
            <a
              className="hover:text-primary-foreground transition"
              key={route.name}
              href={route.href}
            >
              {route.name}
            </a>
          ))}
        </div>
        <a href="/download">
          <Button class="!px-8" rounded="full">
            Download
          </Button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

function MobileMenu({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  const classNames =
    "w-6 h-1 rounded-full bg-primary transition ease transform duration-300";

  return (
    <div className="min-md:hidden justify-self-center">
      <button
        className="cursor-pointer w-fit flex flex-col gap-1"
        onClick={toggle}
      >
        <div
          className={`${isOpen ? "rotate-45 translate-y-2" : ""} ${classNames}`}
        ></div>
        <div className={`${isOpen ? "rotate-45" : ""} ${classNames}`}></div>
        <div
          className={`${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          } ${classNames}`}
        ></div>
      </button>

      <ul
        className={`flex flex-col gap-4 p-8 bg-secondary w-full max-w-[calc(100vw-4rem)] h-screen fixed top-0 transition-all duration-500 ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        {/* close button */}
        <div className="flex justify-between items-center">
          <a href="/">
            <img
              src="/Logos/exodia-cyan.png"
              alt=""
              className="rounded-full size-16 transition hover:scale-110 hover:shadow hover:shadow-primary"
            />
          </a>
          <div onClick={toggle} className="flex cursor-pointer relative size-6">
            <div
              className={`bg-white rotate-45 top-1/2 -translate-1/2 absolute ${classNames}`}
            ></div>
            <div
              className={`bg-white -rotate-45 top-1/2 -translate-1/2 absolute ${classNames}`}
            ></div>
          </div>
        </div>

        {routes.map((route) => (
          <li key={route.name}>
            <a
              href={route.href}
              className="hover:text-primary-foreground transition"
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
