"use client"


import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "@/lib/hotel"
export const useMutateData = (url, headers = {})=>{
  return useMutation({
    mutationFn:async(data)=>{
      console.log('dengan put')
      console.log(data.id)
      
      if(data.id){
        const response = await axiosInstance.put(url, data, {headers} )
        return response.data
      }else{
        const response = await axiosInstance.post(url, data, {headers} )
        return response.data

      }   
    },
  })
}


export const useMutateKamar = ()=>{
    const headers = {
      'Content-Type':'multipart/form-data',
    }
    return useMutateData ('kamar/', headers)
}

export const useMutateFasilitas = ()=>{
  const headers = {
    'Content-Type':'multipart/form-data',
  }
  return useMutateData ('fasilitas/', headers)
}



export const useMutatePesanan = () => {
    
    return useMutateData ('pesanan/')
}