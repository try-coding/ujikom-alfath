"use client"
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone"; 
import * as Yup from 'yup'
import { Input, Typography } from "@/MTailwind";
const validationSchema = Yup.object().shape({
    title : Yup.string().required('Title is Required'),
    images :Yup.array().required('Image is Required')

})

const ImageUploadForm  = ()=>{

    const formik = useFormik({
        initialValues:{
            title : "",
            image : null,
        },
        validationSchema,
        onSubmit:(value)=>{
            console.log(value)
        }
    })

    const {getRootProps,getInputProps} = useDropzone({
        accept:'image/*',
        onDrop:(acceptedFiles) =>{
            console.log('accepted File is',acceptedFiles)
            formik.setValues({'image':acceptedFiles[0]})
        }
    })
    return(
    <>
        <form onSubmit={formik.handleSubmit} className="mb-8">
           <div {...getRootProps()} className="p-8 border-2 m-8 cursor-pointer border-green-900 border-dashed">
            <Input 
                type="file"
                variant="outlined"
                {...getInputProps()}
                className="border-none outline-none "
            />
                {formik.values.image?
                    <Typography>
                        {formik.values.image.name}
                        {console.log(formik.values.image.path)}
                    </Typography>
                :
                    <Typography className="text-center">
                        Drag n Drop Your Files
                    </Typography>

                }

           </div>
           

        </form>
    </>
    )
}

export default ImageUploadForm ;