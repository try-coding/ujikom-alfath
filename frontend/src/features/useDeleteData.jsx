"use client"

import { axiosInstance } from "@/lib/hotel"




export const useDeleteData = async (url) =>{

    try{
        const response = await axiosInstance.delete(url)
        return response

    }catch(error){
        console.log(error)
    }

  
    
}

