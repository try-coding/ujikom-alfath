"use client"
import { BsFillTrashFill } from "react-icons/bs"; 
import {Typography, Input, Button,  IconButton} from "../../MTailwind"

import { useMutateKamar } from "../../features/useMutateData";
import { useFecthKamar} from "@/features/useFetchData";

import { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
const FormKamar = ()=>{
    const {modeEditing, formik} = useContext(FormContext)

    const mutation = useMutateKamar()
    const {refetch} =useFecthKamar()
    

    
    return (

       

            <form 
                action="" 
                method="post"
                encType="multipart/form-data"
                className="w-full p-2 flex flex-col gap-8 dark:text-white "
                onSubmit={formik.handleSubmit}
                >
                <Typography>
                    {modeEditing?"Mode Editing Aktif":"Mode Editing OFF"}
                </Typography>
                <Input 
                    label="Nama Kamar"
                    color="white"
                    name ="nama_kamar"
                    onChange={formik.handleChange}
                    value={formik.values.nama_kamar}
                    
                />
                <Input 
                    label="Jumlah Kamar"
                    color="white"
                    type="number"
                    name = "jumlah_kamar"
                    value = {formik.values.jumlah_kamar}
                    onChange={formik.handleChange}

                />
                <Input 
                    label="Harga"
                    color="white"
                    type="number"
                    name = "price"
                    value = {formik.values.price}
                    onChange={formik.handleChange}

                />
                 <Input 
                    label="Fasilitas Kamar"
                    color="white"
                    type="text"
                    name = "fasilitas"
                    value = {formik.values.fasilitas}
                    onChange={formik.handleChange}

                />


                
                    
                <div className="flex flex-row gap-4">
                    <Button 
                        type="submit" 
                        color="green" 
                        className=" dark:text-gray-900 w-full dark:bg-green-200 font-bold">
                
                    Tambahkan               
                    </Button>
                    <IconButton  className=" dark:text-white dark:bg-red-300 font-bold aspect-square">
                        
                        <BsFillTrashFill className="w-6 h-6" />
                    </IconButton>

         
                </div>
             

            </form>


    )
}

export default FormKamar;