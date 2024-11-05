import { Typography, Card } from "../MTailwind";

const About = () => {
    return (

            <Card className="p-6 dark:text-white dark:bg-blue-gray-800">
                <Typography 
                    variant="h4"
                    className="mb-4 text-center"
                    
                    >
                    About Us

                </Typography>
                <Typography
                    variant="paragraph"
                    className="text-center md:text-left"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui ut quis quo, eveniet aspernatur reprehenderit sit sequi. Quas fugiat est ex, corrupti tempora illo quis recusandae veniam, quam itaque ad dolorum dignissimos illum? Nesciunt laboriosam veritatis amet aspernatur? Animi a veritatis libero necessitatibus minus ullam eligendi tenetur dolorum ipsam quae?

                </Typography>
            
            </Card>

    )
}

export default About;