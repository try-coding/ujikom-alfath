import Navigasi from "@/components/Navigasi";
import Footer from "@/components/Footer";
import AdminKamar from "@/components/AdminKamar";
import { Card,CardBody, CardHeader,Typography} from "@/MTailwind";
import AdminFasilitas from "@/components/AdminFasilitas";
const AdminPage = ()=>{
    return(
        <div className="w-screen ">
            <nav className="">
                <Navigasi />

            </nav>

           <section className="flex gap-8 py-8 px-4 flex-col md:flex-row md:justify-center">
            <Card className="py-8 px-2">
                <AdminKamar />

            </Card>

            <Card className="py-8 px-2">

                <AdminFasilitas />
            </Card>

           </section>
        

            <footer className="">
                <Footer/>

            </footer>
        </div>
    )
}

export default AdminPage;