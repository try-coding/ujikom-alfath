import Navigasi from "@/components/Navigasi";
import Footer from "@/components/Footer";
import AdminKamar from "@/components/AdminKamar";
import { Card,CardBody, CardHeader,Typography} from "@/MTailwind";
import AdminFasilitas from "@/components/AdminFasilitas";
import FormFasilitasHotel from "@/components/form/FormFasilitasHotel";
import PesananResepsionis from "@/components/PesananResepsionis";
const ResepsionisPage = ()=>{
    return(
        <div className="w-screen ">
            <nav className="">
                <Navigasi />

            </nav>

           <section className="gap-8 py-8 px-4">
            <Card className="py-8 px-2">
            <PesananResepsionis />
            </Card>

           </section>
        

            <footer className="">
                <Footer/>

            </footer>
        </div>
    )
}

export default ResepsionisPage;