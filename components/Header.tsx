import * as React from "react";
import cn from "classnames";
import LogoSVG from "./assets/svg/logoFull.svg";
import InstructionSVG from "./assets/svg/instruction.svg";
import PlaygroundSVG from "./assets/svg/playground.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <section className="flex-col flex  mt-16 mb-16 md:mb-12 border-gray-800 border-b-2 text-white transition ease-in duration-700 ">
      <div className="flex w-full justify-between">
        <LogoSVG />
        <div className="flex-col items-center justify-end text-right">
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            <span className="font-bold">Technical assessment</span>
          </h4>
          <h5>Last updated: November</h5>
        </div>
      </div>

      <div className="flex flex-wrap mt-6">
        <Link href="/" passHref>
          <a
            className={cn(
              "py-3 w-1/2 px-4 sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider rounded-t",
              pathname === "/"
                ? "border-brand text-brand bg-gray-100"
                : "hover:text-gray-300 tracking-wider"
            )}
          >
            <InstructionSVG className="w-5 h-5 mr-3 fill-current" />
            Instructions
          </a>
        </Link>
        <Link href="/playground" passHref>
          <a
            className={cn(
              "py-3 w-1/2 px-4 sm:w-auto justify-center border-b-2 title-font font-medium  inline-flex items-center leading-none tracking-wider rounded-t",
              pathname === "/playground"
                ? "border-brand text-brand bg-gray-100"
                : "hover:text-gray-300 tracking-wider"
            )}
          >
            <PlaygroundSVG className="w-5 h-5 mr-3 fill-current" />
            Task Playground
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Header;
