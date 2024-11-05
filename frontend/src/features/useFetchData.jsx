"use client"

import { axiosInstance } from '@/lib/hotel';
import { useQuery } from '@tanstack/react-query';

export const useFetchData = (urlFetch, keyName) => {
  return  useQuery({
    queryKey: [keyName], // queryKey penting untuk caching dan refetch
    queryFn: async () => {
      const response = await axiosInstance.get(urlFetch);
      return response.data; // Mengembalikan data dari API
    },
  });
};


export const useFecthKamar = () =>{
  return useFetchData('kamar/', 'kamar')
}


export const useFetchFasilitas = () =>{
  return useFetchData('fasilitas/', 'fasilitas-kamar')
}
export const useFetchPesanan = () =>{
  return useFetchData('pesanan/', 'pesanan')
}

export const useFetchKamarID = (id) =>{
  return useFetchData(`kamar/${id}`,`kamar-${id}`)
} 


