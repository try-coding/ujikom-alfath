"use client"
import { useFecthKamar, useFetchFasilitas } from "@/features/useFetchData";
import { Card, CardBody, Spinner,CardHeader,CardFooter,Button, Typography } from "../MTailwind";
import Link from "next/link";
import Image from "next/image";

const FasilitasHotel = ()=>{
    const {data:dataKamar, isLoading } = useFetchFasilitas()

    const renderCard = ()=>{

        return(
           <>
             {dataKamar?.map((data)=>{
            return(
            <Card key={data.id} className=" hover:scale-105 group transition-all duration-300 justify-between" >
                <CardBody className="grid items-center">
                    <Image className="min-h-44 max-h-44 w-full object-cover"  src={`http://localhost:8000${data.image}`} alt={data.nama_kamar} />  
                    <Typography
                        variant="h5"
                        className="md:text-lg"
                    >
                        {data.nama_fasilitas}
                    </Typography>

               
                    <Typography
                        variant="small"
                        className=""

                    >
                        {data.deskripsi}
                    </Typography>

                </CardBody>
               

               
     
            </Card>


            )
            })}
           
           </>
            
           

        )
    }

    
    
    return(
        <div className="grid grid-cols-1 gap-14 sm:gap-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
            <div className="sm:grid sm:col-span-2 sm:mb-8 md:col-span-3 lg:col-span-4">
            <Typography variant="h3" className="text-center ">
                        Fasilitas Kamar
            </Typography>

            </div>
                {renderCard()}
                {isLoading? <Spinner/> : null}

        </div>




    )
}

export default FasilitasHotel;