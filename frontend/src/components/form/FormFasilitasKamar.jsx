import {Typography, Input, Button, Card, Select, Option} from "../../MTailwind"
const FormFasilitasKamar = ()=>{
    return (
        <Card 
            className="bg-transparent m-4 dark:text-blue-gray-100"
        >
            <Typography 
                variant="h3"
                className="text-center"
            >
                Formulir Fasilitas Kamar
            </Typography>

            <form 
                action="" 
                method="post"
                className="w-full p-2 flex flex-col gap-8 "
                >

                <Select
                    label="Type Kamar"
                    color="white"
                    className="text-blue-gray-100"
                    labelProps={{
                        className : "text-blue-gray-100"
                    }}
                >
                    <Option >Kamar Sweet</Option>
                    <Option >Kamar Delux</Option>
                    <Option >Kamar Clasic</Option>

                </Select>

                <Input 
                    label="Fasilitas"
                    color="white"
                    type="text"
                />


                
                    
                <div className="flex flex-row gap-4">
                <Button 
                    type="submit" 
                    color="green" 
                     
                    className=" dark:text-gray-900 w-full dark:bg-green-200 font-bold">
                            Tambahkan
                    </Button>
                <Button 
                    type="reset" 
                    color="red" 
                   
                    className=" dark:text-gray-900 dark:bg-red-200 font-bold">
                        Hapus
                </Button>
                   
                
                
                </div>
             

            </form>

        </Card>
    )
}

export default FormFasilitasKamar;