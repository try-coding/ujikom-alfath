"use client"
import { FcAcceptDatabase } from "react-icons/fc"; 
import { BiPlusMedical } from "react-icons/bi"; 


import { Button, Card, IconButton, Typography } from "../../MTailwind"
import { useFetchPesanan } from "@/features/useFetchData";

const TabelPesanan = ()=>{
    const {data:dataPesanan} = useFetchPesanan()
    
    const TABEL_HEAD = ['Nama Tamu','Tipe Kamar','Check In','Check Out', 'Aksi']

    const renderDataPesanan = () => {
        return(
            <>
              {dataPesanan?.map(({id, nama_lengkap, tipe_kamar, check_in, check_out, })=>{
                            return(
                               <tr key={id} className="border-b capitalize dark:border-blue-gray-100 ">
                                <td>
                                    <Typography className="p-2" >
                                        {nama_lengkap}

                                    </Typography>
                                </td>
                            
                                <td>
                                    <Typography className="p-2" >
                                        {tipe_kamar}
                                    </Typography>
                                </td>  

                                <td>
                                    <Typography className="p-2" >

                                    {check_in}
                                    </Typography>
                                </td>  

                                <td>
                                    <Typography className="p-2" >

                                    {check_out}
                                    </Typography>
                                </td>  
                                <td className="flex gap-2 p-2">
                                    <IconButton color="green">
                                        <FcAcceptDatabase className="w-6 h-6"/>
                                    </IconButton>
                                    
                                </td>
                               </tr>     
                            ) 
                          
                        }) 

                        }
            </>
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

                      
                        {renderDataPesanan()}
                        
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

export default TabelPesanan