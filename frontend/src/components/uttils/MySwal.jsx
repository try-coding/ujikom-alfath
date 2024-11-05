import Swal from "sweetalert2";

export const MySwal = Swal.mixin(
        {
            customClass:{
                popup: 'dark:bg-blue-gray-800 dark:text-white rounded-lg shadows-lg',
                confirmButton : 'bg-green-700 w-32 rounded-lg',
                title :"text-4xl bold capitalize",
                container:"z-[10000000]"
            },
            timer:3000,
          
        }
    )

export const swalCreated = (text)=>{
    MySwal.fire({
        title:'Created',
        icon:'success',
        text,
    });
}
export const swalSuccess = (text)=>{
    MySwal.fire({
        title:'success',
        icon:'success',
        text,
    });
}

export const swalUpdate = (text)=>{
    MySwal.fire({
        title:'Updated',
        icon:'success',
        text,
    });
}




export const swalDelete = (fn)=>{
    MySwal.fire({
        title:'Konfirmasi',
        text:"apakah anda yakin ingin menghapusnya?",
        icon:'warning',
        showCancelButton:true,
        timer:false,
        showConfirmButton:true,
        cancelButtonColor:"green",
        confirmButtonColor:"gray"
        
        
    }).then(fn);
}
