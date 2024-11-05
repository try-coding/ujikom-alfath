"use client"


import { 
    Card, 
    Spinner, 
    Typography, 

    
 } from "../MTailwind"

import { useFetchPesanan } from "@/features/useFetchData";



const PesananResepsionis = ()=>{
    const {data, isLoading } = useFetchPesanan()
   
    const TABEL_HEAD = ['Nama Lengkap','Email','No Handphone','NamaKamar','Check_in','Check_out']
    

 
   
// for render 
   
    const renderData = ()=>{
        return (
            data?.map((data)=>{
                return(
                    <tr  key={data.id} className="text-sm border-b capitalize dark:border-blue-gray-100 ">
                        <td>
                            <Typography className="p-2" >

                            {data.nama_lengkap}
                            </Typography>
                        </td>
                    
                        <td>
                            <Typography className="p-2" >

                            {data.email}
                            </Typography>
                        </td>  
                        <td>
                            <Typography className="p-2" >

                            {data.no_handphone}
                            </Typography>
                        </td>
                        <td>
                            <Typography className="p-2" >

                            {data.nama_kamar.nama_kamar}
                            </Typography>
                        </td>    
                   

                        <td>
                            <Typography className="p-2" >

                            {data.check_in}
                            </Typography>
                        </td>    
                        <td>
                            <Typography className="p-2" >

                            {data.check_out}
                            </Typography>
                        </td>    
               
                    </tr>     
                ) 
                
            }) 

            
        )
    }

    

    return(
        <div className="flex flex-col gap-8 ">
            <header>
                <Typography  className="text-2xl font-bold text-center">
                    Pesanan Kamar
                </Typography>
                
            </header>

            <section>
                <Card className="w-full h-full rounded-md overflow-scroll">
                <table className="h-full w-full overflow-hidden ">
                        <thead className=" dark:bg-blue-gray-700 border dark:border-blue-gray-700 dark:text-blue-gray-50">
                            <tr className="border-b dark:border-blue-gray-100">
                                {TABEL_HEAD.map((head)=>{
                                    return(
                                        <th key={head}>
                                            <Typography 
                                            
                                                className="capitalize text-sm p-2 border-l-deep-orange-50 text-left font-bold"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    )
                                })}

                            </tr>

                            
                        </thead>
                        <tbody>
                            {renderData()}

                        </tbody>
                        
                    </table>
                {isLoading?<Spinner color="blue-gray" className="mx-auto w-8 h-8 my-8"/>:null}
        
                </Card>


            </section>
        </div>

    )
}

export default PesananResepsionis