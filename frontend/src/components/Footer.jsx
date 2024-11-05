"use client"
import { Typography } from "../MTailwind";
 
const Footer = () => {
  return (
    <footer className="md:px-8 dark:text-white flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal dark:text-white">
        &copy; 2024 My Hotel
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 dark:text-white">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="dark:text-white font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Home
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className=" dark:text-white font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Fasilitas
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="dark:text-white font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Kamar
          </Typography>
        </li>
    </ul>
    </footer>
  );
}


export default Footer;