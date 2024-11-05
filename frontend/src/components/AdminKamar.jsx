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
    
 } from "../MTailwind"

import { useFecthKamar, useFetchData } from "@/features/useFetchData";
import { useState } from "react";
import { useMutateKamar } from "@/features/useMutateData";
import { useFormik } from "formik";
import { swalCreated,swalDelete,swalSuccess,swalUpdate } from "./uttils/MySwal";
import { useDeleteData } from "@/features/useDeleteData";
import  * as Yup from 'yup';


const AdminKamar = ()=>{
    const {data, isLoading, refetch} = useFecthKamar()
   
    const {mutate,error} = useMutateKamar()
    const TABEL_HEAD = ['Nama Kamar','Qty','Harga','Fasilitas','aksi']
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
            
            const dataForm = new FormData()
            dataForm.append('id',formik.values.id)
            dataForm.append('nama_kamar',formik.values.nama_kamar)
            dataForm.append('jumlah_kamar',formik.values.jumlah_kamar)
            dataForm.append('price',formik.values.price)
            dataForm.append('fasilitas',formik.values.fasilitas)
            dataForm.append('image',formik.values.image)

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
        handleOpen()
        const isImageUrl = typeof data.image === "string";
        formik.setValues({
            ...data,
            image:isImageUrl?null:data
        })
    }

    const handleDelete = ((id)=>{
        swalDelete(async (result)=>{
            if (result.isConfirmed){
                const response = await deleteData(`kamar/?delete=${id}`)
                if (response.status == 200 ){
                    swalSuccess('berhasil di delete')
                    refetch()
                }

            }
        })
        
    })

// for render 
    const renderForm = ()=>{
     
        return (

                <form 
                    action="" 
                    method="post"
                    className="w-full p-2 flex flex-col gap-8 dark:text-white "
                    onSubmit={formik.handleSubmit}
                    >
                    <Typography>
                      
                    </Typography>
             
              <div>
                    <Input 
                        label="Nama Kamar"
                        color="white"
                        name ="nama_kamar"
                        onChange={formik.handleChange}
                        value={formik.values.nama_kamar}
                    />
                    <Typography variant="small"className="text-red-400 pl-4">{formik.errors.nama_kamar}</Typography>
              
              </div>

              <div>
                    <Input 
                        label="Jumlah Kamar"
                        color="white"
                        name = "jumlah_kamar"
                        value = {formik.values.jumlah_kamar}
                        onChange={formik.handleChange}
    
                    />
                    <Typography variant="small"className="text-red-400 pl-4">{formik.errors.jumlah_kamar}</Typography>

              </div>

              <div>
                    <Input 
                        label="Harga"
                        color="white"
                        name = "price"
                        value = {formik.values.price}
                        onChange={formik.handleChange}
                    />
                    <Typography variant="small"className="text-red-400 pl-4">{formik.errors.price}</Typography>

              </div>

              <div>
                     <Input 
                        label="Fasilitas Kamar"
                        color="white"
                        type="text"
                        name = "fasilitas"
                        value = {formik.values.fasilitas}
                        onChange={formik.handleChange}
    
                    />
                    <Typography variant="small"className="text-red-400 pl-4">{formik.errors.fasilitas}</Typography>


              </div>

              <div>
                     <Input 
                        label="Image"
                        color="white"
                        type="file"
                        accept="image/"
                        name = "image"
                       
                        onChange={(event) =>{
                            formik.setFieldValue("image", event.currentTarget.files[0])
                        }}
                        />
                    <Typography variant="small"className="text-red-400 pl-4">{formik.errors.image}</Typography>


              </div>
                    
                        
                <div className="flex flex-row gap-4">
                    <Button 
                        type="submit" 
                        color="green" 
                        
                        className=" dark:text-gray-900 w-full dark:bg-green-200 font-bold">Tambahkan</Button>
                    
                    <IconButton  
                     onClick = {()=>{formik.resetForm()}}
                     className=" dark:text-white dark:bg-red-300 font-bold aspect-square">
                            <BsFillTrashFill className="w-6 h-6" />
                    </IconButton>
    
                        
                       
                   
                    
                    </div>
                 
    
                </form>
    
    
        )
    }

    const renderData = ()=>{
        return (
            data?.map((data)=>{
                return(
                    <tr  key={data.id} className="text-sm border-b capitalize dark:border-blue-gray-100 ">
                        <td>
                            <Typography className="p-2" >

                            {data.nama_kamar}
                            </Typography>
                        </td>
                    
                        <td>
                            <Typography className="p-2" >

                            {data.jumlah_kamar}
                            </Typography>
                        </td>  
                        <td>
                            <Typography className="p-2" >

                            {data.price}
                            </Typography>
                        </td>
                        <td>
                            <Typography className="p-2" >

                            {data.fasilitas}
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
                {renderForm()}

        </Dialog>
        )
    }

    return(
        <div className="flex flex-col gap-8 ">
            <header>
                <Typography  className="text-2xl font-bold text-center">
                    Kamar Hotel
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

                {renderDialog()}

            </section>
        </div>

    )
}

export default AdminKamar