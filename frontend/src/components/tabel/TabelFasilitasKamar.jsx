"use client"
import { BiPlusMedical } from "react-icons/bi"; 
import { AiTwotoneEdit } from "react-icons/ai"; 
import { BsFillTrashFill } from "react-icons/bs"; 

import { Button, Card, IconButton, Typography } from "../../MTailwind"
import { useFetchData } from "@/features/useFetchData";

const TabelFasilitasKamar = ()=>{

    const {data:fasilitas, isLoading} = useFetchData('fasilitas/kamar/', 'fasilitas')

    const TABEL_HEAD = ['Tipe Kamar', 'Fasilitas','aksi']
    
    const renderFasilitas = () =>{
        return(
                fasilitas?.map((data)=>{
                    return(
                        <tr key={data.id} className="border-b capitalize dark:border-blue-gray-100 ">
                        <td>
                            <Typography className="p-2" >

                            {data['tipe_kamar']}
                            </Typography>
                        </td>
                        <td>
                            <Typography className="p-2" >

                            {data['nama_fasilitas']}
                            </Typography>
                        </td>  
                        
                        <td className="flex gap-2 p-2">
                            <IconButton color="green">
                                <AiTwotoneEdit  className="w-6 h-6"/>
                                
                            </IconButton>
                            
                            <IconButton color="red">
                                <BsFillTrashFill className="w-6 h-6" />
                            </IconButton>
                            
                        </td>
                        </tr>     
                    ) 
                    
                }) 

        
        )
    }
    return(
        <Card className="mt-20 m-4 overflow-scroll">
            <table className="h-full w-full ">
                <thead className=" dark:bg-blue-gray-700 border dark:border-blue-gray-700 dark:text-blue-gray-50">
                    <tr className="border-b dark:border-blue-gray-100">
                        {TABEL_HEAD.map((head)=>{
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
                    {renderFasilitas()}
                        

                        
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

export default TabelFasilitasKamar