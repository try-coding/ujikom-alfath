"use client"

import { useFormik } from "formik";

const { createContext, useState } = require("react");

export const FormContext = createContext()

export const FormProvider =  ({children}) =>{
    const [dataEdit,setDataEdit] = useState()
    const [modeEditing, setModeEditing] = useState()
    const [initialValues,setInitialValue ] = useState()
    const [onSubmit, setOnSubmit] = useState()

    const formik = useFormik({
        initialValues: modeEditing && dataEdit ? dataEdit : initialValues,
        onSubmit,
    })
    
   
    return(

        <FormContext.Provider value={{formik, dataEdit,setDataEdit,modeEditing,setModeEditing,setInitialValue, initialValues}}>
            {children}
        </FormContext.Provider>

    )

}