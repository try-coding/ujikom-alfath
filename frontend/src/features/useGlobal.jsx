import { create } from "zustand";


export const useGlobal = create((set)=>({
    formKamar : {},
    setFormKamar : (value) => set({formKamar: value}),
    editing :{},
    setEditing : (edit) => set({editing:edit})
    
}))