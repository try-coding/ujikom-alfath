import {Typography, Input, Button, Card} from "../../MTailwind"
const FormRegister = ()=>{
    return (
        <Card 
            className="bg-transparent m-4 dark:text-blue-gray-100"
        >
            <Typography 
                variant="h3"
                className="text-center"
            >
                Formulir Register
            </Typography>

            <form 
                action="" 
                method="post"
                className="w-full p-2 flex flex-col gap-8 "
                >

                <Input 
                    label="Nama Lengkap"
                    color="white"
                />
                <Input 
                    label="username"
                    color="white"
                />

                <Input 
                    label="Password"
                    color="white"
                    type="password"
                />

                <Input 
                    label="Konfirmasi Password"
                    color="white"
                    type="password"
                />



                
                    
                <div className="flex flex-row gap-4">
                <Button 
                    type="submit" 
                    color="green" 
                    className=" dark:text-gray-900 w-full dark:bg-green-200 font-bold">
               
                Register               
                </Button>
                
                
                </div>
             

            </form>

        </Card>
    )
}

export default FormRegister;