"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" flex justify-center items-center ">
          <CiMenuFries className=" text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className=" flex flex-col">
          {/* logo  */}
          <div className=" mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className=" text-4xl font-semibold">
                IVIC<span className=" text-accent">.</span>
              </h1>
            </Link>
          </div>
          {/* nav  */}
          <nav className=" flex flex-col justify-center items-center gap-8">
            {links.map((links, index) => {
              return (
                <Link
                  href={links.path}
                  key={index}
                  className={` ${links.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                >
                  {links.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
