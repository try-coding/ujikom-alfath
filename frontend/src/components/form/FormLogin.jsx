import {Typography, Input, Button, Card} from "../../MTailwind"
const FormLogin = ()=>{
    return (
        <Card 
            className="bg-transparent m-4 dark:text-blue-gray-100"
        >
            <Typography 
                variant="h3"
                className="text-center"
            >
                Formulir Login
            </Typography>

            <form 
                action="" 
                method="post"
                className="w-full p-2 flex flex-col gap-8 "
                >

                <Input 
                    label="Username"
                    placeholder="username"
                    color="white"
                />

                <Input 
                    label="Password"
                    placeholder="Your password"
                    color="white"
                    type="password"
                />


                
                    
                <div classNsame="flex flex-row gap-4">
                <Button 
                    type="submit" 
                    color="green" 
                    className=" dark:text-gray-900 w-full dark:bg-green-200 font-bold">
               
                Login               
                </Button>
                </div>
             

            </form>

        </Card>
    )
}

export default FormLogin;