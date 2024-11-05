"use client"
import { BsFillTrashFill } from "react-icons/bs"; 
import { BiPlusMedical } from "react-icons/bi"; 
import { AiTwotoneEdit } from "react-icons/ai"; 

import { 
    Card, 
    IconButton, 
    Spinner, 
    Typography, 
    Dialog,
    Input, 
    Button,
    CardBody, 
    
 } from "../MTailwind"

import { useFecthKamar, useFetchData, useFetchFasilitas } from "@/features/useFetchData";
import { useState } from "react";
import { useMutateKamar } from "@/features/useMutateData";
import { useFormik } from "formik";
import { swalCreated,swalDelete,swalSuccess,swalUpdate } from "./uttils/MySwal";
import { useDeleteData } from "@/features/useDeleteData";
import ImageUploadForm from "./uttils/Dropzone";
import  * as Yup from 'yup';
import FormPesanan from "./form/FormPesanan";
import FormFasilitasHotel from "./form/FormFasilitasHotel";
import { useGlobal } from "@/features/useGlobal";


const AdminFasilitas = ()=>{
    const {data, isLoading, refetch} = useFetchFasilitas()
    const {setEditing, editing} = useGlobal()
    const {mutate,error} = useMutateKamar()
    const TABEL_HEAD = ['nama fasilitas','deskripsi','aksi']
    const [open, setOpen] = useState(false)
    const deleteData = useDeleteData()
    const validasiFormKamar = Yup.object({
        nama_kamar: Yup.string()
            .min(4, "Min. 4 Character")
            .max(50, "Max. 50 Character")
            .required("Nama wajib di isi"),
        
        jumlah_kamar: Yup.number()
            .typeError("Harus Angka!")
            .min(1, "Min. 1 Kamar")
            .required("Jumlah Kamar Wajib di isi"),
    
        price: Yup.number()
            .typeError("Harus Angka")
            .min(50000, "Min. 50.000")
            .max(100000000, "Max. 1.000.0000")
            .required("Price required!"),
        
        fasilitas: Yup.string()
            .min(3, "Min. 3 Character")
            .max(100, "Max 100 Character")
            .required("Fasilitas required!"),
    });
    
    const formik = useFormik({
        initialValues:{
            'id' : 0,
            'nama_kamar':'',
            'jumlah_kamar' : 0,
            'price' :0,
            'fasilitas':'',
            'image':null
        },
        onSubmit :()=>{
          

            mutate(formik.values,{
                onSuccess:()=>{
                    if (formik.values.id){
                        console.log('success Updated')
                        swalUpdate(`sucess updated ${formik.values.nama_kamar}`)                    
                    }else{
                        console.log('success Created')
                        swalCreated(`Success Created ${formik.values.nama_kamar}`)
                    }
                    refetch()
                    formik.resetForm()
                },onError:(err)=>{
                    console.log(err)
                }

            })
        },
        
        validationSchema:validasiFormKamar,
    })

// for handle
    const handleOpen = ()=>{
        setOpen(!open)
    }

    
 
    const handleEdit = (data) =>{
 
        setEditing(data)
        handleOpen()
        
        
    }

    const handleDelete = ((id)=>{
        swalDelete(async (result)=>{
            if (result.isConfirmed){
                const response = await deleteData(`fasilitas/?delete=${id}`)
                if (response.status == 200 ){
                    swalSuccess('berhasil di delete')
                    refetch()
                }

            }
        })
        
    })

// for render 
    

    const renderData = ()=>{
        return (
            data?.map((data)=>{
                return(
                    <tr  key={data.id} className="text-sm border-b capitalize dark:border-blue-gray-100 ">
                        <td>
                            <Typography className="p-2" >

                            {data.nama_fasilitas}
                            </Typography>
                        </td>
                    
                        <td>
                            <Typography className="p-2" >

                            {data.deskripsi}
                            </Typography>
                        </td>  
                       
                        <td className="flex gap-2 p-2">
                            <IconButton color="green" onClick={()=>{handleEdit(data)}}>
                                <AiTwotoneEdit  className="w-6 h-6"/>
                                
                            </IconButton>
                            
                            <IconButton color="red" onClick={()=>handleDelete(data.id)}>
                                <BsFillTrashFill className="w-6 h-6" />
                            </IconButton>
                            
                        </td>
                    </tr>     
                ) 
                
            }) 

            
        )
    }

    const renderDialog = () =>{
        return(
        <Dialog open={open} handler={handleOpen} className="dark:bg-blue-gray-900 p-8 z-20">
                <FormFasilitasHotel />

        </Dialog>
        )
    }

    return(
        <div className="flex flex-col gap-8 ">
            <header>
                <Typography  className="text-2xl font-bold text-center">
                    Fasilitas Hotel
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
                    <div className="mt-2 flex flex-row-reverse w-full">

                                
                                <Button 
                                    className="w-full " 
                                    color="green"
                                    variant="outlined"
                                    onClick={handleOpen}
                                    >
                                    <BiPlusMedical className="w-6 h-6 mx-auto  " />
                                </Button>

                    </div>
                </Card>

               

                {isLoading?<Spinner color="blue-gray" className="mx-auto w-8 h-8 my-8"/>:null}
                {renderDialog()}

            </section>
        </div>

    )
}

export default AdminFasilitas