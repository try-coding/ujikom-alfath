"use client"
import React, { useState } from "react";
import useNilai from "@/features/useNilai";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "../MTailwind";
import Link from "next/link";

const Navigasi = () => {
  const [openNav, setOpenNav] = useState(false);
  const {nilai} = useNilai()
  const site_name = "Del Luna"
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const link =[
        ['Home', '/'],
        ['Admin', '/admin'],
        ['Resepsionis', '/resepsionis'],
     ]
 

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
     {link.map((data,id)=>{
      return(
        <Typography
        key={id}
        as="li"
        variant="small"
        className="p-1 font-normal"
      >
       <Link href={data[1]}>{data[0]}</Link>
      </Typography>

      )
     })}
      
      
    </ul>
  );
 
  return (
      <Navbar className="sticky  shadow-xl border-none dark:bg-blue-gray-900  dark:text-gray-100 top-0 z-[10000] h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 dark:text-gray-100">
          <Typography
            className="mr-4 text-xl font-bold cursor-pointer py-1.5 "
          >
            <Link href={"/"}>
            {site_name}
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                color="white"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                color="white"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="dark:text-blue-gray-100">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" color="white"className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" color="white" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
  );

}
export default Navigasi