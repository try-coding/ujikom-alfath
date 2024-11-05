import { useState } from "react"

export const useHandleForm = ()=>{
    const [editingMode, setEditingMode ] = useState(false)
    const [dataEditing, setDataEditing] = useState({})
    
    return {
        editingMode,
        setEditingMode,
        dataEditing,
        setDataEditing
    }
}