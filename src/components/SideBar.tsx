import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ARTSTATION_URL, LINKEDIN_URL } from "../Constants";
import useWindowDimensions from "../hooks/useWindowDimensions";

type SidebarLink = {
  title: string;
  href: string;
  isIcon?: boolean;
  iconPath?: string;
};

const sidebarLinks: SidebarLink[] = [
  { title: "Work", href: "/" },
  { title: "About", href: "/about" },
  { title: "Resume", href: "/resume.pdf" },
  { title: "Contact", href: "mailto:jasreenmanderdesigns@gmail.com" },
  {
    title: "LinkedIn",
    href: LINKEDIN_URL,
    isIcon: true,
    iconPath: "/images/linkedin.png",
  },
  {
    title: "ArtStation",
    href: ARTSTATION_URL,
    isIcon: true,
    iconPath: "/images/artstation.png",
  },
];

export default function SideBar() {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState<boolean>(width >= 900);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed mt-20 left-0 z-40 w-[20rem]  transition-transform bg-[#DBD6D3] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="py-20 overflow-y-auto text-center">
          <ul className="flex flex-col items-center space-y-6">
            {sidebarLinks.map(({ title, href, isIcon, iconPath }) => (
              <li key={title} className="flex items-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 transition-transform hover:scale-105"
                >
                  {isIcon ? (
                    <img src={iconPath} alt={title} className="w-8 h-8" />
                  ) : (
                    <span className="text-lg font-medium">{title}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-6 sm:pl-[20rem]">
        <Outlet />
      </main>

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="absolute top-5 left-5 z-50 p-2 text-gray-500 rounded-lg sm:hidden hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
