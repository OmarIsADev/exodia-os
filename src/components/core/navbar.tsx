import { useState } from "react";
import Button from "../ui/button";

const routes = [
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Wiki",
    href: "/wiki",
  },
  {
    name: "Keybinding",
    href: "/wiki/keybinding/keybinding",
  },
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

  return (
    <nav className="*:w-fit z-50 fixed w-full h-32 px-16 py-8 max-lg:grid flex grid-cols-3 max-sm:flex items-center justify-between max-lg:justify-center max-sm:justify-between">
      <a href="/">
        <img
          src="/Logos/exodia-cyan.png"
          alt=""
          className="bg-background rounded-full size-16 transition hover:scale-110 hover:shadow hover:shadow-primary"
        />
      </a>

      <MobileMenu isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <div className="max-sm:hidden flex gap-6 items-center min-lg:bg-secondary h-16 min-lg:pl-6 min-lg:pr-2 py-4 min-lg:border-2 border-primary rounded-full justify-self-end">
        <div className="max-lg:hidden flex gap-6">
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
          <Button rounded="full">Download</Button>
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
    <div className="min-lg:hidden justify-self-center">
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

      <ul className={`flex flex-col gap-4 p-8 bg-secondary w-full max-w-[calc(100vw-4rem)] h-screen fixed top-0 transition-all duration-500 ${isOpen ? "left-0" : "left-[-100%]"}`}>
        {/* close button */}
        <div className="flex justify-end">
          <div onClick={toggle} className="flex cursor-pointer relative size-8">
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

      <style>
        {`
            .animate-open-menu {
              left: 0;
              animation-name: open-menu;
            }
            .animate-close-menu {
              left: -100%;
              animation-name: close-menu;
            }
        `}
      </style>
    </div>
  );
}
