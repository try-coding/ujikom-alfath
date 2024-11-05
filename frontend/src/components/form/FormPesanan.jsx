"use client"
import { useFecthKamar } from "@/features/useFetchData"
import {Typography, Input, Button, Select, Option, Card, CardBody,} from "../../MTailwind"
import { useFormik, Form, Field, Formik } from "formik"
import { useEffect } from "react"
import { useMutatePesanan } from "@/features/useMutateData"
import { swalCreated, swalUpdate } from "../uttils/MySwal"
import * as Yup from 'yup'
const FormPesanan = ()=>{
    const {data:dataKamar,isLoading} = useFecthKamar()
    const {mutate} = useMutatePesanan()

    useEffect(()=>{console.log(dataKamar)},[dataKamar])
    const validationSchema = Yup.object({
        'nama_lengkap':Yup.string().required('Harus disi'),
        'email':Yup.string().required('Harus disi'),
        'no_handphone':Yup.number(0,13).required('harus diisi'),
        'nama_kamar':Yup.string().required('Harus disi'),
        'check_in' :Yup.date().required('Harus disi'),
        'check_out':Yup.date().required('Harus disi'),
    })
    const formik = useFormik({
        initialValues:{
            'nama_lengkap':"",
            'email':"",
            'no_handphone':"",
            'nama_kamar':"",
            'check_in' :"",
            'check_out':"",
        },
        onSubmit:()=>{
            console.log(formik.values)
            const dataForm = new FormData()
            dataForm.append('nama_lengkap',formik.values.nama_lengkap)
            dataForm.append('email',formik.values.email)
            dataForm.append('nama_kamar',formik.values.nama_kamar)
            dataForm.append('no_handphone',formik.values.no_handphone)
            dataForm.append('check_in',formik.values.check_in)
            dataForm.append('check_out',formik.values.check_out)

            mutate(dataForm, {
                onSuccess:()=>{
                    if (formik.values.id){
                        console.log('success Updated')
                        swalUpdate(`sucess updated ${formik.values.nama_kamar}`)                    
                    }else{
                        console.log('success Created')
                        swalCreated(`Terimakasih Memesan ${formik.values.nama_lengkap}`)

                    }
                    formik.resetForm()
                }
            })
            

        },


    })


        const handleChangeSelect = (value) => {
            console.log({'value':value})
            formik.setFieldValue('nama_kamar', value)
            console.log(formik.values)
        };
    
    const renderSelect = () =>{
        return(
            <Select
                name="nama_kamar"
                color="white"
                label="Kamar"
                className="dark:text-white"
                onChange={handleChangeSelect}

                labelProps={
                    {"className" : "dark:text-white"}
            }
            >      
            {dataKamar?.map((data)=>{
                return(
                    <Option key={data.id} value={data.id}>{data.nama_kamar}</Option>
                )
            })}
            
            </Select>
            
        )
    }
    return (
 
<Card className=" mx-auto dark:bg-blue-gray-800" >
    <CardBody>
            <Typography 
                variant="h4"
                className="mb-8 text-center"
                color="white"
            >
                Formulir Pesanan
            </Typography>

            <form 
                action=""
                method="post"
                className="flex flex-col gap-6"
                onSubmit={formik.handleSubmit}
                >

          
                    <Input 
                        placeholder="jhon smith"
                        name= "nama_lengkap"
                        onChange={formik.handleChange}
                        value={formik.values.nama_lengkap}
                        label="Nama Lengkap"
                        color="white"
                        className=" dark:text-gray-100 dark:bg-blue-gray-900 "
                    />
                    
                    <Input 
                        placeholder="Jhon@example.com"
                        name = "email"
                        onChange={formik.handleChange}
                        value={formik.values.email}

                        
                        type="email"
                        label="Email"
                        color="white"
                        className=" dark:text-gray-100 dark:bg-blue-gray-900"
                    />
                    <div className="flex gap-8 flex-col sm:flex-row">
                    <Input  
                        type="date" 
                        color="white" 
                        name="check_in"
                        itemProp={{'className' :'text-white'}}
                        onChange={formik.handleChange}
                        value={formik.values.check_in}


                        className="text-white" label="Check In"></Input>
                    <Input 
                    type="date" 
                    color="white" 
                    onChange={formik.handleChange}
                    name = "check_out"
                    className="text-white" 
                    label="Check Out"
                    value={formik.values.check_out}

                    />


                    </div>
               
               

                    <Input 
                        placeholder="08XX XXXX XXXX"
                        type="number"
                        label="No Handphone"
                        name="no_handphone"
                        onChange={formik.handleChange}
                        value={formik.values.no_handphone}

                        color="white"
                        className=" dark:text-gray-100 dark:bg-blue-gray-900"
                    />

        
                    {isLoading? "Loading" : renderSelect()}
                 
                              
                <Button type="submit" className="dark:text-gray-900 dark:bg-blue-gray-100">
                    Konfirmasi Pemesanan
                </Button>

            </form>
    </CardBody>

</Card>

    )
}

export default FormPesanan;