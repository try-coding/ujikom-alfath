"use client"
import Image from "next/image";
import { Carousel, Typography, Button } from "../MTailwind";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return ( 
    <div className="h-[100vh] ">
    <div className="relative h-full w-full">
        <Image 
        src="/public/images/001.jpg"
        alt="image 1"
        layout="fill"
        objectFit="cover"/>
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              <Typewriter
                words={["Welcome to My Hotel", "Best Hotel for you"]} 
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={10}

                loop="500"
                
              /> 
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" text-sm md:text-lg  mb-12 "
            >
              Rasakan kenyamanan dan kemewahan di jantung kota. Nikmati pengalaman menginap yang tak terlupakan dengan fasilitas premium dan layanan ramah.


            </Typography>
            <div className="flex justify-center gap-2">
  
                <Link href={'#form-pesanan'}>
                  <Button as="a"  className=" dark:text-white dark:bg-blue-gray-800">
                      Pesan Sekarang
                    
                  </Button>
                </Link>
                <Link href={'#list-kamar'}>
              <Button variant={"outlined"} className="hidden sm:block" color="white">
                  Lihat Kamar
                
              </Button>
                </Link>
            </div>
          </div>
        </div>
    </div>
          
                 
      
    

    </div>
  );
}

export default Hero