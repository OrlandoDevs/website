import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../utils/useMediaQuery";
import { FaSlack, FaCaretDown } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";

function NavBar() {
  const [toggled, setToggled] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const urlEndpoint = window.location.pathname;

  const isActive = (path: string) => urlEndpoint === path;

  return (
    <nav className="relative flex w-full items-center justify-between h-20 px-10">
      <div className="flex items-center">
        <img src="/images/footer-odev.png" alt="Odevs" className="h-14" />
        <a
          className="btn btn-ghost text-4xl lg:text-5xl bg-gradient-to-r from-cyan-300 to-white text-transparent bg-clip-text"
          href="/"
        >
          Orlando Devs
        </a>
      </div>
      {matches && (
        <div className="flex gap-4 items-center text-2xl font-bold text-slate-200">
          <div
            className={`items-center hidden lg:flex lg:items-center px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] ${
              isActive("/events") ? "text-[#65c6d7]" : "text-slate-200"
            }`}
          >
            <FcCalendar />
            <a href="/events" className="text-nowrap pl-2">
              Events
            </a>
          </div>
          <a
            href="/about"
            className={`px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] ${
              isActive("/about") ? "text-[#65c6d7]" : "text-slate-200"
            }`}
          >
            About Us
          </a>
          <a
            href="/sponsors"
            className={`px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] ${
              isActive("/sponsors") ? "text-[#65c6d7]" : "text-slate-200"
            }`}
          >
            Sponsors
          </a>
          <div className="dropdown">
            <div
              className={`flex items-center px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] ${
                isActive("/groups") ? "text-[#65c6d7]" : "text-slate-200"
              }`}
            >
              <button className="dropbtn">Groups</button>
              <FaCaretDown />
            </div>
            <div className="dropdown-content flex flex-col items-center text-center bg-[#011C28] rounded-box z-[1] shadow text-slate-200 font-bold text-xl p-4 cursor-pointer mt-5 w-auto gap-2">
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/orlando-devs"
              >
                Orlando Devs
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/orlando-devops"
              >
                Orlando DevOps
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/orlando-innovation-league"
              >
                Orlando Innovation League
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/orlando-js"
              >
                OrlandoJS
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/orlando-php"
              >
                Orlando PHP
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/codex"
              >
                Codex
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/lady-devs"
              >
                Lady Devs
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/frontend-devs"
              >
                Frontend Devs
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/open-orlando"
              >
                Open Orlando
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups/ios"
              >
                IOS
              </a>
              <a
                className="py-1 px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] text-nowrap"
                href="/groups"
              >
                View All
              </a>
            </div>
          </div>
          <div
            className={`items-center hidden lg:flex lg:align-middle px-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#65c6d7] ${
              isActive("/slack") ? "text-[#65c6d7]" : "text-slate-200"
            }`}
          >
            <FaSlack style={{ color: "salmon" }} />
            <a href="/slack" className="whitespace-nowrap pl-2">
              Join Our Slack
            </a>
          </div>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-gradient-to-r from-white to-cyan-300"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-gradient-to-r from-white to-cyan-300"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-gradient-to-r from-white to-cyan-300"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex bg-[#011823] bottom-0 left-0 w-full h-screen z-40 items-center justify-center"
        >
          <div className="flex flex-col gap-14 text-2xl font-bold text-center items-center text-white">
            <a href="/about" className="px-5 py-2">
              About Us
            </a>
            <a href="/events" className="flex items-center gap-2  px-5 py-2">
              Events
              <FcCalendar />
            </a>
            <a href="/sponsors" className="px-5 py-2">
              Sponsors
            </a>
            <a href="/groups" className="px-5 py-2">
              Groups
            </a>

            <a href="/slack" className="flex items-center gap-2 px-5 py-2">
              Join Our Slack
              <FaSlack style={{ color: "salmon" }} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
