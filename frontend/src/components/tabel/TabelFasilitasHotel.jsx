"use client"
import { BiPlusMedical } from "react-icons/bi"; 
import { AiTwotoneEdit } from "react-icons/ai"; 
import { BsFillTrashFill } from "react-icons/bs"; 

import { Button, Card, IconButton, Typography } from "../../MTailwind"
import { useFecthFasilitasHotel } from "@/features/useFetchData";
import { useEffect } from "react";

const TabelFasilitasHotel = ()=>{
    const {data:fasilitasHotel ,isLoading} = useFecthFasilitasHotel()

    const TABEL_HEAD = ['Nama_Fasilitas', 'Tipe Kamar','Image','aksi']
    


    const renderFasilitasHotel = ()=>{
        return (
          <>
            {fasilitasHotel?.map(({id, nama_fasilitas, keterangan, image})=>{
                return(
                    <tr key={id}>
                       <td>{nama_fasilitas}</td >
                       <td>{keterangan}</td>                   
                       <td>{image}</td>                   
                    </tr>
                )
            })}
          
          </>
        )
    }
    return(
        <Card className="mt-20 m-4 overflow-scroll">
            <table className="h-full w-full ">
                <thead className=" dark:bg-blue-gray-700 border dark:border-blue-gray-700 dark:text-blue-gray-50">
                    <tr className="border-b dark:border-blue-gray-100">
                        {TABEL_HEAD?.map((head)=>{
                            return(
                                <th key={head}>
                                    <Typography 
                                        variant="small "
                                        className="capitalize p-2 border-l-deep-orange-50 text-left font-bold"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            )
                        })}

                    </tr>

                   
                </thead>
                <tbody>
                        {renderFasilitasHotel()}

                </tbody>

            </table>
            <div className="flex flex-row-reverse w-full">
                        <Button 
                            className="m-2 w-full " 
                            color="green"
                            variant="outlined"
                            >
                            <BiPlusMedical className="w-6 h-6 mx-auto  " />
                        </Button>

            </div>
            </Card>
    )
}

export default TabelFasilitasHotel