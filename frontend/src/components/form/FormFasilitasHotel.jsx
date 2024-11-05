"use client"
import { useFormik } from "formik"
import {Typography, Input, Button, Card, Select, Option, IconButton, Textarea} from "../../MTailwind"
 
import { useMutateFasilitas } from "@/features/useMutateData"
import * as Yup from 'yup'
import { swalCreated, swalUpdate } from "../uttils/MySwal"
import { useFetchFasilitas } from "@/features/useFetchData"
import { BsFillTrashFill } from "react-icons/bs"
import { useGlobal } from "@/features/useGlobal"
import { useEffect } from "react"



const FormFasilitasHotel = ()=>{
    const {mutate} = useMutateFasilitas()
    const {refetch} = useFetchFasilitas()
    const {editing} = useGlobal()

    const validationSchema = Yup.object({
        nama_fasilitas: Yup.string().required('Nama Fasilitas Wajib di isi'),
        deskripsi : Yup.string().required("deskripsi Wajib di isi"),
        image : Yup.mixed().required('Image Wajib di isi')
    })


    const formik = useFormik({
        initialValues:{
            'id' : 0,
            'nama_fasilitas':"",
            'deskripsi':"",
            'image' : null,
        },
        onSubmit:() =>{
            console.log('cek formik', formik.values)
            mutate(formik.values, {
                onSuccess:()=>{
                    if (formik.values.id){
                        console.log('success Updated')
                        swalUpdate(`sucess updated ${formik.values.nama_fasilitas}`)                    
                    }else{
                        console.log('success Created')
                        swalCreated(`Success Created ${formik.values.nama_fasilitas}`)
                    }
                    refetch()
                    formik.resetForm()
                }
            })
        },
        
    })

    useEffect(()=>{
        console.log('di Edit')
        console.log(editing)
        formik.setFieldValue('id',editing.id)
        formik.setFieldValue('nama_fasilitas',editing.nama_fasilitas)
        formik.setFieldValue('deskripsi',editing.deskripsi)
    },[editing,formik])
    return (
   
            <form 
                onSubmit={formik.handleSubmit}
                method="post"
                className="w-full p-2 flex flex-col gap-8 "
                >

       
                <Input 
                    name ="nama_fasilitas"
                    label="Nama Fasilitas"
                    onChange={formik.handleChange}
                    value={formik.values.nama_fasilitas}
                    color="white"
                    type="text"
                />

                <Textarea 
                    name = "deskripsi"
                    label="deskripsi"
                    value={formik.values.deskripsi}
                    onChange={formik.handleChange}
                    color="white"
                    type="text"
                />

                <Input 
                    name = "image"
                    label="Upload Gambar"
                    onChange = {(event =>{
                        formik.setFieldValue('image', event.currentTarget.files[0])
                    })}
                    color="white"
                    type="file"
                />
                
                    
                <div className="flex flex-row gap-4">
                <Button 
                        type="submit" 
                        color="green" 
              
                        className=" dark:text-gray-900 w-full dark:bg-green-200 font-bold">
                </Button>    
                    <IconButton  
                     onClick = {()=>{formik.resetForm()}}
                     className=" dark:text-white dark:bg-red-300 font-bold aspect-square">
                        
                        <BsFillTrashFill className="w-6 h-6" />
                </IconButton>
                
                </div>
             

            </form>

    )
}

export default FormFasilitasHotel;