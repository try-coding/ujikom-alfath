"use client"
import { create } from "zustand";


const useNilai = create((set) => ({
    nilai : "",
    setNilai : newNilai => {
        set({nilai:newNilai})
    },
}))


export default useNilai 